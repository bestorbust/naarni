import React from "react";
import Lottie from "react-lottie-player";
import TimelineAnim from "../assets/lotties/timeline.json";
import EVBus from "../assets/lotties/ev-bus.json";
import EVTruck from "../assets/lotties/ev-truck.json";

const TrackRecord:React.FC=()=>{
    const milestones=[
        {
            year:"2015 - 2021",
            title:"Mozev: India's First Intercity EV Bus OEM",
            details:[
                "25 Buses deploed with BYD",
                "Pipeline of 150 buses",
            ],
            anim: EVBus,
            color: "bg-green-50"
        },
        {
            year:"2021 - Now",
            title:"Greencell Acquires Mozev",
            details:[
                "300+ Nuego Buses connecting 100+ cities",
                "100M+ km runs | 500 km+ per day",
                "Largest intercity EV bus operator in India",
            ],
            anim: EVBus,
            color: "bg-purple-50"
        },
        {
            year:"2024 - Now",
            title:"NaArNi Journey Begins",
            details:[
                "Entry into Intercity Buses (350,000+ potential)",
                "Helping operators switch to EV",
                "Trucks coming soon!",
            ],
            anim: EVTruck,
            color: "bg-green-50"
        },
    ];

    const marketStats=[
        { value: "$2 Tn", label: "HCV Market Opportunity" },
        { value: "5 Mn", label: "Heavy Vehicles in India" },
        { value: "40%", label: "Diesel Consumption by HCVs" },
        { value: "80%", label: "Operator’s Running Cost" },
    ];

    return(
        <div className="bg-gray-50">
            <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold text-green-700 leading-snug">
                        Our {" "}
                        <span className="bg-purple-200 text-purple-800 px-3 rounded-lg">Track Record</span>
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-md">
                        Over a decade of innovation in Electric Mobility, from India's first intercity EV buses to a future of Heavy EV Trucks.
                    </p>
                    
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <Lottie
                    loop play animationData={TimelineAnim} className="w-80 md:w-[450px]"/>
                    </div>
            </section>
            
            <section className="py-16 bg-white">
                <h2 className="text-4xl font-bold text-center text-green-700">
                    Milestones in EV Innovation
                </h2>
                <div className="max-w-6xl mx-auto mt-10 space-y-8 px-4">
                    {milestones.map((item,i)=>(
                        <div
                        key={i}
                        className={`${item.color} flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl shadow hover:shadow-lg transition`}>
                            <div className="md:w-1/3 flex justify-center">
                            <Lottie
                            loop play animationData={item.anim} className="w-40 h-40"/>
                            </div>

                            <div className="md:w-2/3">
                            <p className="text-purple-700 font-bold text-sm">{item.year}</p>
                            <h3 className="text-xl font-semibold text-green-700">{item.title}</h3>
                            <ul className="mt-2 text-gray-600 text-sm list-disc list-inside">
                                {item.details.map((point,j)=>(
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="py-16 bg-green-50">
                <h2 className="text-4xl font-bold text-center text-green-700">
                    The HCV Opportunity
                </h2>
                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    {marketStats.map((stats,i)=>(
                        <div
                        key={i}
                        className="w-40 text-center bg-white rounded-xl p-4 shadow hover:scale-105 transition">
                            <p className="text-2xl font-bold text-purple-700">{stats.value}</p>
                            <p className="text-gray-600 text-sm">{stats.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-12 bg-gradient-to-r from-green-600 to-green-800 text-center text-white">
                <h2 className="text-3xl font-bold">
                    Be a Part of the {" "}
                    <span className="bg-purple-200 text-purple-800 px-2 rounded">
                        EV Revolution
                    </span>
                </h2>
                <div className="mt-6 flex justify-center gap-4">
                    <a
                    href="/contact"
                    className="bg-purple-600 px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">
                        Partner With Us</a>
                </div>
            </section>
        </div>

    )
}
export default TrackRecord;



