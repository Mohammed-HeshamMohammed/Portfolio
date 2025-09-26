import React from "react";
import { Button } from "../../../../components/ui/button";

export const ExperienceSection = (): JSX.Element => {
  const statistics = [
    {
      number: "450+",
      label: "Project Completed",
    },
    {
      number: "450+",
      label: "Project Completed",
    },
  ];

  return (
    <section className="flex flex-col min-h-[600px] sm:h-[806px] items-center justify-center gap-12 sm:gap-24 px-4 sm:px-8 lg:px-[71px] py-[60px] sm:py-[122px] relative self-stretch w-full bg-[#f2f3f6] rounded-[25px] sm:rounded-[50px] overflow-hidden">
      <div className="flex w-full max-w-[1299px] min-h-[400px] sm:h-[600px] items-center justify-between relative flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:w-[603px] h-[300px] sm:h-[400px] lg:h-[600px] bg-gradient-to-br from-[#f72585] via-[#7209b7] to-[#4361ee] rounded-2xl sm:rounded-3xl flex items-center justify-center">
          <div className="w-[150px] sm:w-[200px] lg:w-[300px] h-[150px] sm:h-[200px] lg:h-[300px] bg-white rounded-full flex items-center justify-center">
            <span className="text-[#7209b7] text-2xl sm:text-4xl lg:text-6xl font-bold text-center">Why Me?</span>
          </div>
        </div>

        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[47px] relative flex-1 grow w-full lg:w-auto">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-transparent text-[28px] sm:text-[48px] lg:text-[64px] tracking-[-0.96px] leading-[28px] sm:leading-[48px] lg:leading-[64px] text-center lg:text-left">
              <span className="text-[#344053] tracking-[-0.61px]">Why </span>
              <span className="text-[#f72585] tracking-[-0.61px]">Hire me</span>
              <span className="text-[#344053] tracking-[-0.61px]">?</span>
            </h2>
          </div>

          <p className="w-full max-w-[444px] [font-family:'Lufga-Regular',Helvetica] font-normal text-[#98a1b2] relative text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal] text-center lg:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus
            nunc, posuere in justo vulputate, bibendum sodales
          </p>

          <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto] flex-col sm:flex-row">
            {statistics.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start gap-2.5 relative flex-1 grow text-center lg:text-left"
              >
                <div className="relative w-fit mt-[-1.00px] [font-family:'Lufga-Medium',Helvetica] font-medium text-[#1d2838] text-2xl sm:text-3xl lg:text-4xl tracking-[-0.54px] leading-[normal]">
                  {stat.number}
                </div>
                <div className="relative w-fit [font-family:'Lufga-Regular',Helvetica] font-normal text-[#667084] text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-12 lg:px-[59px] py-4 sm:py-6 lg:py-[33px] relative flex-[0_0_auto] rounded-[20px] sm:rounded-[25px] lg:rounded-[32px] border border-solid border-[#151515] bg-transparent hover:bg-[#151515] hover:text-white h-auto mx-auto lg:mx-0"
          >
            <span className="relative w-fit mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-[#151515] text-lg sm:text-2xl lg:text-[32px] tracking-[-0.48px] leading-[normal]">
              Hire me
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
