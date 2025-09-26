import React from "react";

export const HeroSection = (): JSX.Element => {
  const companies = [
    {
      name: "Cognizant, Mumbai",
      period: "Sep 2016- July 2020",
    },
    {
      name: "Sugee Pvt limited, Mumbai",
      period: "Sep 2020- July 2023",
    },
    {
      name: "Cinetstox, Mumbai",
      period: "Sep 2023",
    },
  ];

  const roles = [
    {
      title: "Experince Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      title: "UI/UX Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales",
    },
    {
      title: "Lead UX Designer",
      description: null,
    },
  ];

  return (
    <section id="experience" className="flex flex-col min-h-[600px] sm:h-[827px] items-center px-4 sm:px-8 lg:px-[71px] py-0 relative self-stretch w-full">
      <header className="flex items-center justify-center gap-2.5 px-0 py-[40px] sm:py-[85px] relative self-stretch w-full flex-[0_0_auto]">
        <h1 className="relative w-fit mt-[-1.00px] [font-family:'Lufga-Medium',Helvetica] font-normal text-transparent text-[28px] sm:text-[48px] lg:text-[64px] leading-[28px] sm:leading-[48px] lg:leading-[64px] text-center">
          <span className="font-medium text-[#344053] tracking-[-0.61px]">
            My{" "}
          </span>
          <span className="font-medium text-[#f72585] tracking-[-0.61px]">
            Work Experince
          </span>
        </h1>
      </header>

      <div className="flex w-full max-w-[1298px] items-start justify-between relative flex-[0_0_auto] flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="inline-flex flex-col items-start gap-8 sm:gap-12 lg:gap-[102px] relative self-stretch flex-[0_0_auto] w-full lg:w-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-start gap-2 sm:gap-3.5 relative flex-[0_0_auto]"
            >
              <h2 className="relative w-fit mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-[#344053] text-[20px] sm:text-[28px] lg:text-[40px] tracking-[-0.60px] leading-6 sm:leading-8 lg:leading-10">
                {company.name}
              </h2>
              <p className="relative w-fit [font-family:'Lufga-Regular',Helvetica] font-normal text-[#98a1b2] text-sm sm:text-lg lg:text-2xl tracking-[-0.36px] leading-4 sm:leading-5 lg:leading-6">
                {company.period}
              </p>
            </div>
          ))}
        </div>

        <div className="relative flex-[0_0_auto] w-full lg:w-auto flex justify-center lg:block">
          <img
            className="relative h-[250px] sm:h-[300px] lg:h-[402px] w-auto object-cover rounded-2xl"
            alt="Work experience"
            src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
          />
        </div>

        <div className="inline-flex flex-col items-start gap-6 sm:gap-8 lg:gap-12 relative flex-[0_0_auto] w-full lg:w-auto">
          {roles.map((role, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-start gap-2 sm:gap-3.5 relative flex-[0_0_auto]"
            >
              <h3 className="relative w-fit mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-[#344053] text-[20px] sm:text-[28px] lg:text-[40px] tracking-[-0.60px] leading-6 sm:leading-8 lg:leading-10">
                {role.title}
              </h3>
              {role.description && (
                <p className="relative w-full max-w-[444px] [font-family:'Lufga-Medium',Helvetica] font-medium text-[#98a1b2] text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal]">
                  {role.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
