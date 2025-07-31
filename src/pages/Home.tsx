import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import EvMan from "../assets/lotties/EV-man-service.json";
import { Battery, PlugZap, Truck, Wallet, Wrench } from "lucide-react";

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
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
  };

  return (
    <div className="bg-gray-900 pt-2 text-gray-300">
      {/* Hero Section */}
      <section
        className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20"
        style={getParallaxStyle(0)}
      >
        <div
          className="absolute inset-0 bg-black opacity-50 pointer-events-none"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        />

        <div
          className="md:w-2/3 text-center md:text-left relative z-10 p-6 rounded"
          style={cardStyle}
        >
          <h1
            className="text-5xl md:text-6xl font-bold leading-snug"
            style={{ color: "#B8F306" }}
          >
            Empowering the Future of{" "}
            <span
              className="px-3 rounded-lg"
              style={{
                backgroundColor: "rgba(184, 243, 6, 0.85)",
                color: "#1f2937",
              }}
            >
              Heavy EVS
            </span>
          </h1>
          <p className="mt-4 max-w-md" style={{ color: "#d1d5db" }}>
            Best‑in‑class products, smart financing, reliable charging, and battery assurance – all in one ecosystem.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a
              href="/products"
              className="bg-[#B8F306]/80 hover:bg-[#B8F306]/90 text-gray-900 px-6 py-3 rounded-lg shadow transition"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg shadow transition"
            >
              Contact for Fleet Orders
            </a>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative z-10">
          <Lottie loop play animationData={EvMan} className="w-80 md:w-[450px]" />
        </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-16 bg-gray-800">
        <h2
          className="text-4xl font-bold text-center"
          style={{ color: "#B8F306" }}
        >
          The NaArNi Ecosystem
        </h2>
        <p className="text-center mt-2" style={{ color: "#9ca3af" }}>
          Everything you need for a smarter, greener future.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto mt-10 px-4">
          {[
            {
              name: "Product",
              icon: <Truck className="w-10 h-10" style={{ color: "#B8F306" }} />,
              desc: "Best‑in‑class range & efficiency",
            },
            {
              name: "Financing",
              icon: <Wallet className="w-10 h-10" style={{ color: "#B8F306" }} />,
              desc: "Long‑term cost‑effective options",
            },
            {
              name: "Maintenance",
              icon: <Wrench className="w-10 h-10" style={{ color: "#B8F306" }} />,
              desc: "High‑voltage AMC support",
            },
            {
              name: "Charging",
              icon: <PlugZap className="w-10 h-10" style={{ color: "#B8F306" }} />,
              desc: "Reliable & fast network",
            },
            {
              name: "Battery",
              icon: <Battery className="w-10 h-10" style={{ color: "#B8F306" }} />,
              desc: "Battery replacement assurance",
            },
          ].map((item) => (
            <div
              key={item.name}
              className="rounded-xl p-6 text-center shadow hover:shadow-lg transition hover:scale-105"
              style={cardStyle}
            >
              <div className="mb-3 flex justify-center">{item.icon}</div>
              <h3 className="text-lg font-semibold" style={{ color: "#14b8a6" }}>
                {item.name}
              </h3>
              <p className="text-sm mt-1" style={{ color: "#9ca3af" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose NaArNi Section */}
      <section
        className="py-16 bg-gray-900 relative"
        style={getParallaxStyle(2)}
      >
        <div
          className="absolute inset-0 bg-black opacity-50 pointer-events-none"
          aria-hidden="true"
          style={{ zIndex: 0 }}
        />
        <div
          className="max-w-6xl mx-auto rounded-xl px-4 py-10 relative z-10"
          style={cardStyle}
        >
          <h2
            className="text-4xl font-bold text-center"
            style={{ color: "#B8F306" }}
          >
            Why Choose{" "}
            <span
              className="px-2 rounded"
              style={{
                backgroundColor: "rgba(184, 243, 6, 0.85)",
                color: "#1f2937",
              }}
            >
              NaArNi?
            </span>
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "120+ km Range",
                image:"/images/truck.png",
                text: "Heavy EVs optimized for long hauls.",
              },
              {
                title: "70% CO2 Reduction",
                image: "/images/co2-reduction.png",
                text: "Cleaner, greener, future‑ready mobility.",
              },
              {
                title: "Smart IoT Monitoring",
                image: "/images/iot-monitoring.png",
                text: "Track and manage fleets in real time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="relative group cursor-pointer overflow-hidden rounded-xl p-6 shadow transition hover:shadow-lg"
                style={cardStyle}
              >
                <div className="absolute inset-0 bg-teal-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0 opacity-80 rounded-xl" />
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center transition-colors duration-500 ease-in-out group-hover:text-white">
                    <img src={item.image} alt={item.title} className="w-24 h-24 object-contain mb-4" />                 
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700 text-center text-white">
        <h2 className="text-3xl font-bold">
          Ready to Drive the{" "}
          <span
            className="px-2 rounded"
            style={{ backgroundColor: "rgba(184, 243, 6, 0.85)", color: "#1f2937" }}
          >
            Future?
          </span>
        </h2>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/contact"
            className="bg-teal-600 px-6 py-3 rounded-lg shadow hover:bg-teal-700 transition"
          >
            Contact
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
