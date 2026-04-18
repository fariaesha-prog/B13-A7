import { FiInstagram, FiFacebook } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#2D4A3E] text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="border-b border-white/10 pb-10 mb-6 text-center">
          {/* Branding */}
          <h2 className="text-5xl font-bold mb-3">KeenKeeper</h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

          {/* Social Links */}
          <p className="text-sm font-medium mb-4 text-white">Social Links</p>
          <div className="flex justify-center gap-3">
            {[
              { href: "https://instagram.com", icon: <FiInstagram size={18} />, label: "Instagram" },
              { href: "https://facebook.com", icon: <FiFacebook size={18} />, label: "Facebook" },
              { href: "https://twitter.com", icon: <FaXTwitter size={18} />, label: "Twitter" },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-700 transition duration-200"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/50 text-sm">
          <p>© 2026 KeenKeeper. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-white transition duration-200">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition duration-200">Terms of Service</a>
            <a href="#cookies" className="hover:text-white transition duration-200">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}