import { Star as StarIcon } from "lucide-react";
import React from "react";

export const PortfolioSection = (): JSX.Element => {
  const portfolioItems = [
    "UX Design",
    "App Design",
    "Dashboard",
    "Wireframe",
    "User Research",
    "UX Design",
    "App Design",
    "Dashboard",
    "Wireframe",
    "User Research",
    "UX Design",
    "App Design",
    "Dashboard",
    "Wireframe",
    "User Research",
  ];

  return (
    <section className="relative w-full h-[100px] sm:h-[120px] lg:h-[147px] bg-[#f72585] rounded-[15px_0px_15px_0px] sm:rounded-[20px_0px_20px_0px] lg:rounded-[24px_0px_24px_0px] overflow-hidden">
      <div className="inline-flex items-center gap-[10px] sm:gap-[15px] relative top-[-15px] sm:top-[-18px] lg:top-[-22px] -left-3 sm:-left-4 lg:-left-5 bg-white rotate-[-2.50deg] whitespace-nowrap">
        {portfolioItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Lufga-Regular',Helvetica] font-normal text-black text-2xl sm:text-3xl lg:text-5xl tracking-[-0.72px] leading-[normal]">
              {item}
            </div>
            <StarIcon
              className="relative w-[20px] sm:w-[25px] lg:w-[33.97px] h-[20px] sm:h-[25px] lg:h-[33.97px] rotate-[2.50deg] fill-current text-[#f72585]"
            />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};
