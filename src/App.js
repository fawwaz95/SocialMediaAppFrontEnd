import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Homepage from './components/Homepage';
import Header from './components/Header';
import AppRoutes from './components/AppRoutes';
import { MobileProvider } from './contexts/MobileContext';


function App() {
  return (
    <div className="bg-zinc-950">
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