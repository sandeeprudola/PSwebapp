import React, { useState } from "react";
import "./App.css"; 
import Page2 from "./pages/Page2";
import { ReactLenis, useLenis } from 'lenis/react'
import Page1 from "./pages/Page1";
import Scrollfooter from "./components/Scrollfooter"
import Page3 from "./pages/Page3";


function App() {
  return (
    <ReactLenis root>
      <div className="relative bg-white overflow-hidden">
        <Page1/>

        <Page2/>
        <Page3/>
        </div>
      
    </ReactLenis>
  );
}


export default App;
