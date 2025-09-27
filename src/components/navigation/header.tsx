import React from "react";
import { Button } from "../ui/button";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [sliderStyle, setSliderStyle] = React.useState({ width: 0, left: 0 });

  const buttonRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const navigationItems = [
    { label: "Home", id: "home", href: "#home" },
    { label: "About", id: "about", href: "#about" },
    { label: "Service", id: "services", href: "#services" },
    { label: "Resume", id: "experience", href: "#experience" },
    { label: "Project", id: "portfolio", href: "#portfolio" },
    { label: "Contact", id: "contact", href: "#contact" }
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const currentSection = ["home", "about", "services", "experience", "portfolio", "contact"].find(section => {
        const element = document.querySelector(`#${section}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  React.useEffect(() => {
    const activeIndex = navigationItems.findIndex(item => item.id === activeSection);
    if (activeIndex >= 0 && buttonRefs.current[activeIndex]) {
      const activeButton = buttonRefs.current[activeIndex];
      if (activeButton) {
        setSliderStyle({
          width: activeButton.offsetWidth,
          left: activeButton.offsetLeft
        });
      }
    }
  }, [activeSection, isScrolled]);

  const scrollToSection = (href: string) => {
    try {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
  };

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center px-8 py-4 rounded-[50px] border border-white/20 transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
      isScrolled 
        ? 'w-[900px] bg-black/60 backdrop-blur-xl shadow-2xl scale-95' 
        : 'w-[1000px] bg-black/40 backdrop-blur-lg'
    }`}>
      <div className="flex items-center gap-2 relative">
        <div 
          className="absolute top-0 bg-gradient-to-r from-[#f72585] to-[#7209b7] rounded-[40px] h-full transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] z-0"
          style={{
            width: `${sliderStyle.width}px`,
            transform: `translateX(${sliderStyle.left}px)`,
            opacity: sliderStyle.width > 0 ? 1 : 0
          }}
        />
        
        {navigationItems.map((item, index) => (
          <Button
            key={item.id}
            ref={(el) => buttonRefs.current[index] = el}
            variant="ghost"
            className={`px-6 py-4 rounded-[40px] text-lg font-medium transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] relative z-10 cursor-pointer ${
              activeSection === item.id 
                ? "text-white" 
                : "text-white/70"
            }`}
            onClick={() => scrollToSection(item.href)}
          >
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
};