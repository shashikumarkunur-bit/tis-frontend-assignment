import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiArrowUp,
  FiExternalLink
} from 'react-icons/fi';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';
import { tisSchoolInfo, tisNavLinks } from '../data/tisData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 lg:pt-20 pb-10 border-t border-neutral-800" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-neutral-800">
          {/* Column 1: School Identity & Brand Mission (Spans 4 columns on desktop) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/footer-logo.png"
                  alt="Tulas International School Official Emblem"
                  className="h-12 w-auto object-contain brightness-110"
                  onError={(e) => {
                    // Fallback to schoolLogo if needed
                    e.currentTarget.src = "/schoolLogo.png";
                  }}
                />
              </div>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm font-normal">
                Established in 2012 under the aegis of <strong className="text-neutral-200">Rishabh Educational Trust</strong>,
                Tulas International School is a top-ranked CBSE-affiliated residential boarding school
                committed to blending traditional Gurukul values with 21st-century educational excellence.
              </p>

              {/* Social Media Links */}
              <div className="mt-6 flex items-center gap-3" aria-label="Social Media Channels">
                {[
                  { icon: FaFacebookF, href: tisSchoolInfo.socials.facebook, label: "Facebook" },
                  { icon: FaInstagram, href: tisSchoolInfo.socials.instagram, label: "Instagram" },
                  { icon: FaYoutube, href: tisSchoolInfo.socials.youtube, label: "YouTube" },
                  { icon: FaTwitter, href: tisSchoolInfo.socials.twitter, label: "Twitter" },
                  { icon: FaLinkedinIn, href: tisSchoolInfo.socials.linkedin, label: "LinkedIn" }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={idx}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#fff1b8] text-neutral-300 hover:text-[#1c1c1c] flex items-center justify-center transition-all duration-200"
                      aria-label={`TIS on ${item.label}`}
                    >
                      <Icon className="text-sm" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800/80">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#c09d59] block">
                The Modern Gurukul
              </span>
              <span className="text-xs text-neutral-400">Class IV to XII • Boys & Girls</span>
            </div>
          </div>

          {/* Column 2: Quick Links (Spans 2 columns) */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Explore TIS
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              {tisNavLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#b90124] hover:underline transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Important & Mandatory Links (Spans 3 columns) */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Mandatory Policies
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <a
                  href={tisSchoolInfo.virtualTourUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#b90124] transition-colors flex items-center gap-1.5"
                >
                  <span>360° Virtual Campus Tour</span>
                  <FiExternalLink className="text-xs text-neutral-500" />
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#b90124] transition-colors">
                  CBSE Affiliation & Disclosures
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#b90124] transition-colors">
                  Child Welfare & Safety Policy
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#b90124] transition-colors">
                  Mobile Phone & Technology Rules
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#b90124] transition-colors">
                  Disciplinary Charter
                </a>
              </li>
              <li>
                <a href="#admissions-cta" className="hover:text-[#b90124] transition-colors">
                  Annual Academic Calendar
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#b90124] transition-colors">
                  Fee Structure & Scholarships
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Campus Info (Spans 3 columns) */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-bold text-sm uppercase tracking-wider text-white mb-4">
              Contact & Address
            </h3>
            <div className="space-y-3.5 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#b90124] text-base shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {tisSchoolInfo.location}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-[#c09d59] text-base shrink-0" />
                <div>
                  <a href={`tel:${tisSchoolInfo.phone}`} className="hover:text-white block font-semibold text-neutral-200">
                    {tisSchoolInfo.phone}
                  </a>
                  <span className="text-[11px] text-neutral-500">Helpline (9 AM – 6 PM)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-[#60bab1] text-base shrink-0" />
                <a href={`mailto:${tisSchoolInfo.email}`} className="hover:text-white transition-colors">
                  {tisSchoolInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p className="text-center sm:text-left">
            Copyright © 2026 Tulas International School, Dehradun. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-neutral-600 hidden md:inline">
              Affiliated with Central Board of Secondary Education (CBSE)
            </span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/10 hover:bg-[#fff1b8] text-white hover:text-[#1c1c1c] transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#b90124]"
              aria-label="Scroll to top of page"
            >
              <FiArrowUp size={16} />
              <span className="text-[11px] font-bold uppercase tracking-wider pr-1">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
