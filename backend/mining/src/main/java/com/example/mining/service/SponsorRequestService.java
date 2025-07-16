package com.example.mining.service;

import com.example.mining.model.SponsorRequest;
import com.example.mining.repository.SponsorRequestRepository;
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
public class SponsorRequestService {
    @Autowired
    private SponsorRequestRepository sponsorRequestRepository;
    @Autowired
    private JavaMailSender mailSender;

    public SponsorRequest save(SponsorRequest request) {
        return sponsorRequestRepository.save(request);
    }

    public List<SponsorRequest> getAll(String search) {
        List<SponsorRequest> all = sponsorRequestRepository.findAll();
        if (search == null || search.isEmpty()) return all;
        String s = search.toLowerCase();
        return all.stream().filter(r ->
            (r.getSponsorName() != null && r.getSponsorName().toLowerCase().contains(s)) ||
            (r.getSponsorCompany() != null && r.getSponsorCompany().toLowerCase().contains(s)) ||
            (r.getEvent() != null && r.getEvent().toLowerCase().contains(s))
        ).collect(Collectors.toList());
    }

    public SponsorRequest getById(Long id) {
        return sponsorRequestRepository.findById(id).orElse(null);
    }

    public SponsorRequest grantRequest(Long id) {
        SponsorRequest req = sponsorRequestRepository.findById(id).orElseThrow();
        req.setStatus("GRANTED");
        req.setGrantedAt(java.time.LocalDateTime.now());
        SponsorRequest saved = sponsorRequestRepository.save(req);
        // Send granted email with badge/QR
        sendGrantedEmailWithQR(req);
        return saved;
    }
    public SponsorRequest denyRequest(Long id) {
        SponsorRequest req = sponsorRequestRepository.findById(id).orElseThrow();
        req.setStatus("DENIED");
        SponsorRequest saved = sponsorRequestRepository.save(req);
        // Send denial email
        sendEmail(req.getSponsorEmail(), "Sponsorship Denied", "We regret to inform you that your sponsorship request was denied.");
        return saved;
    }
    public List<SponsorRequest> getGrantedSponsors() {
        return sponsorRequestRepository.findAll().stream()
            .filter(r -> "GRANTED".equals(r.getStatus()))
            .toList();
    }

    public void sendGrantedEmailWithQR(SponsorRequest req) {
        try {
            String qrContent = "Sponsor Badge: " + req.getSponsorName() + ", Company: " + req.getSponsorCompany() + ", Event: " + req.getEvent();
            QRCodeWriter qrCodeWriter = new QRCodeWriter();
            BitMatrix bitMatrix = qrCodeWriter.encode(qrContent, BarcodeFormat.QR_CODE, 250, 250);
            ByteArrayOutputStream pngOutputStream = new ByteArrayOutputStream();
            MatrixToImageWriter.writeToStream(bitMatrix, "PNG", pngOutputStream);
            byte[] pngData = pngOutputStream.toByteArray();

            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo(req.getSponsorEmail());
            helper.setSubject("Sponsorship Granted - Digital Badge");
            helper.setText("Congratulations! Your sponsorship is granted. Attached is your digital badge QR code. Please present this at the event.", false);
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