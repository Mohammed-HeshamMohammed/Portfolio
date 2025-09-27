import { ArrowUpRight as ArrowUpRightIcon, Quote as QuoteIcon, Star as StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../components/ui/button";

export const Hero = () => {
  const stars = Array(5).fill(null);

  const scrollToSection = (href: string) => {
    try {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } catch (error) {
      console.error('Error scrolling to section:', error);
    }
  };

  return (
    <section id="home" className="flex flex-col items-center relative w-full h-screen pt-32 overflow-hidden">
      <div className="flex w-full max-w-[1440px] h-full items-end justify-center gap-[71px] relative px-8">
        
        <div className="inline-flex flex-col items-center absolute top-[37px] left-[264px]">
          <div className="inline-flex flex-col items-center gap-2.5 relative">
            <div className="relative w-[127.49px] h-16">
              <div className="h-[45px] gap-[6.37px] px-[25.49px] py-[12.75px] absolute top-[19px] left-[calc(50%_-_64px)] bg-[#ffffff1a] rounded-[38.24px] border-[1.27px] border-solid border-neutral-900 inline-flex items-center justify-center overflow-hidden">
                <span className="relative w-fit mt-[-4.52px] mb-[-1.97px] [font-family:'Lufga-Medium',Helvetica] font-medium text-neutral-900 text-xl tracking-[-0.30px] leading-[normal]">
                  Hello!
                </span>
              </div>
              <div className="absolute -top-0.5 left-[98px] w-8 h-[33px] bg-[#7209b7] rounded-full"></div>
            </div>

            <h1 className="relative w-full max-w-[913px] [font-family:'Urbanist',Helvetica] font-normal text-transparent text-[95.6px] text-center leading-[95.6px]">
              <span className="font-semibold text-neutral-900 tracking-[-1.37px]">
                I&apos;m{" "}
              </span>
              <span className="font-semibold text-[#f72585] tracking-[-1.37px]">
                Jenny
              </span>
              <span className="font-semibold text-neutral-900 tracking-[-1.37px]">
                , Product Designer
              </span>
            </h1>
          </div>

          <div className="absolute top-[236px] left-[31px] w-[86px] h-[88px] bg-[#4361ee] rounded-2xl"></div>
        </div>

        <blockquote className="inline-flex flex-col items-start gap-6 absolute top-[373px] left-[71px] z-50">
          <QuoteIcon className="w-9 h-9 text-[#7209b7]" />
          <p className="relative w-fit [font-family:'Lufga-Medium',Helvetica] font-medium text-[#344053] text-xl tracking-[-0.30px] leading-[normal]">
            Jenny&apos;s Exceptional product design
            <br />
            ensure our website&apos;s success.
            <br />
            Highly Recommended
          </p>
        </blockquote>

        <div className="items-end gap-[21px] absolute top-[380px] left-[1200px] inline-flex flex-col z-50">
          <div className="inline-flex items-start justify-center relative">
            {stars.map((_, index) => (
              <StarIcon
                key={index}
                className="w-8 h-8 fill-current text-[#4cc9f0]"
              />
            ))}
          </div>

          <div className="items-end gap-[5px] relative inline-flex flex-col">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-neutral-900 text-[47px] text-center tracking-[-0.70px] leading-[47px] whitespace-nowrap">
              10 Years
            </div>
            <div className="relative w-fit [font-family:'Lufga-Regular',Helvetica] font-normal text-neutral-900 text-xl text-center tracking-[-0.30px] leading-5 whitespace-nowrap">
              Experience
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-2.5 relative">
          <div className="absolute top-[230px] left-[83px] w-[812px] h-[406px] bg-gradient-to-r from-[#f72585] via-[#7209b7] to-[#4361ee] rounded-full opacity-20"></div>

          <div className="flex w-[calc(100%_-_585px)] h-[82px] items-center justify-center gap-2.5 p-2.5 absolute left-[292px] bottom-[43px] bg-[#ffffff1a] rounded-[50px] overflow-hidden backdrop-blur-[7.5px] z-50">
            <Button 
              className="flex w-52 items-center justify-center px-5 py-2.5 relative bg-[#f72585] rounded-[60px] overflow-hidden border-[0.5px] border-solid border-[#cfd4dc] h-auto hover:bg-[#f72585]/90 transition-all duration-300"
              onClick={() => scrollToSection('#portfolio')}
            >
              <span className="relative w-fit [font-family:'Lufga-Medium',Helvetica] font-medium text-white text-[25.7px] tracking-[-0.39px] leading-[normal]">
                Portfolio
              </span>
              <ArrowUpRightIcon className="w-[42px] h-[42px]" />
            </Button>

            <Button
              variant="ghost"
              className="flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-1 grow rounded-[60px] overflow-hidden h-auto hover:bg-white/10 transition-all duration-300"
              onClick={() => scrollToSection('#contact')}
            >
              <span className="relative w-fit mt-[-1.00px] ml-[-2.50px] mr-[-2.50px] [font-family:'Lufga-Light',Helvetica] font-light text-white text-[25.7px] tracking-[-0.39px] leading-[normal]">
                Hire me
              </span>
            </Button>
          </div>

          <div className="mt-96 relative w-[952.4px] h-[636px] bg-gradient-to-br from-[#f72585] via-[#7209b7] to-[#4361ee] rounded-3xl flex items-center justify-center">
            <div className="w-[400px] h-[400px] bg-white rounded-full flex items-center justify-center">
              <span className="text-[#7209b7] text-8xl font-bold">J</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};