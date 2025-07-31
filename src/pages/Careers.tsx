import React, {useState,useEffect} from "react";
import Lottie from "react-lottie-player";
import CareersTeam from "../assets/lotties/careers-team.json";
import WorkSpace from "../assets/lotties/workspace.json";
import Growth from "../assets/lotties/growth-success.json";

const cardStyle:React.CSSProperties={
    backgroundColor: "rgba(255,255,255,0.05)",
    backdropFilter:"blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
};

const parallaxImages=[
    "images/careers-hero.jpg",
    "/images/open-positions.jpg",
]
const Careers:React.FC=()=>{

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

    const whyWork=[
        {
            title:"Impactful Work",
            desc:"Drive the EV revolution & make mobility greener.",
            anim:WorkSpace,
        },
        {
            title:"Innovative Culture",
            desc:"Working with cutting-edge EV and IoT technologies.",
            anim:Growth,
        },
        {
            title:"Growth Opportunities",
            desc:"Upskill and grow in the fastest-growing EV industry.",
            anim:WorkSpace,
        },
        
    ];
    const jobs=[
        {
            role:"Founder Staff",
            location:"Begaluru, India",
            exp: "3-4 yrs workex",
        },
        {
            role:"Data Analyst",
            location:"Begaluru, India",
            exp: "3-4 yrs workex",
        },
        {
            role:"Aftersales Manager",
            location:"Begaluru, India",
            exp: "10-15 yrs workex",
        },
        {
            role:"HR and Admin",
            location:"Begaluru, India",
            exp: "3-4 yrs workex",
        },
        
    ]
    return(
        <div className="bg-gray-900 pt-16 text-gray-300" >
            <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20"
            style={getParallaxStyle(0)}>
                <div
                    className="absolute inset-0 bg-black opacity-50 pointer-events-none"
                    aria-hidden="true"
                    style={{ zIndex: 0 }}/>
                <div className="md:w-1/2 text-center md:text-left relative z-10 p-6" style={cardStyle}>
                    <h1 className="text-5xl md:text-6xl font-bold text-[#B8F306] leading-snug">
                        Join {" "}
                        <span className="bg-[#B8F306]/80 text-gray-900 px-3 rounded-lg">Our Team</span>
                    </h1>
                    <p className="mt-4 text-gray-300 max-w-md">
                        Be part of the Heavy EV revolution. Work with innovators who are building the future of sustainable transportation.
                    </p>
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <Lottie
                    loop play animationData={CareersTeam} className="w-100 md:w-[450px]"/>
                    </div>
            </section>
            
            <section className="py-16 bg-gray-700" >
                <h2 className="text-4xl font-bold text-center text-[#B8F306]">
                    Why Work at NaArNi?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-10 px-4">
                    {whyWork.map((item,i)=>(
                        <div
                        key={i}
                        className="rounded-xl p-6 text-center shadow hover:shadow-lg hover:scale-105 transition"
                        style={cardStyle}
                        >
                            <Lottie
                            loop play animationData={item.anim} className="w-24 h-24 mx-auto mb-3"/>
                            <h3 className="text-xl font-semibold text-teal-400">
                                {item.title}
                            </h3>
                            <p className="text-gray-300 text-sm mt-2">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            
            <section className="py-16 bg-gray-900 relative" style={getParallaxStyle(2)}>
                <div
                    className="absolute inset-0 bg-black opacity-20 pointer-events-none"
                    aria-hidden="true"
                    style={{ zIndex: 0 }} />
                <h2 className="text-4xl font-bold text-center text-[#B8F306]">Open Positions</h2>
                <div className="max-w-5xl mx-auto mt-10 space-y-6 px-4">
                    {jobs.map((job,i)=>(
                        <div
                        key={i}
                        className="flex flex-col md:flex-row items-center justify-between rounded-xl p-6 shadow hover:shadow-lg transition"
                        style={cardStyle}
                        >
                            <div>
                                <h3 className="text-xl font-bold text-teal-400">{job.role}</h3>
                                <p className="text-gray-900 text-sm font-semibold">{job.location} . {job.exp}</p>
                            </div>
                            <a
                            href="mailto:website@naarni.com"
                            className="mt-4 md:mt=0 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">ApplyNow</a>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700 text-center text-white">
                <h2 className="text-3xl font-bold">
                    Want to Shape the {" "}
                    <span
                    className="px-2 rounded"
                    style={{ backgroundColor: "rgba(184, 243, 6, 0.85)", color: "#1f2937" }}>
                        EV Future?
                    </span>
                </h2>
                <Lottie
                loop play animationData={Growth} className="w-28 mx-auto my-4"/>
                <div className="mt-6 flex justify-center gap-4">
                    <a
                    href="/contact"
                    className="bg-teal-600 px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">
                        Send Your Resume</a>
                    
                </div>
            </section>
        </div>

    );

};
export default Careers;
