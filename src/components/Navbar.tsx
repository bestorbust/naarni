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
        <nav className="fixed top-6 left-10 right-10 z-50 bg-white/30 backdrop-blur-md border border-gray-100 rounded-full shadow-lg">
            <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
                <Link to="/" className="text-green-400 font-bold text-2xl bg-white p-2  rounded-lg">
                NaArNi
                </Link>
                <div className="hidden md:flex space-x-6 items-center">
                    {menu.map((item)=>(
                        <Link
                        key={item.name}
                        to={item.link}
                        className={`px-3 py-1 transition font-medium rounded-full
                            ${
                                isActive(item.link)
                                ? "bg-green-100 text-green-600 border border-green-300"
                                :"text-gray-700 hover:text-green-600"
                            }`}
                        >
                            {item.name}
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
                <div className="md:hidden bg-white px-4 pb-4 shadow-md space-y-2">
                    {menu.map((item)=>(
                        <Link
                        key={item.name}
                        to={item.link}
                        className={`px-3 py-1 transition font-medium rounded-full
                            ${
                                isActive(item.link)?
                                "bg-green-100 text-green-600 border border-green-300"
                                :"text-gray-700 hover:text-green-600"
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
