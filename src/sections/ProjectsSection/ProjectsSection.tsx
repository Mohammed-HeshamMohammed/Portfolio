import { ArrowUpRight as ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

export const ProjectsSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const serviceCards = [
    [
      {
        title: "UI/UX Design",
        description: "Creating intuitive and beautiful user experiences",
        gradient: "from-[#f72585] to-[#7209b7]",
        icon: "🎨"
      },
      {
        title: "Web Development",
        description: "Building responsive and modern web applications",
        gradient: "from-[#7209b7] to-[#3a0ca3]",
        icon: "💻"
      },
      {
        title: "Mobile Apps",
        description: "Developing cross-platform mobile solutions",
        gradient: "from-[#4361ee] to-[#4cc9f0]",
        icon: "📱"
      },
    ],
    [
      {
        title: "Brand Identity",
        description: "Crafting memorable brand experiences and visual identity",
        gradient: "from-[#4cc9f0] to-[#f72585]",
        icon: "✨"
      },
      {
        title: "E-commerce",
        description: "Building powerful online stores and shopping experiences",
        gradient: "from-[#3a0ca3] to-[#4361ee]",
        icon: "🛒"
      },
      {
        title: "Consulting",
        description: "Strategic design and development consultation services",
        gradient: "from-[#7209b7] to-[#4cc9f0]",
        icon: "💡"
      },
    ],
    [
      {
        title: "Animation",
        description: "Creating engaging motion graphics and animations",
        gradient: "from-[#f72585] to-[#4361ee]",
        icon: "🎬"
      },
      {
        title: "SEO Optimization",
        description: "Improving search engine visibility and performance",
        gradient: "from-[#4361ee] to-[#7209b7]",
        icon: "📈"
      },
      {
        title: "Maintenance",
        description: "Ongoing support and maintenance for digital products",
        gradient: "from-[#4cc9f0] to-[#3a0ca3]",
        icon: "🔧"
      },
    ],
    [
      {
        title: "Photography",
        description: "Professional product and lifestyle photography services",
        gradient: "from-[#7209b7] to-[#f72585]",
        icon: "📸"
      },
      {
        title: "Content Strategy",
        description: "Developing comprehensive content strategies and planning",
        gradient: "from-[#3a0ca3] to-[#4cc9f0]",
        icon: "📝"
      },
      {
        title: "Analytics",
        description: "Data-driven insights and performance optimization",
        gradient: "from-[#4361ee] to-[#f72585]",
        icon: "📊"
      },
    ],
  ];

  const currentCards = serviceCards[currentSlide];

  return (
    <section id="services" className="flex flex-col items-center gap-12 sm:gap-24 px-4 sm:px-8 lg:px-[71px] py-[60px] sm:py-[116px] relative w-full rounded-[25px] sm:rounded-[50px] bg-[linear-gradient(0deg,rgba(23,23,23,1)_0%,rgba(23,23,23,1)_100%)]">
      <div className="absolute w-full top-[20px] sm:top-[50px] left-0 h-full pointer-events-none">
        <div className="absolute top-[100px] sm:top-[146px] right-4 sm:right-[100px] lg:left-[954px] w-[200px] sm:w-[300px] lg:w-[486px] h-[300px] sm:h-[500px] lg:h-[682px] bg-gradient-to-br from-[#f72585] via-[#7209b7] to-[#4361ee] rounded-2xl sm:rounded-3xl opacity-30"></div>
        <div className="top-4 left-1/2 transform -translate-x-1/2 sm:left-[522px] sm:transform-none w-[150px] sm:w-[200px] lg:w-[261px] h-[150px] sm:h-[200px] lg:h-[261px] blur-[2.5px] absolute bg-gradient-to-br from-[#4cc9f0] to-[#4361ee] rounded-full opacity-40"></div>
        <div className="top-0 left-0 w-[200px] sm:w-[300px] lg:w-[409px] h-[250px] sm:h-[400px] lg:h-[597px] blur-[1.5px] absolute bg-gradient-to-br from-[#7209b7] to-[#3a0ca3] rounded-2xl sm:rounded-3xl opacity-20"></div>
      </div>

      <header className="flex w-full max-w-[1299px] items-end justify-between relative flex-col sm:flex-row gap-4 sm:gap-0 z-10">
        <h2 className="relative w-fit [font-family:'Lufga-Medium',Helvetica] font-normal text-transparent text-2xl sm:text-4xl lg:text-5xl leading-[32px] sm:leading-[40px] lg:leading-[48px] text-center sm:text-left">
          <span className="font-medium text-[#fbfcfc] tracking-[-0.35px]">
            My{" "}
          </span>
          <span className="font-medium text-[#f72585] tracking-[-0.35px]">
            Services
          </span>
        </h2>

        <p className="w-full sm:w-[400px] lg:w-[576px] mt-[-1.00px] [font-family:'Lufga-Medium',Helvetica] font-medium text-white text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal] text-center sm:text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
          nunc, posuere in justo vulputate, bibendum sodales
        </p>
      </header>

      <div className="inline-flex flex-col items-center gap-6 sm:gap-[39px] relative w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1299px] px-4">
          {currentCards.map((card, index) => (
            <div
              key={index}
              className={`inline-flex flex-col items-center justify-center gap-4 sm:gap-6 relative w-full h-[300px] sm:h-[400px] lg:h-[508px] bg-gradient-to-br ${card.gradient} rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-500 hover:scale-105`}
            >
              <div className="w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#7209b7]">{card.icon}</span>
              </div>
              <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold text-center">{card.title}</h3>
              <p className="text-white/80 text-sm sm:text-base lg:text-lg text-center">{card.description}</p>

              <Button
                className="flex w-[60px] sm:w-[80px] lg:w-[114px] h-[60px] sm:h-[80px] lg:h-[114px] items-center justify-center gap-2.5 p-[12px] sm:p-[16px] lg:p-[21px] absolute bottom-2 sm:bottom-3 lg:bottom-4 right-2 sm:right-3 lg:right-4 bg-white/20 rounded-[30px] sm:rounded-[40px] lg:rounded-[57px] hover:bg-white/40 transition-all duration-300"
                variant="ghost"
              >
                <ArrowUpRightIcon className="relative flex-1 self-stretch grow text-white w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
              </Button>
            </div>
          ))}
        </div>

        <nav
          className="inline-flex items-start gap-2 sm:gap-[11.31px] relative"
          aria-label="Services pagination"
        >
          {serviceCards.map((_, index) => (
            <div
              key={index}
              className={`relative h-[12px] sm:h-[15.08px] rounded-[15px] sm:rounded-[20.74px] transition-all duration-300 cursor-pointer ${
                index === currentSlide 
                  ? "w-[40px] sm:w-[60.32px] bg-[#f72585]" 
                  : "w-[12px] sm:w-[15.08px] bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </nav>
      </div>
    </section>
  );
};