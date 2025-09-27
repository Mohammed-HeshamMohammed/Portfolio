import { ArrowUpRight as ArrowUpRightIcon, Quote as QuoteIcon, Star as StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export const ServicesSection = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: "Home", active: true, href: "#hero" },
    { label: "About", active: false, href: "#about" },
    { label: "Service", active: false, href: "#services" },
    { label: "Resume", active: false, href: "#experience" },
    { label: "Project", active: false, href: "#portfolio" },
    { label: "Contact", active: false, href: "#contact" },
  ];

  const stars = Array(5).fill(null);

  function scrollToSection(_arg0: string): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section className="flex flex-col items-center relative w-full px-4 sm:px-8 lg:px-0">
      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex w-full max-w-[1298px] h-auto sm:h-[86px] items-center justify-between px-2.5 py-2 sm:py-0 rounded-[25px] sm:rounded-[50px] border border-white/10 transition-all duration-500 ${
        isScrolled 
          ? 'bg-neutral-900/95 backdrop-blur-xl shadow-2xl scale-95' 
          : 'bg-neutral-900/80 backdrop-blur-xl hover:bg-neutral-900/90'
      }`}>
        {/* Mobile menu button */}
        <button
          className="sm:hidden flex items-center justify-center w-10 h-10 rounded-full bg-[#f72585] text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="text-lg">☰</span>
        </button>

        {/* Navigation items */}
        <div className={`${isMenuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row absolute sm:relative top-full sm:top-auto left-0 sm:left-auto w-full sm:w-auto bg-neutral-900/95 sm:bg-transparent rounded-b-[25px] sm:rounded-none p-4 sm:p-0 gap-2 z-10`}>
        {navigationItems.map((item, _index) => (
          <Button
            key={item.label}
            variant="ghost"
            className={`inline-flex items-center justify-center gap-1 sm:gap-2.5 px-3 sm:px-6 lg:px-10 py-2 sm:py-3 lg:py-5 relative flex-[0_0_auto] rounded-[30px] sm:rounded-[60px] overflow-hidden h-auto text-sm sm:text-base lg:text-xl transition-all duration-300 ${
              item.active ? "bg-[#f72585]" : ""
            } hover:bg-[#f72585]/80`}
            onClick={() => {
              const element = document.querySelector(item.href);
              element?.scrollIntoView({ behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            <span
              className={`relative w-fit mt-[-1.00px] tracking-[-0.30px] leading-[normal] ${
                item.active
                  ? "[font-family:'Lufga-Bold',Helvetica] font-bold text-[#ffffff]"
                  : "[font-family:'Lufga-Regular',Helvetica] font-normal text-white"
              }`}
            >
              {item.label}
            </span>
          </Button>
        ))}
        </div>

        <div className="flex w-auto sm:w-[200px] lg:w-[307px] h-auto sm:h-[86px] items-center justify-center gap-2.5 px-3 sm:px-6 lg:px-10 py-2 sm:py-5 relative rounded-[30px] sm:rounded-[60px] overflow-hidden transition-all duration-300 hover:bg-white/5">
          <div className="relative w-[46px] h-[46px] bg-[#f72585] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">J</span>
          </div>
          <span className="text-white font-bold text-lg sm:text-xl hidden sm:block">Jenny</span>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-[100px] sm:h-[110px] w-full"></div>

      <div className="flex w-full max-w-[1440px] min-h-[600px] sm:h-[846px] items-end justify-center gap-4 sm:gap-[71px] relative px-4 sm:px-8">
        <div className="inline-flex flex-col items-center absolute top-[20px] sm:top-[37px] left-1/2 transform -translate-x-1/2 sm:left-[264px] sm:transform-none">
          <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[100px] sm:w-[127.49px] h-12 sm:h-16">
              <div className="h-[35px] sm:h-[45px] gap-[6.37px] px-[15px] sm:px-[25.49px] py-[8px] sm:py-[12.75px] absolute top-[15px] sm:top-[19px] left-[calc(50.00%_-_50px)] sm:left-[calc(50.00%_-_64px)] bg-[#ffffff1a] rounded-[25px] sm:rounded-[38.24px] border-[1.27px] border-solid border-neutral-900 inline-flex items-center justify-center overflow-hidden">
                <span className="relative w-fit mt-[-4.52px] mb-[-1.97px] [font-family:'Lufga-Medium',Helvetica] font-medium text-neutral-900 text-sm sm:text-xl tracking-[-0.30px] leading-[normal]">
                  Hello!
                </span>
              </div>
              <div className="absolute -top-0.5 left-[78px] sm:left-[98px] w-6 sm:w-8 h-[25px] sm:h-[33px] bg-[#7209b7] rounded-full"></div>
            </div>

            <h1 className="relative w-full max-w-[320px] sm:max-w-[600px] lg:max-w-[913px] [font-family:'Urbanist',Helvetica] font-normal text-transparent text-[28px] sm:text-[48px] lg:text-[95.6px] text-center leading-[28px] sm:leading-[48px] lg:leading-[95.6px] px-4">
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

          <div className="absolute top-[150px] sm:top-[236px] left-[10px] sm:left-[31px] w-[50px] sm:w-[86px] h-[52px] sm:h-[88px] bg-[#4361ee] rounded-xl sm:rounded-2xl"></div>
        </div>

        <blockquote className="inline-flex flex-col items-start gap-3 sm:gap-6 absolute top-[300px] sm:top-[373px] left-4 sm:left-[71px] max-w-[280px] sm:max-w-none">
          <QuoteIcon className="w-6 sm:w-9 h-6 sm:h-9 text-[#7209b7]" />
          <p className="relative w-fit [font-family:'Lufga-Medium',Helvetica] font-medium text-[#344053] text-sm sm:text-xl tracking-[-0.30px] leading-[normal]">
            Jenny&apos;s Exceptional product design
            <br />
            ensure our website&apos;s success.
            <br />
            Highly Recommended
          </p>
        </blockquote>

        <div className="items-end gap-3 sm:gap-[21px] absolute top-[300px] sm:top-[380px] right-4 sm:right-[71px] lg:left-[1200px] inline-flex flex-col">
          <div className="inline-flex items-start justify-center relative flex-[0_0_auto]">
            {stars.map((_, index) => (
              <StarIcon
                key={index}
                className="w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 fill-current text-[#4cc9f0]"
              />
            ))}
          </div>

          <div className="items-end gap-[5px] relative flex-[0_0_auto] inline-flex flex-col">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Urbanist',Helvetica] font-bold text-neutral-900 text-[24px] sm:text-[32px] lg:text-[47px] text-center tracking-[-0.70px] leading-[24px] sm:leading-[32px] lg:leading-[47px] whitespace-nowrap">
              10 Years
            </div>
            <div className="relative w-fit [font-family:'Lufga-Regular',Helvetica] font-normal text-neutral-900 text-sm sm:text-lg lg:text-xl text-center tracking-[-0.30px] leading-5 whitespace-nowrap">
              Experience
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="absolute top-[150px] sm:top-[230px] left-[20px] sm:left-[83px] w-[300px] sm:w-[500px] lg:w-[812px] h-[200px] sm:h-[300px] lg:h-[406px] bg-gradient-to-r from-[#f72585] via-[#7209b7] to-[#4361ee] rounded-full opacity-20"></div>

          <div className="flex w-full max-w-[300px] sm:max-w-[400px] lg:w-[calc(100%_-_585px)] h-auto sm:h-[82px] items-center justify-center gap-2.5 p-2.5 absolute left-1/2 transform -translate-x-1/2 sm:left-[292px] sm:transform-none bottom-[20px] sm:bottom-[43px] bg-[#ffffff1a] rounded-[25px] sm:rounded-[50px] overflow-hidden backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] flex-col sm:flex-row">
            <Button 
              className="flex w-full sm:w-52 items-center justify-center px-5 py-2.5 relative bg-[#f72585] rounded-[30px] sm:rounded-[60px] overflow-hidden border-[0.5px] border-solid border-[#cfd4dc] h-auto hover:bg-[#f72585]/90"
              onClick={() => scrollToSection('#portfolio')}
            >
              <span className="relative w-fit [font-family:'Lufga-Medium',Helvetica] font-medium text-white text-[18px] sm:text-[25.7px] tracking-[-0.39px] leading-[normal]">
                Portfolio
              </span>
              <ArrowUpRightIcon className="w-[24px] sm:w-[42px] h-[24px] sm:h-[42px]" />
            </Button>

            <Button
              variant="ghost"
              className="flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-1 grow rounded-[30px] sm:rounded-[60px] overflow-hidden h-auto"
            >
              <span className="relative w-fit mt-[-1.00px] ml-[-2.50px] mr-[-2.50px] [font-family:'Lufga-Light',Helvetica] font-light text-white text-[18px] sm:text-[25.7px] tracking-[-0.39px] leading-[normal]">
                Hire me
              </span>
            </Button>
          </div>

          <div className="absolute -top-6 left-[-35px] w-[1018px] h-[688px]">
            <img
              className="absolute top-[325px] left-[-1140px] w-[161px] h-[139px]"
              alt="Group"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[178px] h-[100px]"
              alt="Group"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[136px] h-[140px]"
              alt="Group"
            />

            <div className="w-[calc(100%_-_651px)] left-[327px] bottom-[71px] flex h-[82px] items-center justify-center gap-2.5 p-2.5 absolute bg-[#ffffff1a] rounded-[50px] overflow-hidden backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)]">
              <Button className="flex w-52 items-center justify-center px-5 py-2.5 relative bg-[#f72585] rounded-[60px] overflow-hidden border-[0.5px] border-solid border-[#cfd4dc] h-auto hover:bg-[#f72585]/90">
                <span className="relative w-fit [font-family:'Lufga-Medium',Helvetica] font-medium text-white text-[25.7px] tracking-[-0.39px] leading-[normal]">
                  Portfolio
                </span>
                <ArrowUpRightIcon className="w-[42px] h-[42px]" />
              </Button>

              <Button
                variant="ghost"
                className="flex items-center justify-center gap-2.5 px-5 py-2.5 relative flex-1 grow rounded-[60px] overflow-hidden h-auto"
              >
                <span className="relative w-fit mt-[-1.00px] ml-[-2.50px] mr-[-2.50px] [font-family:'Lufga-Light',Helvetica] font-light text-white text-[25.7px] tracking-[-0.39px] leading-[normal]">
                  Hire me
                </span>
              </Button>
            </div>

            <img
              className="absolute top-[325px] left-[-1140px] w-[93px] h-[211px]"
              alt="Vector"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-52 h-[94px]"
              alt="Group"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[223px] h-[157px]"
              alt="Group"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[84px] h-[98px]"
              alt="Vector"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[200px] h-[43px]"
              alt="Group"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[149px] h-[68px]"
              alt="Vector"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[57px] h-32"
              alt="Vector"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[49px] h-[43px]"
              alt="Vector"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[49px] h-[43px]"
              alt="Vector"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[49px] h-[43px]"
              alt="Vector"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[187px] h-[55px]"
              alt="Vector"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-32 h-[74px]"
              alt="Vector"
            />
            <img
              className="absolute top-[468px] left-96 w-7 h-6"
              alt="Vector"
              src="/vector.svg"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-7 h-6"
              alt="Vector"
            />
            <img
              className="absolute top-[567px] left-[644px] w-7 h-6"
              alt="Vector"
              src="/vector.svg"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[154px] h-[102px]"
              alt="Group"
            />
            <img
              className="absolute top-[325px] left-[-1140px] w-[99px] h-[84px]"
              alt="Vector"
            />
          </div>

          <div className="relative w-[280px] sm:w-[500px] lg:w-[952.4px] h-[300px] sm:h-[400px] lg:h-[636px] bg-gradient-to-br from-[#f72585] via-[#7209b7] to-[#4361ee] rounded-2xl sm:rounded-3xl flex items-center justify-center">
            <div className="w-[150px] sm:w-[250px] lg:w-[400px] h-[150px] sm:h-[250px] lg:h-[400px] bg-white rounded-full flex items-center justify-center">
              <span className="text-[#7209b7] text-4xl sm:text-6xl lg:text-8xl font-bold">J</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
