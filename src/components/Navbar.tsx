import React from 'react';
import './Navbar.css';

const Navbar=()=>{
  const scrollTo=(id:string)=>{
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
  });
}

return(
  <nav className='navbar'>
    <div className="navbar-container">
      <div className='navbar-brand' style={{color:'#fff'}}>NaArNi</div>
      <div className='navbar-links'>
        {['Home','Team', 'TrackRecord', 'Offering', 'Vision', 'Careers', 'Contact'].map((id) => (
          <a key={id} href='#' className='navbar-link' onClick={() => scrollTo(id)}>
            {id.replace(/([A-Z])/g, ' $1')}
            </a>
        ))}
      </div>
    </div>
  </nav>
);
};

export default Navbar;
