import React, {useState} from "react";
import {Menu,X} from "lucide-react";
import {Link, useLocation} from "react-router-dom";

const Navbar:React.FC=()=>{
    const [open,setOpen]=useState(false);
    const location= useLocation();
    const menu=[
        {name:"Home",link:"/"},
        {name:"About",link:"/about"},
        {name:"Products",link:"/products"},
        {name:"Track Records",link:"/track-record"},
        {name:"Careers",link:"/careers"},
        {name:"Contact",link:"/contact"},
    ];

    const isActive=(path:string)=>location.pathname===path;

    
    return(
        <nav className="fixed top-6 left-10 right-10 z-50 bg-blue-900/40 backdrop-blur-md border border-blue-700 rounded-full shadow-lg">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
                <Link to="/" className="text-[#B8F306] font-extrabold text-3xl tracking-wide px-3 py-1 rounded-lg hover:text-white transition">
                NaArNi
                </Link>
                <div className="hidden md:flex space-x-8 items-center">
                    {menu.map((item)=>(
                        <Link
                        key={item.name}
                        to={item.link}
                        className={`relative font-semibold text-lg px-3 py-2 rounded-full transition-colors duration-300
                ${
                    isActive(item.link)
                    ? "text-white"
                    : "text-blue-200 hover:text-[#B8F306]"
                }`}
            >

                            {item.name}
                            <span
                            className={`absolute left-0 -bottom-1 h-0.5 w-full bg-[#B8F306] rounded origin-left transform transition-transform duration-300
                  ${isActive(item.link) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}/>
                        </Link>
                    ))}
                </div>

                <div className="md:hidden">
                    <button onClick={()=>setOpen(!open)}>
                        {open? <X size={28}/>:<Menu size={28}/>}
                    </button>
                </div>
            </div>

            {open && (
                <div className="md:hidden bg-gray-900/90 px-4 pb-4 shadow-md space-y-2 ">
                    {menu.map((item)=>(
                        <Link
                        key={item.name}
                        to={item.link}
                        className={`px-3 py-1 transition font-medium rounded-full
                            ${
                                isActive(item.link)?
                                "bg-blue-100 text-gray-900 border border-[#B8F306]"
                                :"text-[#B8F306] hover:text-blue-900"
                            }`}
                        onClick={()=>setOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
};
export default Navbar;

