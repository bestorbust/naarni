
import React, { useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { Battery, PlugZap, Truck, Wallet, Wrench } from "lucide-react";
import Footer from "../components/Footer";
import { MdEco } from 'react-icons/md';
import { FaBatteryFull } from 'react-icons/fa';
import { FaDesktop } from 'react-icons/fa';


const parallaxImages = [
  "/images/road1.jpg",
  "/images/bus.jpg",
];

const Home: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getParallaxStyle = (index: number) => {
    if (index % 2 === 0) {
      return {
        backgroundImage: `url(${parallaxImages[index / 2] || parallaxImages[0]})`,
        backgroundAttachment: "fixed",
        backgroundPosition: `center ${-offsetY * 0.3}px`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative" as const,
      };
    }
    return {};
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  };

  const palette = {
  background: "#F9F7F7",
  secondary: "#DBE2EF",
  primary: "#3F72AF",
  dark: "#112D4E",
};


  return (
    <div className=" text-[#111827]" style={{ backgroundColor: palette.background }}>
      {/* Hero Section */}
      <InView triggerOnce threshold={0.4}>
        {({ inView, ref }) => (
          <section
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20`}
            style={getParallaxStyle(0)}
          >
            <div
              className="absolute inset-0 bg-black opacity-50 pointer-events-none"
              aria-hidden="true"
              style={{ zIndex: 0 }}
            />
            <div className="md:w-2/3 text-center md:text-left relative z-10 p-6 rounded mt-9" style={cardStyle}>
              <h1 className="text-5xl md:text-6xl font-bold leading-snug text-white">
                Empowering the Future of{" "}
                <span className="px-3 rounded bg-[#3B82F6] text-white">Heavy EVs</span>
              </h1>
              <p className="mt-4 max-w-md text-[#F8FAFC]">
                Best‑in‑class products, smart financing, reliable charging, and battery assurance – all in one ecosystem.
              </p>
              <div className="mt-6 flex gap-4 justify-center md:justify-start">
                <a
                  href="/products"
                  className="bg-[#3B82F6] hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow transition"
                >
                  Explore Products
                </a>
                <a
                  href="/contact"
                  className="bg-white hover:bg-[#CBD5E1] text-[#1E40AF] px-6 py-3 rounded-lg shadow transition"
                >
                  Contact for Fleet Orders
                </a>
              </div>
            </div>
          </section>
        )}
      </InView>

      {/* Ecosystem Section */}
      <section className="py-16 bg-[#CBD5E1]/30">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`transition-all duration-1000 ease-out transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-4xl font-bold text-center text-[#1E40AF]">The NaArNi Ecosystem</h2>
              <p className="text-center mt-2 text-[#111827]">
                Everything you need for a smarter, greener future.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto mt-10 px-4">
                {[
                  { name: "Product", icon: <Truck className="w-10 h-10" />, desc: "Best‑in‑class range & efficiency" },
                  { name: "Financing", icon: <Wallet className="w-10 h-10" />, desc: "Cost‑effective leasing options" },
                  { name: "Maintenance", icon: <Wrench className="w-10 h-10" />, desc: "Full AMC support" },
                  { name: "Charging", icon: <PlugZap className="w-10 h-10" />, desc: "Reliable fast charging" },
                  { name: "Battery", icon: <Battery className="w-10 h-10" />, desc: "Long-term battery warranty" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl p-6 text-center shadow hover:shadow-lg transition hover:scale-105 bg-white"
                  >
                    <div className="mb-3 flex justify-center text-[#1E40AF]">{item.icon}</div>
                    <h3 className="text-lg font-semibold text-[#1E40AF]">{item.name}</h3>
                    <p className="text-sm mt-1 text-[#111827]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </InView>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-[#CBD5E1]/30">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`transition-all duration-1000 ease-out transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } max-w-6xl mx-auto px-4 py-10`}
            >
              <h2 className="text-4xl font-bold text-center text-[#1E40AF]">
                Why Choose <span className="bg-[#3B82F6] text-white px-2 rounded">NaArNi?</span>
              </h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "120+ km Range",
                    icon:<MdEco className="w-14 h-14" color="#1E40AF"/>,
                    text: "Heavy EVs optimized for long hauls.",
                  },
                  {
                    title: "70% CO2 Reduction",
                    icon:<FaBatteryFull className="w-14 h-14" color="#1E40AF"/>,
                    text: "Cleaner, greener, future‑ready mobility.",
                  },
                  {
                    title: "Smart IoT Monitoring",
                    icon:<FaDesktop className="w-14 h-14" color="#1E40AF" />,
                    text: "Track and manage fleets in real time.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="relative group cursor-pointer overflow-hidden rounded-xl p-6 shadow hover:shadow-lg bg-white transition"
                  >
                    <div className="relative z-10 flex flex-col items-center text-center group-hover:text-[#1E40AF]">
                      {item.icon}
                      {/* <img src={item.icon} alt={item.title} className="w-24 h-24 object-contain mb-4" /> */}
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-2 max-w-xs">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </InView>
      </section>

      {/* Call to Action */}
      
      <Footer/>
      {/* <section className="py-12 bg-gradient-to-r from-[#1E40AF] to-[#3B82F6] text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Drive the <span className="px-2 rounded bg-white text-[#1E40AF]">Future?</span>
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/contact"
            className="bg-white hover:bg-[#CBD5E1] px-6 py-3 rounded-lg shadow transition text-[#1E40AF]"
          >
            Contact
          </a>
        </div>
      </section> */}
    </div>
  );
};

export default Home;
