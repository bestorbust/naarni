import React,{useState,useEffect} from "react";
import Lottie from "react-lottie-player";
import EVBus from "../assets/lotties/ev-bus.json";
import ComingSoon from "../assets/lotties/loading.json";
import Bus from "../assets/products/bus.jpg";

const cardStyle: React.CSSProperties = {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
};

const parallaxImages=[
    "/images/product-hero.jpg",
    "/images/truck.jpg",
]
const Products:React.FC=()=>{
    const buses=[
        {
            name:"NaArNi INtercity Electric Bus",
            type:"Heavy Commercial Vehicle (HCV)",
            range:"100+ km per charge",
            charge:"Fast Charging in 1.5 hrs",
            img:Bus
        },
        
    ];

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


    return(
        <div className="bg-gray-900 pt-16 text-gray-300">
            <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20"
            style={getParallaxStyle(0)}
            >
                <div
                    className="absolute inset-0 bg-black opacity-50 pointer-events-none"
                    aria-hidden="true"
                    style={{ zIndex: 0 }}/>
                <div
                className="md:w-1/2 text-center md:text-left relative z-10 p-6 rounded"
                style={cardStyle}>
                <h1 className="text-5xl md:text-6xl font-bold text-[#B8F306] leading-snug">
                        Heavy EVs Engineered for {" "}
                        <span className="bg-[#B8F306]/80 text-gray-900 px-3 rounded-lg">Operators</span>
                    </h1>
                    <p className="mt-4 text-gray-300 max-w-md">
                        We manufacture <strong>best-in-class intercity electric buses</strong> trusted by India’s largest fleet operators. Designed for 
                        <strong>profitability, reliability, and lowest cost per km</strong>.
                    </p>
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <Lottie
                    loop play animationData={EVBus} className="w-80 md:w-[450px]"/>
                    </div>
            </section>
            
            <section className="py-16 bg-gray-700">
                <h2 className="text-4xl font-bold text-center text-[#B8F306]">
                    Our Products
                </h2>
                <p className="text-center text-gray-300 mt-2">
                    Built for long hauls, trusted by operators nationwide.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 px-4">
                    {buses.map((item,i)=>(
                        <div
                        key={i}
                        className="rounded-xl shadow hover:shadow-lg hover:scale-105 transition overflow-hidden"
                        style={cardStyle}
                        >
                            <img
                            src={item.img}
                            alt={item.name}
                            className="w-full h-56 object-cover"/>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-[#B8F306]">
                                    {item.name}
                                </h3>
                                <p className="text-gray-300 text-sm">{item.type}</p>
                                <div className="mt-3 space-y-1 text-sm text-gray-300">
                                    <p> Range:{item.range}</p>
                                    <p> Charging:{item.charge}</p>
                            </div>
                            <a
                            href="/contact"
                            className="mt-4 inline-block bg-teal-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition">
                                Request for Fleet Orders
                            </a>
                            </div>
                            </div>
                        
                    ))}
                </div>
            </section>


            <section className="py-16 bg-gary-900 text-center relative" style={getParallaxStyle(2)}>
                            <div
                        className="absolute inset-0 bg-black opacity-50 pointer-events-none"
                        aria-hidden="true"
                        style={{ zIndex: 0 }} />
                    <h2 className="text-4xl font-bold text-center text-[#B8F306] relative z-10">
                    What's Next?
                </h2>
                <p className="text-gray-300 mt-2">
                    Electric <strong>Trucks</strong> launching soon to revolutionize logistics.
                </p>
                <div className="mt-6 flex justify-center">
                    <Lottie
                    loop play animationData={ComingSoon} className="w-64 md:w-80"/>
                </div>
            </section>

            <section className="py-12 bg-gradient-to-r from-blue-900 to-blue-700 text-center text-white">
                <h2 className="text-3xl font-bold">
                    Ready to Build a {" "}
                    <span
                    className="px-2 rounded"
                    style={{ backgroundColor: "rgba(184, 243, 6, 0.85)", color: "#1f2937" }}>
                        Profitable EV Fleet?
                    </span>
                </h2>
                <div className="mt-6 flex justify-center gap-4">
                    <a
                    href="/contact"
                    className="bg-teal-600 px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">
                        Contact Our Sales Team
                        </a>
                </div>
            </section>
        </div>

    )
}
export default Products;



