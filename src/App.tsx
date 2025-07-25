import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import TrackRecord from './pages/TrackRecord';
import Careers from './pages/Careers';

import Navbar from './components/Navbar';


const App=()=>{
  return(
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/track-record" element={<TrackRecord/>}/>
        <Route path="/careers" element={<Careers/>}/>
      </Routes>
    </Router>
  )
}
export default App;