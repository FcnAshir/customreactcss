import React from 'react';

import Link from 'next/link';
import Hero from "./components/hero/heo"
import Footer from "./components/footer/footer"

function App() {
  return (
    
      <div>
              <nav>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <Hero/>
      <Footer/>


      </div>
    
  );
}

export default App;