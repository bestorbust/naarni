import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Careers", link: "/careers" },
    { name: "Contact", link: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed z-50 w-full">
      {/* Conditional margin and background */}
      <div className="bg-white md:bg-[#CBD5E1] md:rounded-2xl md:top-6 md:left-10 md:right-10 top-0 left-0 right-0 absolute shadow-lg">
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
          <Link
            to="/"
            className="text-[#1E40AF] font-extrabold text-3xl tracking-wide px-3 py-1 rounded-lg hover:text-white transition"
          >
            NaArNi
          </Link>
          <div className="hidden md:flex space-x-8 items-center">
            {menu.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`relative font-semibold text-lg px-3 py-2 rounded-full transition-colors duration-300 ${
                  isActive(item.link)
                    ? "text-[#111827]"
                    : "text-[#3B82F6] hover:text-[#1E40AF]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full bg-[#1E40AF] rounded origin-left transform transition-transform duration-300 ${
                    isActive(item.link)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-4 pb-4 pt-2 bg-white shadow-md space-y-2">
            {menu.map((item) => (
              <Link
                key={item.name}
                to={item.link}
                className={`block px-3 py-2 transition font-medium rounded-full ${
                  isActive(item.link)
                    ? "bg-blue-100 text-gray-900 border border-[#B8F306]"
                    : "text-[#1E40AF] hover:bg-gray-100"
                }`}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
