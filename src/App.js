import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Partners from './Pages/Partners';


    function App() {
      return (
        <div>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/partners" element={<Partners />} />
              <Route path="/contacts" element={<Contact />} />
            
            </Routes>
          </main>
        </div>
      );
    }

export default App;

