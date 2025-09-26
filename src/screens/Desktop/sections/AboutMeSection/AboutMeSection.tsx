import { Star as StarIcon } from "lucide-react";
import { Quote as QuoteIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonialData = [
  {
    id: 1,
    name: "Fawzi Sayed",
    title: "Ui Ux Designer",
    rating: 5.0,
    text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 2,
    name: "Fawzi Sayed",
    title: "Ui Ux Designer",
    rating: 5.0,
    text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    id: 3,
    name: "Fawzi Sayed",
    title: "Ui Ux Designer",
    rating: 5.0,
    text: "consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.",
    avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const decorativeVectors = [
  {
    className: "absolute top-[105px] right-[380px] w-8 h-[33px] bg-[#4cc9f0] rounded-full",
  },
  {
    className: "absolute top-[226px] right-[192px] w-[26px] h-[25px] bg-[#4361ee] rounded-lg",
  },
  {
    className: "absolute top-[429px] left-[352px] w-9 h-9 bg-[#f72585] rounded-full",
  },
];

export const AboutMeSection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-12 sm:gap-24 px-4 sm:px-8 lg:px-[71px] py-[60px] sm:py-[116px] relative w-full rounded-[25px] sm:rounded-[50px] overflow-hidden bg-[linear-gradient(0deg,rgba(23,23,23,1)_0%,rgba(23,23,23,1)_100%)]">
      <header className="flex flex-col max-w-[1299px] items-center gap-3.5 relative w-full">
        <h2 className="relative w-fit mt-[-1.00px] [font-family:'Lufga-Medium',Helvetica] font-medium text-2xl sm:text-4xl lg:text-5xl text-center tracking-[-0.72px] leading-[normal]">
          <span className="text-[#fbfcfc] tracking-[-0.35px]">
            Testimonials That Speak to{" "}
          </span>
          <span className="text-[#f72585] tracking-[-0.35px]">My Results</span>
        </h2>

        <p className="flex items-center justify-center max-w-[742px] h-auto [font-family:'Lufga-Regular',Helvetica] font-normal text-[#f8f9fb] text-center text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal] px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue
          interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed lobortis orci elementum egestas lobortis.
        </p>

        {decorativeVectors.map((vector, index) => (
          <div
            key={`vector-${index}`}
            className={vector.className.replace(/w-\d+|h-\d+/g, (match) => {
              if (match.includes('w-')) return 'w-4 sm:w-6 lg:' + match;
              if (match.includes('h-')) return 'h-4 sm:h-6 lg:' + match;
              return match;
            })}
          />
        ))}
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1299px] w-full px-4">
        {testimonialData.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="bg-[#ffffff24] border-none rounded-2xl sm:rounded-3xl backdrop-blur-[7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7px)_brightness(100%)] overflow-hidden"
          >
            <CardContent className="flex flex-col gap-3.5 p-4 sm:p-[21px] relative">
              <div className="flex items-start gap-3">
                <div
                  className="w-[40px] sm:w-[54.84px] h-[40px] sm:h-[54.84px] bg-cover bg-center rounded-full flex-shrink-0"
                  style={{ 
                    backgroundImage: `url(${testimonial.avatar})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="flex flex-col">
                  <h3 className="[font-family:'Urbanist',Helvetica] font-bold text-[#fbfcfc] text-[16px] sm:text-[20px] lg:text-[23.5px] tracking-[0] leading-[normal]">
                    {testimonial.name}
                  </h3>
                  <p className="[font-family:'Urbanist',Helvetica] font-normal text-[#fbfcfc] text-[14px] sm:text-[16px] lg:text-[18.3px] tracking-[0] leading-[normal]">
                    {testimonial.title}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-[5px]">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <StarIcon
                      key={index}
                      className="w-4 sm:w-6 lg:w-8 h-4 sm:h-6 lg:h-8 fill-current text-[#4cc9f0]"
                    />
                  ))}
                </div>
                <span className="[font-family:'Lufga-Medium',Helvetica] font-medium text-[#fbfcfc] text-[16px] sm:text-[20px] lg:text-[25.7px] tracking-[-0.39px] leading-[normal]">
                  {testimonial.rating}
                </span>
              </div>

              <p className="flex items-center justify-center max-w-[742px] h-auto [font-family:'Lufga-Regular',Helvetica] font-normal text-[#f8f9fb] text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal]">
                {testimonial.text}
              </p>

              <div className="absolute top-2 sm:top-3 right-2 sm:right-3 w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 bg-[#f72585] opacity-20 rounded-full flex items-center justify-center">
                <QuoteIcon className="w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 text-[#f72585]" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
