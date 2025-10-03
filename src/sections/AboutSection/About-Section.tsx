import React from "react";
import { WavyBackground } from "../../components/bg/wave-animation";

export const AboutSection = (): JSX.Element => {
  const [isVisible, setIsVisible] = React.useState(false);
  const sectionRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div className="relative w-full max-w-[1400px] mx-auto">
      <section
        ref={sectionRef}
        id="about"
        className={`px-4 sm:px-8 lg:px-[71px] py-[96px] sm:py-[128px] min-h-[500px] relative w-full rounded-[20px] sm:rounded-[40px] overflow-hidden transition-all duration-900 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Static glassy layer + waves behind content */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[20px] sm:rounded-[40px] pointer-events-none">
          <WavyBackground
            fullHeight={false}
            className="absolute inset-0"
            containerClassName="w-full h-full"
            backgroundFill="rgba(10,10,12,0.35)"
            blur={14}
            speed="fast"
            waveOpacity={0.6}
          />
        </div>

        {/* content wrapper above waves */}
        <div className="relative z-10 bg-[rgba(4,4,6,0.5)] backdrop-blur-sm shadow-[0_14px_40px_rgba(0,0,0,0.45)] w-full h-full rounded-[20px] sm:rounded-[40px]">
        {/* Header (stays full width on top) */}
        <header
          className={`flex flex-col items-center gap-3 mb-12 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h2 className="relative w-fit [font-family:'Lufga-Medium',Helvetica] font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight text-center">
            <span className="text-[#fbfcfc] tracking-[-0.35px]">About{" "}</span>
            <span className="text-[#f72585] tracking-[-0.35px]">Me</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#d0d0d0] tracking-wide">
            I turn ideas into memorable digital experiences that customers love.
          </p>
        </header>

  {/* Three-column layout: left | center(circle) | right */}
        <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 items-start">
          {/* LEFT */}
          <div
            className={`order-1 md:order-1 px-2 md:px-0 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
            }`}
          >
            <p className="[font-family:'Lufga-Medium',Helvetica] font-medium text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-5">
              I help businesses turn ideas into impactful digital experiences that customers remember.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-[#f72585] mt-1 text-[10px] sm:text-xs">●</span>
                <span className="[font-family:'Lufga-Medium',Helvetica] font-medium text-white text-sm sm:text-base leading-snug">
                  Design that speaks directly to your audience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f72585] mt-1 text-[10px] sm:text-xs">●</span>
                <span className="[font-family:'Lufga-Medium',Helvetica] font-medium text-white text-sm sm:text-base leading-snug">
                  Websites that feel fast, modern, and alive
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f72585] mt-1 text-[10px] sm:text-xs">●</span>
                <span className="[font-family:'Lufga-Medium',Helvetica] font-medium text-white text-sm sm:text-base leading-snug">
                  Solutions built for growth — measurable outcomes, not vanity
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#f72585] mt-1 text-[10px] sm:text-xs">●</span>
                <span className="[font-family:'Lufga-Medium',Helvetica] font-medium text-white text-sm sm:text-base leading-snug">
                  A partner focused on results and long-term value
                </span>
              </li>
            </ul>
          </div>

          {/* CENTER (circle) */}
          <div
            className={`order-3 md:order-2 flex justify-center items-start md:items-center transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[300px] lg:h-[300px] rounded-full bg-white flex items-center justify-center shadow-[0_0_70px_rgba(247,37,133,0.28)] overflow-hidden pointer-events-none">
              <img
                src="../../../me_mockup_1.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`order-2 md:order-3 px-2 md:px-0 transition-all duration-700 delay-800 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
          >
            <p className="[font-family:'Lufga-Medium',Helvetica] font-medium text-white text-sm sm:text-base lg:text-lg leading-relaxed">
              Every project I take on is more than just design or code — it’s about crafting an experience that connects with people and drives real results for your business.
            </p>

            <p className="[font-family:'Lufga-Medium',Helvetica] font-medium text-[#d0d0d0] text-sm sm:text-base leading-relaxed mt-4">
              Whether you need a refreshed brand, a website that converts, or a product that stands out — I’ll help you make it happen.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="mailto:mohamedhms3102@gmail.com"
                className="inline-block rounded-full px-5 py-2 text-sm sm:text-base font-medium bg-[#f72585] text-white shadow-[0_6px_18px_rgba(247,37,133,0.25)] hover:-translate-y-0.5 transition-transform"
                aria-label="Email Mohammed"
              >
                Let’s talk
              </a>

              <a
                href="https://github.com/Mohammed-HeshamMohammed"
                target="_blank"
                rel="noreferrer"
                className="text-sm sm:text-base text-[#cfcfcf] underline"
                aria-label="GitHub profile"
              >
                View work
              </a>
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};
