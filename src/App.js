import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Homepage from './components/Neutral/HomePage';
import Header from './components/Neutral/Header';
import AppRoutes from './components/AppRoutes/AppRoutes';
import { MobileProvider } from './contexts/MobileContext';


function App() {
  return (
    <div className="bg-zinc-950">  {/*bg-gradient-to-r from-blue-400 via-slate-500 to-black-500*/}
      <MobileProvider>
        <div className="flex flex-col">
          <Header />
            <div className="flex-1 h-screen">
              <AppRoutes />
              {/*<Homepage isMobile={isMobile} />*/}
            </div>       
        </div>
      </MobileProvider>
    </div>
  );
}

export default App;