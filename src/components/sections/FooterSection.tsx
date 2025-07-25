import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1e3a8a] via-[#2563eb] to-[#2563eb] text-white py-8">
      <div className="container mx-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/master.png"
              alt="Rwanda Mining Week Logo"
              className="h-16 mb-4"
            />
            {/* Follow Us */}
            <span className="text-lg font-bold mt-10 mb-2">FOLLOW US</span>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:opacity-75 text-white"
              >
                <FaFacebookF className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:opacity-75 text-white"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:opacity-75 text-white"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="hover:opacity-75 text-white"
              >
                <FaTwitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="hover:opacity-75 text-white"
              >
                <FaYoutube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Column 2: Venue and Dates */}
          <div className="text-white">
            <span className="text-lg font-bold mb-2 block">VENUE</span>
            <p>Kigali Convention Centre</p>
            <p>Kigali</p>
            <p>Rwanda</p>
            <span className="text-lg font-bold mt-4 mb-2 block">DATES</span>
            <p>7-11 July 2025</p>
          </div>

          {/* Column 3: Contacts */}
          <div className="text-white">
            <span className="text-lg font-bold mb-2 block">CONTACTS</span>
            <span className="font-semibold mb-1 block">ENQUIRIES</span>
            <p>
              <a
                href="mailto:info@rwandaminingweek.com"
                className="hover:underline text-white"
              >
                info@rwandaminingweek.com
              </a>
            </p>
            <span className="font-semibold mt-4 mb-1 block">HELPLINE</span>
            <p>+250 788 123 456</p>
            <span className="font-semibold mt-4 mb-1 block">
              VISITOR SUPPORT
            </span>
            <p>+250 788 123 456</p>
          </div>

          {/* Column 4: Quick Links */}
          <div className="text-white">
            <span className="text-lg font-bold mb-2 block">QUICK LINKS</span>
            <ul>
              <li>
                <a
                  href="/about/mining-indaba"
                  className="hover:underline text-white"
                >
                  About Rwanda Mining Week
                </a>
              </li>
              <li>
                <a
                  href="/register-interest"
                  className="hover:underline text-white"
                >
                  Register Interest
                </a>
              </li>
              <li>
                <a
                  href="/about/highlights"
                  className="hover:underline text-white"
                >
                  Highlights
                </a>
              </li>
              <li>
                <a href="/client-zone" className="hover:underline text-white">
                  Client Zone
                </a>
              </li>
              <li>
                <a
                  href="/exhibit-sponsor/why"
                  className="hover:underline text-white"
                >
                  Why Exhibit or Sponsor
                </a>
              </li>
              <li>
                <a href="/partners" className="hover:underline text-white">
                  Partners
                </a>
              </li>
              <li>
                <a href="/about/media" className="hover:underline text-white">
                  PR & Media
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@rwandaminingweek.com"
                  className="hover:underline text-white"
                >
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Horizontal Line and Bottom Section */}
        <div className="border-t border-white mt-8 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          {/* Copyright and Bottom Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mb-4 md:mb-0 text-white">
            <a href="#" className="hover:underline text-white">
              TERMS OF USE
            </a>
            <a href="#" className="hover:underline text-white">
              PRIVACY NOTICE
            </a>
            <a href="#" className="hover:underline text-white">
              COOKIE POLICY
            </a>
            <a href="#" className="hover:underline text-white">
              SITEMAP
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
