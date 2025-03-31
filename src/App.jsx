import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop";
import SplashScreen from "./components/SplashScreen";
import Depoimentos from './routes/Depoimentos';

function App() {
  const [showSplash, setShowSplash] = useState(false);
  const location = useLocation();

  // Verifica se está na home e se é a primeira visita
  useEffect(() => {
    if (location.pathname === '/') {
      const hasSeenSplash = localStorage.getItem('hasSeenSplash');
      if (!hasSeenSplash) {
        setShowSplash(true);
        localStorage.setItem('hasSeenSplash', 'true');
      }
    }
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      
      <ScrollToTop />
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App