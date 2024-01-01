import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Homepage from './components/Homepage';
import Header from './components/Header';
import AppRoutes from './components/AppRoutes';


function App() {
  const [isMobile, setIsMobile] = useState();
  
  const checkIsMobile = () => {
    if(window.innerWidth <= 768){
      console.log("ITS MOBILE");
      setIsMobile(true);
    }else{
      console.log("Width is greater then 768");
      setIsMobile(false);
    }
  }

  useEffect = () => {
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }
  
  return (
    <div className="bg-zinc-950">
        <div className="flex flex-col">
        <Header isMobile={isMobile} />
        <div className="flex-1 h-screen">
          <AppRoutes isMobile={isMobile} />
          {/*<Homepage isMobile={isMobile} />*/}
        </div>       
      </div>
    </div>
  );
}

export default App;