import { Quote as QuoteIcon, Star as StarIcon } from "lucide-react";
import React from "react";
import { RotatingText } from "../../components/animation/rotating-text";

interface Step {
  action: 'type' | 'delete' | 'pause' | 'finish';
  text?: string;
  count?: number;
  duration?: number;
}

const CustomTypewriter = ({ className }: { className?: string }) => {
  const [displayText, setDisplayText] = React.useState("");
  const [showCursor, setShowCursor] = React.useState(true);

  React.useEffect(() => {
    const sequence: Step[] = [
      { action: 'type', text: "Mohammed's exceptional " },
      { action: 'type', text: "softeware" },
      { action: 'pause', duration: 500 },
      { action: 'delete', count: 9 },
      { action: 'type', text: "software" },
      { action: 'type', text: " development ensures our " },
      { action: 'type', text: "websiet's" },
      { action: 'pause', duration: 400 },
      { action: 'delete', count: 9 },
      { action: 'type', text: "website's" },
      { action: 'type', text: " success. " },
      { action: 'type', text: "Hihgly" },
      { action: 'pause', duration: 300 },
      { action: 'delete', count: 6 },
      { action: 'type', text: "Highly" },
      { action: 'type', text: " recommended!" },
      { action: 'finish' }
    ];

    let currentStep = 0;
    let currentText = "";

    const executeStep = () => {
      if (currentStep >= sequence.length) return;

      const step = sequence[currentStep];
      
      if (step.action === 'type' && step.text) {
        let charIndex = 0;
        const typeInterval = setInterval(() => {
          if (charIndex < step.text!.length) {
            currentText += step.text![charIndex];
            setDisplayText(currentText);
            charIndex++;
          } else {
            clearInterval(typeInterval);
            currentStep++;
            setTimeout(executeStep, 50);
          }
        }, 60);
      } else if (step.action === 'delete' && step.count) {
        let deleteCount = 0;
        const deleteInterval = setInterval(() => {
          if (deleteCount < step.count!) {
            currentText = currentText.slice(0, -1);
            setDisplayText(currentText);
            deleteCount++;
          } else {
            clearInterval(deleteInterval);
            currentStep++;
            setTimeout(executeStep, 100);
          }
        }, 40);
      } else if (step.action === 'pause' && step.duration) {
        setTimeout(() => {
          currentStep++;
          executeStep();
        }, step.duration);
      } else if (step.action === 'finish') {
        setShowCursor(false);
      }
    };

    const startTimer = setTimeout(executeStep, 1000);
    return () => clearTimeout(startTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {showCursor && <span className="animate-pulse">|</span>}
    </span>
  );
};

export const Hero = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const stars = Array(5).fill(null);
  const engineerTypes = ["AI & ML", "Data", "DevOps", "Integration","Full-Stack", "Security","Embedded", "Network", "Database"];

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="flex flex-col items-center relative w-full h-screen pt-16 overflow-hidden">
      <div className="flex w-full max-w-[1440px] h-full items-end justify-center gap-[71px] relative px-8">
        
        <div className={`inline-flex flex-col items-center absolute top-[37px] left-1/2 transform -translate-x-1/2 transition-all duration-1000 ease-out z-30 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="inline-flex flex-col items-center gap-2.5 relative">
            <div className="relative w-[107px] h-14">
              <div className={`h-[38px] gap-[5px] px-[21px] py-[10px] absolute top-[16px] left-[calc(50%_-_54px)] bg-[#ffffff1a] rounded-[32px] border-[1px] border-solid border-neutral-900 inline-flex items-center justify-center overflow-hidden transition-all duration-800 delay-300 ${
                isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-12'
              }`}>
                <span className="relative w-fit mt-[-3.5px] mb-[-1.5px] [font-family:'Lufga-Medium',Helvetica] font-medium text-neutral-900 text-lg tracking-[-0.25px] leading-[normal]">
                  HI 
                </span>
              </div>
              <div className={`absolute -top-0.5 left-[83px] w-7 h-[28px] bg-[#7209b7] rounded-full transition-all duration-600 delay-500 ${
                isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}></div>
            </div>

            <h1 className={`relative w-full max-w-[900px] [font-family:'Urbanist',Helvetica] font-normal text-transparent text-[80px] text-center leading-[85px] transition-all duration-1200 delay-200 z-40 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <div className="font-semibold text-neutral-900 tracking-[-1.2px] whitespace-nowrap">
                I&apos;m{" "}
                <span className="font-semibold text-[#f72585] tracking-[-1.2px]">
                  Mohammed Hesham
                </span>
              </div>
              <div className="font-semibold text-neutral-900 tracking-[-1.2px] mt-2 flex items-center justify-center gap-2">
                <RotatingText
                  texts={engineerTypes}
                  rotationInterval={3000}
                  staggerDuration={0.05}
                  transition={{ type: "spring", damping: 20, stiffness: 200 }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                />
                <span>Engineer</span>
              </div>
            </h1>
          </div>

          <div className={`absolute top-[200px] left-[-100px] w-[73px] h-[75px] bg-[#4361ee] rounded-xl transition-all duration-800 delay-700 z-5 ${
            isVisible ? 'scale-100 rotate-0 opacity-100' : 'scale-0 rotate-45 opacity-0'
          }`}></div>
        </div>

        <blockquote className={`inline-flex flex-col items-start gap-5 absolute top-[373px] left-[71px] z-30 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
        }`}>
          <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl px-6 py-4 shadow-xl max-w-[320px]">
            <div className="absolute -bottom-2 left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 transform rotate-45"></div>
            <QuoteIcon className={`w-5 h-5 text-white/80 mb-2 transition-all duration-600 delay-600 ${
              isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-180'
            }`} />
            <div className="relative">
              <p className="relative w-fit [font-family:'Lufga-Medium',Helvetica] font-medium text-white text-base tracking-[-0.25px] leading-[1.4]">
                <CustomTypewriter />
              </p>
              <div className={`absolute bottom-1 right-2 flex space-x-1 transition-all duration-300 delay-8000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}>
              </div>
            </div>
          </div>
        </blockquote>

        <div className={`items-end gap-[18px] absolute top-[380px] left-[1200px] inline-flex flex-col z-30 transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}>
          <div className="inline-flex items-start justify-center relative">
            {stars.map((_, index) => (
              <StarIcon
                key={index}
                className={`w-7 h-7 fill-current text-[#4cc9f0] transition-all duration-400 ${
                  isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${800 + index * 100}ms`
                }}
              />
            ))}
          </div>

          <div className="items-end gap-[4px] relative inline-flex flex-col">
            <div className={`relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-neutral-900 text-[40px] text-center tracking-[-0.60px] leading-[40px] whitespace-nowrap transition-all duration-800 delay-900 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
            }`}>
              3 Years
            </div>
            <div className={`relative w-fit [font-family:'Lufga-Regular',Helvetica] font-normal text-neutral-900 text-lg text-center tracking-[-0.25px] leading-5 whitespace-nowrap transition-all duration-600 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              Experience
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-2.5 relative">
          <div className={`absolute top-[150px] left-[83px] w-[690px] h-[345px] bg-gradient-to-r from-[#f72585] via-[#7209b7] to-[#4361ee] rounded-full opacity-20 transition-all duration-1500 delay-200 z-5 ${
            isVisible ? 'scale-100 opacity-20' : 'scale-75 opacity-0'
          }`}></div>

          <div className={`mt-72 relative transition-all duration-1200 delay-400 ${
            isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
          }`}>            
            <div className={`w-[595px] h-[298px] bg-gradient-to-br from-[#f72585] via-[#7209b7] to-[#4361ee] rounded-t-full relative z-5 transition-all duration-1200 delay-600 ${
              isVisible ? 'scale-100 opacity-100 rotate-0' : 'scale-90 opacity-0 rotate-3'
            }`}></div>
            
            <img 
              src="../../../me_mockup_2.png" 
              alt="Mohammed Hesham" 
              className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[400px] h-[500px] object-contain object-bottom z-50 transition-all duration-800 delay-1000 ${
                isVisible ? 'scale-110 opacity-100 translate-y-0' : 'scale-100 opacity-0 translate-y-10'
              }`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};