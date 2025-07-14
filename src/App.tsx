import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Team from './sections/Team';
import TrackRecord from './sections/TrackRecord';
import Offering from './sections/Offering';
import Vision from './sections/Vision';
import Careers from './sections/Careers';
import Contact from './sections/Contact';

import './App.css';

const App = () => {
  return (
    <div className="app">
    <div className='nav'>
      <Navbar />
      </div>
      <main className="main-content">
        <Hero />
        <Team />
        <TrackRecord />
        <Offering />
        <Vision />
        <Careers />
        <Contact />
      </main>
    </div>
  );
};

export default App;