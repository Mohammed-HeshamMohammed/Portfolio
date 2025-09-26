import { ArrowUpRight as ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TestimonialsSection = (): JSX.Element => {
  const blogPosts = [
    {
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "UI/ UX Design",
      author: "Jayesh Patil",
      date: "10 Nov, 2023",
      title: "Design Unraveled: Behind\nthe Scenes of UI/UX Magic",
    },
    {
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "App Design",
      author: "Jayesh Patil",
      date: "09 Oct, 2023",
      title: "Sugee: Loan Management System for Rural Sector.",
    },
    {
      image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "App Design",
      author: "Jayesh Patil",
      date: "13 Aug, 2023",
      title: "Cinetrade: Innovative way to invest in Digital Media",
    },
  ];

  return (
    <section className="flex flex-col items-center gap-8 sm:gap-12 px-4 sm:px-8 lg:px-[71px] py-[60px] sm:py-[97px] w-full">
      <header className="flex w-full max-w-[1298px] items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
        <h2 className="[font-family:'Lufga-Bold',Helvetica] font-bold text-[#344053] text-2xl sm:text-4xl lg:text-5xl tracking-[-0.72px] leading-[normal] text-center sm:text-left">
          From my
          <br />
          blog post
        </h2>

        <Button className="h-auto bg-[#fd8439] hover:bg-[#fd8439]/90 rounded-[60px] px-10 py-5">
        <Button className="h-auto bg-[#f72585] hover:bg-[#f72585]/90 rounded-[30px] sm:rounded-[45px] lg:rounded-[60px] px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5">
          <span className="[font-family:'Lufga-Bold',Helvetica] font-bold text-white text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal]">
            See All
          </span>
        </Button>
        </Button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1299px]">
        {blogPosts.map((post, index) => (
          <article
            key={index}
            className="flex flex-col items-start gap-6 sm:gap-[35px] flex-1"
          >
            <Card className="shadow-[0px_4px_55px_#0000000d] border-0 bg-transparent w-full">
              <CardContent className="p-0 relative">
                <img
                  className="w-full h-[250px] sm:h-[350px] lg:h-[432px] object-cover rounded-lg"
                  alt="Blog post featured image"
                  src={post.image}
                />

                <div className="w-[114px] h-[114px] absolute top-[318px] right-[14px] bg-[#1d2838] rounded-[57px] flex items-center justify-center p-[21px]">
                <div className="w-[60px] sm:w-[80px] lg:w-[114px] h-[60px] sm:h-[80px] lg:h-[114px] absolute bottom-[14px] right-[14px] bg-[#7209b7] rounded-[30px] sm:rounded-[40px] lg:rounded-[57px] flex items-center justify-center p-[12px] sm:p-[16px] lg:p-[21px]">
                  <ArrowUpRightIcon className="w-full h-full text-white" />
                </div>
                </div>
              </CardContent>
            </Card>

            <Badge className="bg-[#f2f3f6] hover:bg-[#f2f3f6] text-black rounded-2xl sm:rounded-3xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-[15px] h-auto">
              <span className="[font-family:'Inter',Helvetica] font-normal text-sm sm:text-lg lg:text-xl tracking-[0] leading-[normal]">
                {post.category}
              </span>
            </Badge>

            <div className="flex items-start gap-4 sm:gap-6 lg:gap-[35px] flex-col sm:flex-row">
              <div className="flex items-center gap-2.5">
                <div className="w-[6px] sm:w-[8px] lg:w-[9px] h-[6px] sm:h-[8px] lg:h-[9px] bg-[#f72585] rounded-[3px] sm:rounded-[4px] lg:rounded-[4.5px]" />
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#344053] text-sm sm:text-lg lg:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  {post.author}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-[6px] sm:w-[8px] lg:w-[9px] h-[6px] sm:h-[8px] lg:h-[9px] bg-[#f72585] rounded-[3px] sm:rounded-[4px] lg:rounded-[4.5px]" />
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#344053] text-sm sm:text-lg lg:text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                  {post.date}
                </span>
              </div>
            </div>

            <h3 className="w-full [font-family:'Lufga-Regular',Helvetica] font-normal text-[#344053] text-[20px] sm:text-[24px] lg:text-[32px] tracking-[0] leading-[normal]">
              {post.title.split("\n").map((line, lineIndex) => (
                <React.Fragment key={lineIndex}>
                  {line}
                  {lineIndex < post.title.split("\n").length - 1 && <br />}
                </React.Fragment>
              ))}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
};
