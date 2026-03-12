import TopBar from './TopBar';
import InfoBar from './InfoBar';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const footer = document.querySelector('footer');
      
      let shouldHide = false;
      
      // Hide near top
      if (scrollY < 100) {
        shouldHide = true;
      }
      
      // Hide near footer
      if (footer) {
        const footerTop = footer.offsetTop;
        if (scrollY + windowHeight >= footerTop) {
          shouldHide = true;
        }
      }
      
      setIsVisible(!shouldHide);
    };

    // Run once on mount to set initial state
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes shine {
          0% { transform: translateY(-100%) rotate(180deg); }
          100% { transform: translateY(200%) rotate(180deg); }
        }
        .shine-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -50%;
          width: 200%;
          height: 40%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transform: translateY(-100%) rotate(180deg);
          animation: shine 2.5s ease-in-out infinite;
        }
      `}</style>

      <div 
        className={`fixed right-0 top-[60%] md:top-1/2 -translate-y-1/2 z-[40] flex flex-col gap-2 mr-2 transition-all duration-400 ease-in-out ${
          isVisible 
            ? 'translate-x-0 opacity-100 pointer-events-auto' 
            : 'translate-x-[110%] opacity-0 pointer-events-none'
        }`}
        style={{
          transition: 'transform 0.4s ease, opacity 0.4s ease'
        }}
      >
        <Link
          to="/contact"
          className="shine-btn relative bg-[#1e4d5c] text-white font-semibold text-sm shadow-lg hover:bg-[#163a46] transition-colors flex items-center justify-center overflow-hidden border-2 border-white"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            borderRadius: '999px',
            width: '38px',
            height: '180px',
            letterSpacing: '0.05em',
          }}
        >
          Enquire Now
        </Link>
        <Link
          to="/admission/admission-form"
          className="shine-btn relative bg-red-600 text-white font-semibold text-sm shadow-lg hover:bg-red-700 transition-colors flex items-center justify-center overflow-hidden border-2 border-white"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed',
            transform: 'rotate(180deg)',
            borderRadius: '999px',
            width: '38px',
            height: '180px',
            letterSpacing: '0.05em',
          }}
        >
          Admissions 2025-26
        </Link>
      </div>
    </>
  );
};

const Header = () => {
    return (
        <>
            <div className="flex flex-col w-full">
                <TopBar />
                <InfoBar />
            </div>
            <Navbar />
            <FloatingButtons />
        </>
    );
};

export default Header;