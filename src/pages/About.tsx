import React from "react";
import Lottie from "react-lottie-player";
// import EVFuture from "../assets/lotties/ev-future.json";
import Wallet from "../assets/lotties/wallet.json";
import Maintenance from "../assets/lotties/maintenance.json";
import Charging from "../assets/lotties/charging.json";
import Battery from "../assets/lotties/battery.json";
// import CO2 from "../assets/lotties/co2.json";
// import GreenEnergy from "../assets/lotties/green-energy.json";
// import EarthAnim from "../assets/lotties/earth-sustainability.json";
import { InView } from "react-intersection-observer";
import Footer from "../components/Footer";
import AnkitImg from "../assets/founders/ankit.jpg";
import AnandImg from "../assets/founders/anand.jpg";
import EVBus from "../assets/lotties/ev-bus.json";
import EVTruck from "../assets/lotties/ev-truck.json";
import { LinkedinIcon } from "lucide-react";

const cardStyle: React.CSSProperties = {
  backgroundColor: "rgba(255,255,255,0.05)",
  backdropFilter: "blur(5px)",
  WebkitBackdropFilter: "blur(5px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
};

const About: React.FC = () => {
  const founders = [
    {
      name: "Ankit Singhvi",
      role: "CEO, NaArNi",
      img: AnkitImg,
      bio: "IIT-Bombay, MBA-Harvard | Ex-CEO Mozev (exit to Greencell) | ITC, McKinsey",
      linkedin: "https://www.linkedin.com/in/ankit-singhvi154/",
    },
    {
      name: "Anand Ayyadurai",
      role: "COO, NaArNi",
      img: AnandImg,
      bio: "IIM-Ahmadabad | Ex-CEO Vogo (exit to Chalo) |  Flipkart",
      linkedin: "https://www.linkedin.com/in/anandayyadurai/",
    },
  ];

  const cards = [
    {
      title: "Financing",
      desc: "Access to long-term, cost-effective EV financing for fleet operators.",
      anim: Wallet,
      color: "bg-purple-50",
    },
    {
      title: "Maintenance",
      desc: "High-voltage AMC & full vehicle-life support to ensure reliability.",
      anim: Maintenance,
      color: "bg-green-50",
    },
    {
      title: "Charging",
      desc: "Reliable, fast, and cost-effective charging network support.",
      anim: Charging,
      color: "bg-purple-50",
    },
    {
      title: "Battery Assurance",
      desc: "Guaranteed battery replacement & performance reliability.",
      anim: Battery,
      color: "bg-green-50",
    },
  ];

  // const impactStats = [
  //   { value: "100M+ km", label: "Electric Bus Runs", anim: GreenEnergy },
  //   { value: "15,00+ tons", label: "CO2 Saved", anim: CO2 },
  //   { value: "300+", label: "Charging Stations Supported", anim: EarthAnim },
  // ];

  const milestones = [
    {
      year: "2015 - 2021",
      title: "Mozev: India's First Intercity EV Bus OEM",
      details: ["25 Buses deployed with BYD", "Pipeline of 150 buses"],
      anim: EVBus,
    },
    {
      year: "2021 - Now",
      title: "Greencell Acquires Mozev",
      details: [
        "300+ Nuego Buses connecting 100+ cities",
        "100M+ km runs | 500 km+ per day",
        "Largest intercity EV bus operator in India",
      ],
      anim: EVBus,
    },
    {
      year: "2024 - Now",
      title: "NaArNi Journey Begins",
      details: [
        "Entry into Intercity Buses (350,000+ potential)",
        "Helping operators switch to EV",
        "Trucks coming soon!",
      ],
      anim: EVTruck,
    },
  ];

  const marketStats = [
    { value: "$2 Tn", label: "HCV Market Opportunity" },
    { value: "5 Mn", label: "Heavy Vehicles in India" },
    { value: "40%", label: "Diesel Consumption by HCVs" },
    { value: "1 Mn", label: "Fleet Operators" },
    { value: "80%", label: "Of Operator’s expenses is Running Cost" },
  ];

  return (
    <div className="text-[#111827] bg-[#F9F7F7]">
      {/* Hero Section */}
      <InView triggerOnce threshold={0.2}>
        {({ inView, ref }) => (
          <section
            ref={ref}
            className={`transition-all duration-1000 ease-out transform ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } flex flex-col items-center justify-between w-full px-6 py-20`}
          >
            <div
              className="w-full md:w-4/5 text-center md:text-left p-6 rounded"
              style={cardStyle}
            >
              <h1 className="text-4xl md:text-6xl font-bold leading-snug text-[#1E3A8A] text-center">
                About {" "}
                <span className="px-3 rounded bg-[#3B82F6] text-white">NaArNi</span>
              </h1>
              {/* <p className="mt-4 text-center md:text-left mx-auto max-w-xl text-[#374151]">
                NaArNi is transforming{" "}
                <strong>Heavy Commercial Vehicles (HCVs)</strong> with best-in-class
                electric buses. Our mission is to make{" "}
                <strong>EVs the default choice for fleet operators</strong> through
                reliable products, cost-effective financing, maintenance, and charging solutions.
              </p> */}
            </div>
          </section>
        )}
      </InView>

      {/* Founders Section */}
      <section className="py-16 bg-[#CBD5E1]/30">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`transition-all duration-1000 ease-out transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E40AF]">
                Meet Our Founders
              </h2>
              <p className="text-center text-[#374151] mt-2">
                Founders are Second Time Entrepreneurs in the Electric Vehicle Space
              </p>
              <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mt-10">
                {founders.map((f, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-6 w-72 text-center shadow hover:shadow-lg hover:scale-105 transition bg-white"
                  >
                    <img
                      src={f.img}
                      alt={f.name}
                      className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-[#3B82F6]/60"
                    />
                    <h3 className="mt-4 text-[#1E40AF] font-semibold">{f.name}</h3>
                    <p className="text-[#111827] text-sm">{f.role}</p>
                    <p className="text-[#6B7280] text-xs mt-2">{f.bio}</p>
                    <a
                      href={f.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block bg-[#3B82F6] text-white text-sm px-4 py-2 rounded-lg hover:bg-[#1E40AF] transition"
                    >
                      <LinkedinIcon/>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </InView>
      </section>

      {/* HCV Market Stats */}
      <section className="py-16 bg-[#E2E8F0]">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`transition-all duration-1000 ease-out transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } max-w-6xl mx-auto px-4`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E40AF]">
                The Heavy Commercial Vehicle Opportunity
              </h2>
              <div className="flex flex-wrap justify-center gap-6 sm:gap-8 mt-10">
                {marketStats.map((stats, i) => (
                  <div
                    key={i}
                    className="w-36 sm:w-40 text-center rounded-xl p-4 shadow hover:shadow-lg hover:scale-105 transition bg-white"
                  >
                    <p className="text-xl font-bold text-[#1E40AF]">{stats.value}</p>
                    <p className="text-[#374151] text-sm">{stats.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </InView>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-[#E2E8F0]">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`transition-all duration-1000 ease-out transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } max-w-6xl mx-auto px-4`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E40AF]">
                Our Track Record In EV Buses
              </h2>
              <div className="mt-10 space-y-8">
                {milestones.map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl shadow hover:shadow-lg hover:scale-105 transition bg-white"
                  >
                    <div className="w-full md:w-1/3 flex justify-center">
                      <Lottie loop={false} play animationData={item.anim} className="w-28 h-28" />
                    </div>
                    <div className="w-full md:w-2/3 text-center md:text-left">
                      <p className="text-[#1E3A8A] font-bold text-sm">{item.year}</p>
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1E40AF]">{item.title}</h3>
                      <ul className="mt-2 text-[#374151] list-disc list-inside text-sm">
                        {item.details.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </InView>
      </section>

      {/* Supporting Fleet Operators */}
      <section className="py-16 bg-[#CBD5E1]/30">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`transition-all duration-1000 ease-out transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E40AF]">
                Supporting Fleet Operators End-to-End
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-10 px-4">
                {cards.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl shadow hover:shadow-lg hover:scale-105 transition p-6 text-center bg-white"
                  >
                    <Lottie loop={false} play animationData={item.anim} className="w-24 h-24 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-[#1E40AF]">{item.title}</h3>
                    <p className="text-[#111827] text-sm mt-2">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </InView>
      </section>

      {/* EV Impact */}
      {/* <section className="py-16 bg-[#CBD5E1]/30">
        <InView triggerOnce threshold={0.1}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`transition-all duration-1000 ease-out transform ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1E40AF]">EV Impact</h2>
              <div className="flex flex-wrap justify-center gap-10 mt-10 text-center">
                {impactStats.map((stats, i) => (
                  <div
                    key={i}
                    className="w-52 rounded-xl shadow hover:shadow-lg transition p-4 bg-white"
                  >
                    <Lottie loop={false} play animationData={stats.anim} className="w-24 h-24 mx-auto" />
                    <p className="text-2xl text-[#1E40AF] font-bold">{stats.value}</p>
                    <p className="text-[#111827] text-sm">{stats.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </InView>
      </section> */}

      <Footer />
    </div>
  );
};

export default About;
