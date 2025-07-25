import React from "react";
import Lottie from "react-lottie-player";
import EvTruck from "../assets/lotties/ev-truck.json";
import {Battery, PlugZap,Truck,Wallet,Wrench} from "lucide-react";

const Home:React.FC=()=>{
    return(
        <div className="bg-gray-50 pt-2">
            <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl md:text-6xl font-bold text-green-700 leading-snug">
                        Empowering the Future of {" "}
                        <span className="bg-purple-200 text-purple-800 px-3 rounded-lg">Heavy EVS</span>
                    </h1>
                    <p className="mt-4 text-gray-600 max-w-md">
                        Best-in-class products, smart financing, reliable charging, and battery assurance - all in one ecosystem.
                    </p>
                    <div className="mt-6 flex gap-4 justify-center md:justify-start">
                        <a
                        href="/products"
                        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
                            Explore Products
                        </a>
                        <a
                        href="/contact"
                        className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">
                            Contact for Fleet Orders
                        </a>
                    </div>
                    </div>

                    <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                    <Lottie
                    loop play animationData={EvTruck} className="w-100 md:w-[450px]"/>
                    </div>
            </section>
            
            <section className="py-16 bg-white">
                <h2 className="text-4xl font-bold text-center text-green-700">
                    The NaArNi Ecosystem
                </h2>
                <p className="text-center text-gray-500 mt-2">
                    Everything you need for a smarter, greener future.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto mt-auto mt-10 px-4">
                    {[
                        {
                            name: "Product",
                            icon: <Truck className="w-10 h-10 text-green-600"/>,
                            desc: "Best-in-class range & efficiency",
                        },
                        {
                            name: "Financing",
                            icon: <Wallet className="w-10 h-10 text-green-600"/>,
                            desc: "Long-term cost-effective options",
                        },
                        {
                            name: "Maintenance",
                            icon: <Wrench className="w-10 h-10 text-green-600"/>,
                            desc: "High-voltage AMC support",
                        },
                        {
                            name: "Charging",
                            icon: <PlugZap className="w-10 h-10 text-green-600"/>,
                            desc: "Reliable & fast network",
                        },
                        {
                            name: "Battery",
                            icon: <Battery className="w-10 h-10 text-green-600"/>,
                            desc: "Battery replacement assurance",
                        },
                    ].map((item)=>(
                        <div
                        key={item.name}
                        className="bg-green-50 rounded-xl p-6 text-center shadow hover:shadow-lg transition hover:scale-105">
                            <div className="mb-3 flex justify-center">{item.icon}</div>
                            <h3 className="text-lg font-semibold text-purple-700">{item.name}</h3>
                            <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                        </div>
                    ))
                    }
                </div>
            </section>
            <section className="py-16 bg-green-50">
                <h2 className="text-4xl font-bold text-center text-green-700">
                    Why Choose{" "}
                    <span className="bg-purple-200 text-purple-800 px-2 rounded">NaArNi?</span>
                </h2>
                <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    {[
                        {
                            title: "120+ km Range",
                            text: "Heavy EVs optimized for long hauls.",
                        },
                        {
                            title: "70% CO2 Reduction",
                            text: "Cleaner, greener, future-ready mobility.",
                        },
                        {
                            title: "Smart IoT Monitoring",
                            text: "Track and manage fleets in real time.",
                        },
                    ].map((item)=>(
                        <div
                        key={item.title}
                        className="relative group cursor-pointer overflow-hidden bg-white rounded-xl p-6 shadow transition hover:shadow-lg">
                            <div className="absolute inset-0 bg-green-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"/>
                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center transition-colors duration-500 ease-in-out group-hover:text-white">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-800 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-xs">{item.text}</p>
                                </div>
                            </div>
                    ))
                    }
                </div>
            </section>

            <section className="py-12 bg-gradient-to-r from-green-600 to-green-800 text-center text-white">
                <h2 className="text-3xl font-bold">
                    Ready to Drive the {" "}
                    <span className="bg-purple-200 text-purple-800 px-2 rounded">
                        Future?
                    </span>
                </h2>
                <div className="mt-6 flex justify-center gap-4">
                    <a
                    href="/contact"
                    className="bg-purple-600 px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">
                        Contact</a>
                    
                </div>
            </section>
        </div>

    )
}
export default Home;



