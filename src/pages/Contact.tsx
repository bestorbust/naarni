import React from "react";
import Lottie from "react-lottie-player";
import ContactAnim from "../assets/lotties/contact-support.json";
import Map from "../assets/lotties/map-location.json";

const Contact:React.FC=()=>{
    return(
        <div className="bg-gray-50 pt-2">
            <section className="relative flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-20">
                <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-5xl md:text-6xl font-bold text-green-700 leading-snug">
                    Get in {" "}
                    <span className="bg-purple-200 text-purple-800 px-3 rounded-lg">Touch</span>
                </h1>
                <p className="mt-4 text-gray-600 max-w-md">
                    Reach out to us for product enquiries, dealership opportunities. We'd love to hear from you!
                </p>
                </div>
                <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
                <Lottie
                loop play animationData={ContactAnim} className="w-100 md:w-[400px]"/>
                </div>
            </section>

            <section className="py-16 bg-white">
                <h2 className="text-4xl font-bold text-center text-green-700">
                    Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mt-10 px-4">
                    {[
                        {
                            title:"Email",
                            value:"website@naarni.com",
                        },
                        {
                            title:"Office Address",
                            value:"HD-019, WeWork Vaishnavi Signature, No. 78/9 Outer Ring Road, Bellandur, Bangalore, Karnataka, India 560103",
                        }

                    ].map((info,i)=>(
                        <div
                        key={i}
                        className="bg-green-50 rounded-xl p-6 text-center shadow hover:shadow-lg transition">
                            <h3 className="text-lg font-semibold text-purple-700">
                                {info.title}
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">{info.value}</p>
                        </div>
                    ))
                    }
                </div>
            </section>
            <section className="py-16 bg-green-50">
                <h2 className="text-4xl font-bold text-center text-green-700">Visit Us</h2>
                <div className=" flex flex-col md:flex-row max-w-6xl mx-auto mt-10 px-4 gap-8">
                    <div className="md:w-1/2">
                    {/* <iframe
                    title="NaArNi Office Map"
                    src="https://www.google.com/maps/"
                    width="100%"
                    height="300"
                    loading="lazy"
                    className="rounded-xl shadow"/> */}
                    <iframe
                    title="NaArni Office Map"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.756058499364!2d77.66506397320866!3d12.923394115937104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU1JzI0LjIiTiA3N8KwNDAnMDMuNSJF!5e0!3m2!1sen!2sin!4v1753354612757!5m2!1sen!2sin"
                    width="100%"
                    height="300"
                    loading="lazy"
                    className="rounded-xl shadow"></iframe>
                    </div>
                    
                    <div className="md:w-1/2 flex justify-center items-center">
                    <Lottie
                    loop play animationData={Map} className="w-100 md:w-[450px"/>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gradient-to-r from-green-600 to-green-800 text-center text-white">
                <h2 className="text-3xl font-bold">
                    Want to Become a {" "}
                    <span className="bg-purple-200 text-purple-800 px-2 rounded">
                        Dealer?
                    </span>
                </h2>
                <div className="mt-6 flex justify-center gap-4">
                    <a
                    href="mailto:website@naarni.com"
                    className="bg-purple-600 px-6 py-3 rounded-lg shadow hover:bg-purple-700 transition">Contact Us for Dealership</a>
                </div>
            </section>
        </div>
    );

};
export default Contact;