// import React ,{useEffect,useState} from "react";

// const ScrollToTop:React.FC=()=>{
//     const [scrollPercent,setScrollPercent]=useState(0);
//     const [isVisible,setIsVisible]=useState(false);

//     useEffect(()=>{
//         const handleScroll=()=>{
//             const scrollTop= window.scrollY;
//             const docHeight= document.documentElement.scrollHeight - document.documentElement.clientHeight;
//             const scrolled= (scrollTop/docHeight)*100;

//             setScrollPercent(scrolled);
//             setIsVisible(scrollTop>100)
//         };
//         window.addEventListener("scroll",handleScroll);
//         return ()=> window.removeEventListener("scroll",handleScroll);
//     },[]);

//     const scrollToTop=()=>{
//         window.scrollTo({top:0,behavior:"smooth"});
//     };

//     return(
//         <>
//         {
//             isVisible && (
//                 <button
//                 onClick={scrollToTop}
//                 className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-white shadow-lg border-2 border-green-400 z-[9999] flex items-center justify-center hover:scale-105 transition"
//                 style={{
//                     background:`conic-gradient(
//                     #22c55e ${scrollPercent*3.6}deg,
//                     #e5e8eb ${scrollPercent*3.6}deg)`
//                 }}>
//                     <div className="absolute w-12 h-12 rounded-full bg-white flex items-center justify-center text-green-600 text-xl font-bold">
//                         ↑
//                     </div>
//                 </button>
//             )
//         }</>
//     );

// }

// export default ScrollToTop;
import React, { useEffect, useState } from "react";

const ScrollToTop: React.FC = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;

      setScrollPercent(scrolled);
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-white shadow-lg border-2 border-blue-500 z-[9999] flex items-center justify-center hover:scale-110 transition-transform duration-300"
          style={{
            background: `conic-gradient(
              #3b82f6 ${scrollPercent * 3.6}deg,
              #e5e8eb ${scrollPercent * 3.6}deg
            )`,
          }}
        >
          <div className="absolute w-12 h-12 rounded-full bg-white flex items-center justify-center text-blue-600 text-2xl font-bold select-none">
            ↑
          </div>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
