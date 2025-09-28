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
      title: "Experience Designer",
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
    <section id="experience" className="flex flex-col items-center px-4 sm:px-8 lg:px-[71px] py-[40px] sm:py-[85px] relative w-full">
      <header className="flex items-center justify-center gap-2.5 px-0 py-[40px] sm:py-[85px] relative w-full">
        <h1 className="relative w-fit mt-[-1.00px] [font-family:'Lufga-Medium',Helvetica] font-normal text-transparent text-[28px] sm:text-[48px] lg:text-[64px] leading-[28px] sm:leading-[48px] lg:leading-[64px] text-center">
          <span className="font-medium text-[#344053] tracking-[-0.61px]">
            My{" "}
          </span>
          <span className="font-medium text-[#f72585] tracking-[-0.61px]">
            Work Experience
          </span>
        </h1>
      </header>

      <div className="flex w-full max-w-[1298px] items-start justify-between relative flex-col lg:flex-row gap-8 lg:gap-0">
        <div className="inline-flex flex-col items-start gap-8 sm:gap-12 lg:gap-[102px] relative w-full lg:w-auto">
          {companies.map((company, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-start gap-2 sm:gap-3.5 relative"
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

        <div className="relative w-full lg:w-auto flex justify-center lg:block">
          <div className="relative h-[250px] sm:h-[300px] lg:h-[402px] w-full max-w-[300px] flex items-center justify-center">
            <div className="w-full h-1 bg-gray-300 rounded-full relative">
              <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#f72585] rounded-full"></div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#4361ee] rounded-full"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#4cc9f0] rounded-full"></div>
            </div>
          </div>
        </div>

        <div className="inline-flex flex-col items-start gap-6 sm:gap-8 lg:gap-12 relative w-full lg:w-auto">
          {roles.map((role, index) => (
            <div
              key={index}
              className="inline-flex flex-col items-start gap-2 sm:gap-3.5 relative"
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