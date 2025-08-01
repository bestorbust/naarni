import React from "react";
import { Linkedin, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const palette = {
    bg: "#F9F7F7",
    secondary: "#DBE2EF",
    primary: "#3F72AF",
    dark: "#DBE2EF",
    text: "#F9F7F7",
  };

  return (
    <footer
      className="text-white text-sm"
      style={{
        background: "linear-gradient(135deg, #112D4E 0%, #3F72AF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Brand section */}
        <div>
          <h2 className="text-2xl font-bold">NaArNi</h2>
          <p className="mt-2 text-[15px]" style={{ color: palette.text }}>
            Empowering cleaner heavy transport with smart EV solutions.
          </p>
        </div>

        {/* Explore section */}
        <div>
          <h3 className="font-semibold mb-2" style={{ color: palette.dark }}>
            Explore
          </h3>
          <ul className="space-y-1 text-[15px]">
            <li>
              <Link to="/" style={{ color: palette.text }}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" style={{ color: palette.text }}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: palette.text }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources section */}
        <div>
          <h3 className="font-semibold mb-2" style={{ color: palette.dark }}>
            Resources
          </h3>
          <ul className="space-y-1 text-[15px]">
            <li>
              <Link to="/careers" style={{ color: palette.text }}>
                Careers
              </Link>
            </li>
          </ul>
        </div>

        {/* Social icons */}
        <div className="flex sm:justify-start justify-center sm:flex-col flex-row sm:items-start items-center gap-4">
          <a href="#" aria-label="LinkedIn">
            <div className="p-2 bg-gray-500 border rounded-lg">
              <Linkedin size={20} />
            </div>
          </a>
          <a href="#" aria-label="Twitter">
            <div className="p-2 bg-gray-500 border rounded-lg">
              <Twitter size={20} />
            </div>
          </a>
          <a href="#" aria-label="Facebook">
            <div className="p-2 bg-gray-500 border rounded-lg">
              <Facebook size={20} />
            </div>
          </a>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderColor: palette.primary }} className="border-t" />

      {/* Bottom copyright */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-2 text-[13px]">
        <p style={{ color: palette.text }}>
          © {new Date().getFullYear()} NaArNi — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
