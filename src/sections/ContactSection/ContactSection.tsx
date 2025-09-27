import { ArrowUpRight as ArrowUpRightIcon, Facebook as FacebookIcon, Instagram as InstagramIcon, MessageCircle as MessageCircleIcon, Send as SendIcon, Twitter as TwitterIcon, Youtube as YoutubeIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Separator } from "../../../../components/ui/separator";

const navigationLinks = ["Home", "About Us", "Service", "Resume", "Project"];

const contactInfo = [
  "+20 11 43 63 73 41",
  "fawzisayed1209@gmail.com",
  "fawziuiux.com",
];

const socialIcons = [
  { icon: FacebookIcon, alt: "Facebook" },
  { icon: YoutubeIcon, alt: "YouTube" },
  { icon: MessageCircleIcon, alt: "WhatsApp" },
  { icon: InstagramIcon, alt: "Instagram" },
  { icon: TwitterIcon, alt: "Twitter" },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section id="contact" className="flex flex-col min-h-[500px] sm:h-[685px] items-start justify-between px-4 sm:px-8 lg:px-[71px] py-[25px] relative self-stretch w-full mb-[-40.00px] bg-[#272727] rounded-[15px_15px_0px_0px] sm:rounded-[20px_20px_0px_0px] lg:rounded-[24px_24px_0px_0px] overflow-hidden">
      <header className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto] flex-col sm:flex-row gap-4 sm:gap-0">
        <h1 className="relative flex items-center justify-center w-full sm:w-[643px] h-auto sm:h-[150px] mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-[#fbfcfc] text-[28px] sm:text-[48px] lg:text-[64px] tracking-[-0.96px] leading-[normal] text-center sm:text-left">
          Lets Connect there
        </h1>

        <Button 
          className="flex w-full sm:w-[202px] items-center justify-center px-5 py-2.5 relative bg-[#f72585] rounded-[30px] sm:rounded-[45px] lg:rounded-[60px] overflow-hidden h-auto hover:bg-[#f72585]/90"
          onClick={() => {
            const element = document.querySelector('#contact');
            element?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <span className="relative w-fit [font-family:'Lufga-Medium',Helvetica] font-medium text-white text-[18px] sm:text-[22px] lg:text-[25.7px] tracking-[-0.39px] leading-[normal]">
            Hire me
          </span>

          <ArrowUpRightIcon className="relative w-[24px] sm:w-[32px] lg:w-[42px] h-[24px] sm:h-[32px] lg:h-[42px]" />
        </Button>
      </header>

      <Separator className="relative self-stretch w-full h-0.5 ml-[-1.00px] mr-[-1.00px] bg-white/20" />

      <main className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="inline-flex flex-col h-auto lg:h-[239px] items-start justify-between relative flex-[0_0_auto] w-full lg:w-auto gap-4 lg:gap-0">
          <div className="w-full sm:w-[307px] h-auto sm:h-[86px] px-0 py-5 relative rounded-[30px] sm:rounded-[45px] lg:rounded-[60px] overflow-hidden flex items-center gap-2.5 justify-center sm:justify-start">
            <div className="relative w-[46px] h-[46px] bg-[#f72585] rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">J</span>
            </div>
            <span className="text-white font-bold text-lg sm:text-xl">Jenny</span>
          </div>

          <p className="flex items-center justify-center w-full max-w-[635px] h-auto [font-family:'Lufga-Regular',Helvetica] font-normal text-[#fbfcfc] relative text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal] text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>

          <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto] justify-center lg:justify-start">
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <IconComponent
                  key={`social-${index}`}
                  className="relative w-5 sm:w-6 h-5 sm:h-6 text-white cursor-pointer hover:text-[#f72585] transition-colors"
                />
              );
            })}
          </div>
        </div>

        <nav className="items-start gap-4 sm:gap-7 relative flex-[0_0_auto] inline-flex flex-col text-center lg:text-left">
          <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-[#f72585] text-lg sm:text-xl tracking-[-0.30px] leading-[normal]">
            Navigation
          </h2>

          <ul className="inline-flex flex-col items-center lg:items-start gap-3 sm:gap-5 relative flex-[0_0_auto]">
            {navigationLinks.map((link, index) => (
              <li key={`nav-${index}`}>
                <a
                  href="#"
                  className="[font-family:'Lufga-Regular',Helvetica] font-normal text-[#fbfcfc] text-sm sm:text-base tracking-[-0.24px] relative flex items-center justify-center w-fit mt-[-1.00px] leading-[normal] hover:text-[#f72585] transition-colors cursor-pointer"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="items-start gap-4 sm:gap-7 relative flex-[0_0_auto] inline-flex flex-col text-center lg:text-left">
          <h2 className="[font-family:'Lufga-SemiBold',Helvetica] font-semibold text-[#f72585] text-lg sm:text-xl tracking-[-0.30px] relative flex items-center justify-center w-fit mt-[-1.00px] leading-[normal]">
            Contact
          </h2>

          <div className="inline-flex flex-col items-center lg:items-start gap-3 sm:gap-5 relative flex-[0_0_auto]">
            {contactInfo.map((info, index) => (
              <a
                key={`contact-${index}`}
                href={
                  index === 0
                    ? `tel:${info}`
                    : index === 1
                      ? `mailto:${info}`
                      : `https://${info}`
                }
                className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Roboto',Helvetica] font-normal text-[#fbfcfc] text-sm sm:text-base tracking-[-0.24px] leading-[normal] hover:text-[#f72585] transition-colors cursor-pointer"
              >
                {info}
              </a>
            ))}
          </div>
        </div>

        <div className="items-start gap-4 sm:gap-7 relative flex-[0_0_auto] inline-flex flex-col text-center lg:text-left">
          <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-[#f72585] text-lg sm:text-xl tracking-[-0.30px] leading-[normal]">
          </h2>
          <h2 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-[#f72585] text-xl tracking-[-0.30px] leading-[normal]">
            Get the latest information
          </h2>

          <div className="flex w-full max-w-[304px] items-start relative flex-[0_0_auto]">
            <Input
              placeholder="Email Address"
              className="flex flex-1 h-[40px] sm:h-[51px] items-center gap-2.5 px-3.5 py-[10px] sm:py-[13px] relative bg-white rounded-[10px_0px_0px_10px] sm:rounded-[14px_0px_0px_14px] overflow-hidden border-0 [font-family:'Lufga-Regular',Helvetica] font-normal text-black text-sm sm:text-base tracking-[-0.24px] leading-[normal] focus-visible:ring-0"
            />

            <Button className="flex w-[40px] sm:w-[46px] h-[40px] sm:h-[51px] items-center justify-center gap-2.5 px-2 py-2.5 relative bg-[#f72585] rounded-[0px_10px_10px_0px] sm:rounded-[0px_14px_14px_0px] overflow-hidden hover:bg-[#f72585]/90">
              <SendIcon className="relative w-4 sm:w-6 h-4 sm:h-6" />
            </Button>
          </div>
        </div>
      </main>

      <Separator className="relative self-stretch w-full h-0.5 ml-[-1.00px] mr-[-1.00px] bg-white/20" />

      <footer className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto] flex-col sm:flex-row gap-4 sm:gap-0 text-center sm:text-left">
        <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-normal text-white text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal]">
          Copyright© 2023 Fawziuiux. All Rights Reserved.
        </p>

        <p className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Lufga-Regular',Helvetica] font-normal text-white text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal]">
          User Terms &amp; Conditions | Privacy Policy
        </p>
      </footer>
    </section>
  );
};
