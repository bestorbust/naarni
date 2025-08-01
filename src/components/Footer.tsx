import React from "react";
import { Linkedin,Facebook,Twitter } from "lucide-react";
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
    
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-2xl font-bold" >NaArNi</h2>
          <p className="mt-2 text-[15px]" style={{ color: palette.text }}>
            Empowering cleaner heavy transport with smart EV solutions.
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2" style={{ color: palette.dark }}>Explore</h3>
          <ul className="space-y-1 text-[15px]">
            <li><a href="/" style={{ color: palette.text }}>Home</a></li>
            <li><a href="/products" style={{ color: palette.text }}>Products</a></li>
            <li><a href="/about" style={{ color: palette.text }}>About Us</a></li>
            <li><a href="/contact" style={{ color: palette.text }}>Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2" style={{ color: palette.dark }}>Resources</h3>
          <ul className="space-y-1 text-[15px]">
            <li><a href="/blog" style={{ color: palette.text }}>Blog</a></li>
            <li><a href="/faq" style={{ color: palette.text }}>FAQ</a></li>
            <li><a href="/careers" style={{ color: palette.text }}>Careers</a></li>
          </ul>
        </div>

          
          <div className="mt-4 flex flex-row">
            <a href="#" aria-label="LinkedIn">
              <div className="p-1 m-5 bg-gray-500 border rounded-lg"  >
                <Linkedin/>
              </div>
            </a>
            <a href="#" aria-label="Twitter">
              <div className="p-1 m-5 bg-gray-500 border rounded-lg"  >
                <Twitter/>
              </div>
            </a>
            <a href="#" aria-label="Facebook">
              <div className="p-1 m-5 bg-gray-500 border rounded-lg"  >
                <Facebook/>
              </div>
            </a>
          </div>
        </div>

      <div style={{ borderColor: palette.primary }} className="border-t" />

      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-[13px] ">
        <p style={{ color: palette.text }}>© {new Date().getFullYear()} NaArNi — All rights reserved.</p>
        {/* <div className="space-x-4 mt-3 md:mt-0">
          <a href="/terms" style={{ color: palette.text }}>Terms</a>
          <a href="/privacy" style={{ color: palette.text }}>Privacy Policy</a>
          <a href="/cookies" style={{ color: palette.text }}>Cookie Policy</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
