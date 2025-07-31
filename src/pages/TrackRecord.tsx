import React, {useState,useEffect} from "react";
import Lottie from "react-lottie-player";
import Analysis from "../assets/lotties/Record-analytic.json";
import EVBus from "../assets/lotties/ev-bus.json";
import EVTruck from "../assets/lotties/ev-truck.json";

const cardStyle:React.CSSProperties={
    backgroundColor: "rgba(255,255,255,0.05)",
    backdropFilter:"blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
};

const parallaxImages=[
    "/images/track-record.png",
    "/images/hcv-opportunity.jpg",
]
const TrackRecord:React.FC=()=>{

    const [offsetY,setOffsetY]=useState(0);

    useEffect(()=>{
        const handleScroll=()=> setOffsetY(window.pageYOffset);
        window.addEventListener("scroll",handleScroll);
        return()=> window.removeEventListener("scroll",handleScroll);
    },[]);

    const getParallaxStyle=(index:number)=>{
        if(index%2===0){
            return{
                backgroundImage:`url(${parallaxImages[index/2]|| parallaxImages[0]})`,
                backgroundSize:"cover",
                backgroundPosition:`center ${-offsetY*0.3}px`,
                backgroundAttachment:"fixed",
                backgroundRepeat:"no-repeat",
                position:"relative" as const,

            };
        }
        return{};
    };

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
        <div className="bg-gray-900 pt-16 text-gray-300">
            <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20"
            style={getParallaxStyle(0)}
            >
                <div
                    className="absolute inset-0 bg-black opacity-50 pointer-events-none"
                    aria-hidden="true"
                    style={{ zIndex: 0 }}/>
                <div className="md:w-1/2 text-center md:text-left relative z-10 p-6 rounded" style={cardStyle}>
                    <h1 className="text-5xl md:text-6xl font-bold text-[#B8F306] leading-snug">
                        Our {" "}
                        <span className="bg-[#B8F306]/80 text-gray-900 px-3 rounded-lg">Track Record</span>
                    </h1>
                    <p className="mt-4 text-gray-300 max-w-md font-medium">
                        Over a decade of innovation in Electric Mobility, from India's first intercity EV buses to a future of Heavy EV Trucks.
                    </p>
                    
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <Lottie
                    loop play animationData={Analysis} className="w-80 md:w-[450px]"/>
                    </div>
            </section>
            
            <section className="py-16 bg-gray-700">
                <h2 className="text-4xl font-bold text-center text-[#B8F306]">
                    Milestones in EV Innovation
                </h2>
                <div className="max-w-6xl mx-auto mt-10 space-y-8 px-4">
                    {milestones.map((item,i)=>(
                        <div
                        key={i}
                        className=" flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl shadow hover:shadow-lg transition"
                        style={cardStyle}
                        >
                            <div className="md:w-1/3 flex justify-center">
                            <Lottie
                            loop play animationData={item.anim} className="w-40 h-40"/>
                            </div>

                            <div className="md:w-2/3">
                            <p className="text-gray-300 font-bold text-sm">{item.year}</p>
                            <h3 className="text-xl font-semibold text-teal-400">{item.title}</h3>
                            <ul className="mt-2 text-gray-200  list-disc list-inside">
                                {item.details.map((point,j)=>(
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            <section className="py-16 bg-gary-900 relative" style={getParallaxStyle(2)}>
                <div
                    className="absolute inset-0 bg-black opacity-50 pointer-events-none"
                    aria-hidden="true"
                    style={{ zIndex: 0 }} />
                <h2 className="text-4xl font-bold text-center text-[#B8F306] relative z-10">
                    The HCV Opportunity
                </h2>
                <div className="flex flex-wrap justify-center gap-8 mt-10">
                    {marketStats.map((stats,i)=>(
                        <div
                        key={i}
                        className="w-40 text-center rounded-xl p-4 shadow hover:scale-105 transition"
                        style={cardStyle}
                        >
                            <p className="text-2xl font-bold text-teal-400">{stats.value}</p>
                            <p className="text-gray-400 text-sm">{stats.label}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-12 bg-gradient-to-r from-teal-900 to-teal-600 text-center text-white">
                <h2 className="text-3xl font-bold">
                    Be a Part of the {" "}
                    <span className="bg-[#B8F306]/80 text-gray-800 px-2 rounded">
                        EV Revolution
                    </span>
                </h2>
                <div className="mt-6 flex justify-center gap-4">
                    <a
                    href="/contact"
                    className="bg-[#B8F306]/90 px-6 py-3 rounded-lg shadow text-gray-900 hover:bg-[#B8F306] transition">
                        Partner With Us</a>
                </div>
            </section>
        </div>

    )
}
export default TrackRecord;



