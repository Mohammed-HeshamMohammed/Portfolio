import { ArrowUpRight as ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const WhyHireMeSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const portfolioCards = [
    [
      {
        title: "Lirante Food App",
        category: "Mobile App",
        backgroundImage: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "HealthCare Dashboard",
        category: "Dashboard",
        backgroundImage: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "EduLearn Platform",
        category: "Landing Page",
        backgroundImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "TravelMate App",
        category: "Mobile App",
        backgroundImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "FinanceFlow Web",
        category: "Dashboard",
        backgroundImage: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "ShopEase Store",
        category: "E-commerce",
        backgroundImage: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    [
      {
        title: "WorkSpace Pro",
        category: "Dashboard",
        backgroundImage: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "FitTracker Mobile",
        category: "Mobile App",
        backgroundImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Creative Portfolio",
        category: "Landing Page",
        backgroundImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Restaurant Menu",
        category: "Cards",
        backgroundImage: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Music Player UI",
        category: "Mobile App",
        backgroundImage: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Blog Platform",
        category: "Landing Page",
        backgroundImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    [
      {
        title: "Banking App",
        category: "Mobile App",
        backgroundImage: "https://images.pexels.com/photos/3184293/pexels-photo-3184293.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Analytics Dashboard",
        category: "Dashboard",
        backgroundImage: "https://images.pexels.com/photos/3184294/pexels-photo-3184294.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Event Landing",
        category: "Landing Page",
        backgroundImage: "https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Product Cards",
        category: "Cards",
        backgroundImage: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Social Media App",
        category: "Mobile App",
        backgroundImage: "https://images.pexels.com/photos/3184297/pexels-photo-3184297.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Corporate Website",
        category: "Landing Page",
        backgroundImage: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
    [
      {
        title: "Gaming Interface",
        category: "UI Design",
        backgroundImage: "https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Weather App",
        category: "Mobile App",
        backgroundImage: "https://images.pexels.com/photos/3184300/pexels-photo-3184300.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Startup Landing",
        category: "Landing Page",
        backgroundImage: "https://images.pexels.com/photos/3184301/pexels-photo-3184301.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Profile Cards",
        category: "Cards",
        backgroundImage: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "CRM Dashboard",
        category: "Dashboard",
        backgroundImage: "https://images.pexels.com/photos/3184303/pexels-photo-3184303.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
      {
        title: "Portfolio Site",
        category: "Landing Page",
        backgroundImage: "https://images.pexels.com/photos/3184304/pexels-photo-3184304.jpeg?auto=compress&cs=tinysrgb&w=800",
      },
    ],
  ];

  const categoryTags = [
    "All",
    "Landing Page",
    "Mobile App",
    "Dashboard",
    "Cards",
    "E-commerce",
    "UI Design",
  ];

  const currentCards = portfolioCards[currentSlide];
  const filteredCards = selectedCategory === "All" 
    ? currentCards 
    : currentCards.filter(card => card.category === selectedCategory);

  return (
    <section id="portfolio" className="flex flex-col items-center gap-8 sm:gap-12 px-4 sm:px-8 lg:px-[71px] py-[60px] sm:py-[97px] relative self-stretch w-full flex-[0_0_auto]">
      <header className="flex w-full max-w-[1298px] items-center justify-between relative flex-[0_0_auto] flex-col sm:flex-row gap-4 sm:gap-0">
        <h2 className="relative flex items-center justify-center w-full sm:w-[643px] h-auto sm:h-[150px] mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-normal text-transparent text-[28px] sm:text-[48px] lg:text-[64px] tracking-[-0.96px] leading-[normal] text-center sm:text-left">
          <span className="font-semibold text-[#344053] tracking-[-0.61px]">
            Look at my{" "}
          </span>
          <span className="font-semibold text-[#f72585] tracking-[-0.61px]">
            Work
          </span>
        </h2>

        <Button className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 relative flex-[0_0_auto] bg-[#f72585] rounded-[30px] sm:rounded-[45px] lg:rounded-[60px] overflow-hidden h-auto hover:bg-[#7209b7] transition-all duration-300">
          <span className="[font-family:'Lufga-Bold',Helvetica] font-bold relative w-fit mt-[-1.00px] text-white text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal]">
            View More
          </span>
        </Button>
      </header>

      <div className="inline-flex flex-col items-center gap-8 sm:gap-12 relative flex-[0_0_auto] w-full">
        <div className="inline-flex flex-col items-center gap-8 sm:gap-12 relative flex-[0_0_auto] w-full">
          <div className="inline-flex items-center relative flex-[0_0_auto]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1290px]">
              {filteredCards.map((card, index) => (
                <Card
                  key={index}
                  className="flex w-full h-[250px] sm:h-[300px] lg:h-[371px] items-center justify-center gap-2.5 p-2.5 relative rounded-[15px] sm:rounded-[20px] border-0 overflow-hidden cursor-pointer hover:scale-105 transition-all duration-300 group"
                  style={{
                    background: `linear-gradient(190deg, rgba(0,0,0,0) 44%, rgba(0,0,0,0.36) 83%, rgba(0,0,0,0.5) 100%), url(${card.backgroundImage}) 50% 50% / cover`
                  }}
                >
                  <CardContent className="flex flex-col items-start justify-between relative flex-1 self-stretch grow p-0">
                    <div className="flex items-start justify-between w-full">
                      <span className="bg-[#f72585]/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {card.category}
                      </span>
                    </div>

                    <div className="inline-flex flex-col items-start gap-4 sm:gap-6 relative flex-[0_0_auto] w-full text-center lg:text-left">
                      <div className="inline-flex items-end gap-4 sm:gap-[18px] relative flex-[0_0_auto] flex-col sm:flex-row items-center sm:items-end">
                        <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Lufga-Bold',Helvetica] font-bold text-white text-2xl sm:text-3xl lg:text-5xl tracking-[-0.72px] leading-[normal]">
                          {card.title}
                        </h3>
                        <Button className="flex w-[40px] sm:w-[50px] lg:w-[58px] h-[40px] sm:h-[50px] lg:h-[58px] items-center justify-center gap-2.5 p-2 sm:p-2.5 lg:p-3 relative bg-[#f72585] rounded-[30px] sm:rounded-[45px] lg:rounded-[60px] border-2 border-solid hover:bg-[#7209b7] transition-all duration-300 group-hover:scale-110">
                          <ArrowUpRightIcon className="relative flex-1 self-stretch grow text-white w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <nav
            className="inline-flex items-start gap-2 sm:gap-[11.31px] relative flex-[0_0_auto]"
            aria-label="Portfolio pagination"
          >
            {portfolioCards.map((_, index) => (
              <div
                key={index}
                className={`relative h-[12px] sm:h-[15.08px] rounded-[15px] sm:rounded-[20.74px] transition-all duration-300 cursor-pointer hover:scale-110 ${
                  index === currentSlide 
                    ? "w-[40px] sm:w-[60.32px] bg-[#f72585]"
                    : "w-[12px] sm:w-[15.08px] bg-gray-300 hover:bg-[#f72585]/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </nav>
        </div>

        <div className="flex flex-wrap items-start gap-2 sm:gap-3.5 relative flex-[0_0_auto] justify-center">
          {categoryTags.map((tag, index) => (
            <Badge
              key={index}
              className={`inline-flex items-center justify-center gap-2.5 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-[15px] relative flex-[0_0_auto] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedCategory === tag 
                  ? "bg-[#f72585] text-white" 
                  : "bg-[#f2f3f6] text-black hover:bg-[#f72585]/20"
              }`}
              onClick={() => setSelectedCategory(tag)}
            >
              <span className="[font-family:'Inter',Helvetica] font-normal text-black text-sm sm:text-lg lg:text-xl tracking-[0] leading-[normal] relative w-fit mt-[-1.00px] whitespace-nowrap">
                {tag}
              </span>
            </Badge>
          ))}
        </div>

        <div className="inline-flex flex-col items-start gap-6 relative flex-[0_0_auto]">
          <div className="inline-flex items-end gap-[18px] relative flex-[0_0_auto]">
            <h3 className="relative flex items-center justify-center w-fit mt-[-1.00px] [font-family:'Lufga-Bold',Helvetica] font-bold text-[#344053] text-5xl tracking-[-0.72px] leading-[normal]">
              {filteredCards[0]?.title || "Featured Project"}
            </h3>

            <Button className="flex w-[58px] h-[58px] items-center justify-center gap-2.5 p-3 relative bg-[#f72585] rounded-[60px] border-2 border-solid hover:bg-[#7209b7] transition-all duration-300">
              <ArrowUpRightIcon className="relative flex-1 self-stretch grow text-white" />
            </Button>
          </div>

          <p className="flex items-center justify-center w-[742px] h-[61px] [font-family:'Lufga-Regular',Helvetica] font-normal text-[#344053] text-center relative text-xl tracking-[-0.30px] leading-[normal]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
            interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed lobortis orci elementum egestas lobortis.
          </p>
        </div>
      </div>
    </section>
  );
};