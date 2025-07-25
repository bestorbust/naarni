import React from "react";
import Lottie from "react-lottie-player";
import EVFuture from "../assets/lotties/ev-future.json";
import Wallet from "../assets/lotties/wallet.json";
import Maintenance from "../assets/lotties/maintenance.json";
import Charging from "../assets/lotties/charging.json";
import Battery from "../assets/lotties/battery.json";
import CO2 from "../assets/lotties/co2.json";
import GreenEnergy from "../assets/lotties/green-energy.json";
import EarthAnim from "../assets/lotties/earth-sustainability.json";

import AnkitImg from "../assets/founders/ankit.jpg";
import AnandImg from "../assets/founders/anand.jpg";

const About:React.FC=()=>{
    const founders=[
        {
            name:"Ankit Singhvi",
            role:"CEO, NaArNi",
            img: AnkitImg,
            bio:"IIT-Bombay, MBA-Harvad | Ex-CEO Mozev (exit to Greencell) | Ex ITC, McKinsey",
            linkedin:"https://www.linkedin.com/in/ankit-singhvi154/",
        },
        {
            name:"Anand Ayyadurai",
            role:"COO, NaArNi",
            img:AnandImg,
            bio:"IIT-Ahmedab | Ex-CEO Vogo (exit to Chalo) | Ex Flipkart",
            linkedin:"https://www.linkedin.com/in/anandayyadurai/",
        },
    ];

    const cards=[
        {
            title:"Financing",
            desc:"Access to long-term, cost-effective EV financing for fleet operators.",
            anim:Wallet,
            color:"bg-purple-50"
        },
        {
            title:"Maintenance",
            desc:"High-voltage AMC & full vehicle-life support to ensure reliability.",
            anim:Maintenance,
            color:"bg-green-50"
        },
        {
            title:"Charging",
            desc:"Reliable, fast, and cost-effective charging network support.",
            anim:Charging,
            color:"bg-purple-50"
        },
        {
            title:"Battery Assurance",
            desc:"Guaranteed battery replacement & performance reliability.",
            anim:Battery,
            color:"bg-green-50"
        },
    ];

    const impactStats=[
        { value:"100M+ km",label:"Electric Bus Runs",anim:GreenEnergy},
        { value:"15,00+ tons",label:"CO2 Saved", anim:CO2},
        { value:"300+", label:"Charging Stations Supported",anim:EarthAnim}
    ];

    const vision2030=[
        {
            title:"EV as Default Choice",
            desc:"Fleet operators choose EVs as their primary heavy vehicle option.",
        },
        {
            title:"20% Market Share in HCVs",
            desc:"NaArNi to become a trusted leader in heavy commercial EVs.",
        },
        {
            title:"Best Value & Reliability",
            desc:"NaArNi synonymous with reliability and lowest cost per km.",
        },
        
    ]


    return(
        <div className="bg-gray-50 pt-16">
            <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold text-green-700 leading-snug">
                        About {" "}
                        <span className="bg-purple-200 text-purple-800 px-3 rounded-lg">NaArNi</span>
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-md">
                        NaArNi is transforming{" "}
                        <strong>Heavy Commercial Vehicles (HCVs)</strong> with best-in-class
                        electric buses. Our mission is to make{" "}
                        <strong>EVs the default choice for fleet operators</strong> through
                        reliable products, cost-effective financing, maintenance, and charging solutions.
                    </p>
                    
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <Lottie
                    loop play animationData={EVFuture} className="w-100 md:w-[450px]"/>
                    </div>
            </section>
            
            <section className="py-16 bg-white">
                <h2 className="text-4xl font-bold text-center text-green-700">
                    Meet Our Founders
                </h2>
                <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto mt-10">
                    {founders.map((f, i) =>(
                        <div
                        key={i}
                        className="bg-green-50 rounded-xl p-6 w-72 text-center shadow hover:shadow-lg hover:scale-105 transition">
                            <img
                            src={f.img}
                            alt={f.name}
                            className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-green-200"/>
                            <h3 className="mt-4 text-purple-700 font-semibold">{f.name}</h3>
                            <p className="text-gray-600 text-sm">{f.role}</p>
                            <p className="text-gray-500 text-xs mt-2">{f.bio}</p>
                            <a
                            href={f.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-block bg-purple-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-purple-700 transition">LinkedIn Profile</a>
                        </div>
                    ))}
                </div>
            </section>


            <section className="py-16 bg-green-50">
                <h2 className="text-4xl font-bold text-center text-green-700">
                    Supporting Fleet Operators End-to-End
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-10 px-4">
                    {cards.map((item,i)=>(
                        <div
                        key={i}
                        className={`${item.color} rounded-xl shadow hover:shadow-lg hover:scale-105 transition p-6 text-center`}
                        >
                            <Lottie
                            loop play animationData={item.anim} className="w-24 h-24 mx-auto mb-4"/>
                            <h3 className="text-lg font-semibold text-purple-700">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 bg-white">
                <h2 className="text-4xl font-bold text-center text-green-700">EV Impact</h2>
                <div className="flex flex-wrap justify-center gap-10 mt-10 text-center">
                    {impactStats.map((stats,i)=>(
                        <div
                        key={i}
                        className="w-52 bg-white rounded-xl shadow hover:shadow-lg transition p-4">
                            <Lottie
                            loop play animationData={stats.anim} className="w-24 h-24 mx-auto"/>
                            <p className="text-2xl text-purple-700 font-bold">{stats.value}</p>
                            <p className="text-gray-600 text-sm">{stats.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-16 bg-green-50">
                <h2 className="text-4xl font-bold text-center text-green-700">NaArNi Vision 2030</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-4">
                    {vision2030.map((item,i)=>(
                        <div
                        key={i}
                        className="bg-green-50 rounded-xl p-6 text-center shadow hover:shadow-lg hover:scale-105 transition"
                        >
                            <h3 className="text-xl font-semibold text-purple-700">{item.title}</h3>
                            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-12 bg-gradient-to-r from-green-600 to-green-800 text-center text-white">
                <h2 className="text-3xl font-bold">
                    Join Us in Building a {" "}
                    <span className="bg-purple-200 text-purple-800 px-2 rounded">
                        Greener Future
                    </span>
                </h2>
                <div className="mt-6 flex justify-center gap-4">
                    <a
                    href="/careers"
                    className="bg-purple-600 px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">
                        Explore Carrers</a>
                </div>
            </section>
        </div>

    )
}
export default About;



