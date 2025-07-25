package com.example.mining.service;

import com.example.mining.model.ExhibitorRequest;
import com.example.mining.repository.ExhibitorRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import jakarta.mail.internet.MimeMessage;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.qrcode.QRCodeWriter;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.client.j2se.MatrixToImageWriter;
import java.io.ByteArrayOutputStream;
import org.springframework.core.io.ByteArrayResource;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ExhibitorRequestService {
    @Autowired
    private ExhibitorRequestRepository exhibitorRequestRepository;

    @Autowired
    private JavaMailSender mailSender;

    public ExhibitorRequest save(ExhibitorRequest request) {
        return exhibitorRequestRepository.save(request);
    }

    public List<ExhibitorRequest> getAll(String search) {
        List<ExhibitorRequest> all = exhibitorRequestRepository.findAll();
        if (search == null || search.isEmpty()) return all;
        String s = search.toLowerCase();
        return all.stream().filter(r ->
            (r.getFirstName() != null && r.getFirstName().toLowerCase().contains(s)) ||
            (r.getLastName() != null && r.getLastName().toLowerCase().contains(s)) ||
            (r.getCompanyName() != null && r.getCompanyName().toLowerCase().contains(s)) ||
            (r.getEvent() != null && r.getEvent().toLowerCase().contains(s))
        ).collect(Collectors.toList());
    }

    public ExhibitorRequest getById(Long id) {
        return exhibitorRequestRepository.findById(id).orElse(null);
    }

    public ExhibitorRequest grantRequest(Long id) {
        ExhibitorRequest req = exhibitorRequestRepository.findById(id).orElseThrow();
        req.setStatus("GRANTED");
        req.setGrantedAt(java.time.LocalDateTime.now());
        ExhibitorRequest saved = exhibitorRequestRepository.save(req);
        // Send granted email with badge/QR
        sendGrantedEmailWithQR(req);
        return saved;
    }
    public ExhibitorRequest denyRequest(Long id) {
        ExhibitorRequest req = exhibitorRequestRepository.findById(id).orElseThrow();
        req.setStatus("DENIED");
        ExhibitorRequest saved = exhibitorRequestRepository.save(req);
        // Send denial email
        sendEmail(req.getEmail(), "Exhibitor Request Denied", "We regret to inform you that your exhibitor request was denied.");
        return saved;
    }
    public List<ExhibitorRequest> getGrantedExhibitors() {
        return exhibitorRequestRepository.findAll().stream()
            .filter(r -> "GRANTED".equals(r.getStatus()))
            .toList();
    }

    public void sendGrantedEmailWithQR(ExhibitorRequest req) {
        try {
            String qrContent = "Exhibitor Badge: " + req.getFirstName() + " " + req.getLastName() + ", Company: " + req.getCompanyName() + ", Event: " + req.getEvent();
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(qrContent, BarcodeFormat.QR_CODE, 250, 250);
            ByteArrayOutputStream pngOutputStream = new ByteArrayOutputStream();
            MatrixToImageWriter.writeToStream(bitMatrix, "PNG", pngOutputStream);
            byte[] pngData = pngOutputStream.toByteArray();

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(req.getEmail());
            helper.setSubject("Exhibitor Request Granted - Digital Badge");
            helper.setText("Congratulations! Your exhibitor request is granted. Attached is your digital badge QR code. Please present this at the event.", false);
            helper.addAttachment("badge-qr.png", new ByteArrayResource(pngData));
            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    // Real email sending
    public void sendEmail(String to, String subject, String body) {
        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, false);
            helper.setTo(to);
            helper.setSubject(subject);
            helper.setText(body, false);
            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
} 