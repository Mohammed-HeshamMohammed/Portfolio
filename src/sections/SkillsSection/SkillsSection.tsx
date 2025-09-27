import { Award as AwardIcon, Mail as MailIcon, ShieldCheck as ShieldCheckIcon, Star as StarIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

const achievementItems = [
  {
    icon: StarIcon,
    text: "4.9/5 Average Ratings",
  },
  {
    icon: AwardIcon,
    text: "25+ Winning Awards",
  },
  {
    icon: ShieldCheckIcon,
    text: "Certified Product Designer",
  },
];

export const SkillsSection = (): JSX.Element => {
  const [email, setEmail] = React.useState("");
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-2.5 px-4 sm:px-8 py-[60px] sm:py-[98px] relative self-stretch w-full flex-[0_0_auto]">
      <header className="relative flex items-center justify-center w-full max-w-[799px] h-auto mt-[-1.00px] [font-family:'Lufga-SemiBold',Helvetica] font-semibold text-transparent text-[24px] sm:text-[48px] lg:text-[64px] text-center tracking-[-0.96px] leading-[normal] px-4">
        <h2 className="text-[#344053] tracking-[-0.61px]">
          Have an Awsome Project Idea?{" "}
        </h2>

        <span className="text-[#f72585] tracking-[-0.61px]">
          Let&apos;s Discuss
        </span>
      </header>

      <div className="inline-flex flex-col items-center justify-center gap-2.5 relative flex-[0_0_auto]">
        {isSubmitted ? (
          <div className="flex w-full max-w-[832px] h-auto sm:h-[86px] items-center justify-center p-3.5 relative rounded-[25px] sm:rounded-[50px] bg-green-100 border border-solid border-green-300">
            <span className="text-green-700 font-medium text-lg">Thank you! I'll get back to you soon.</span>
          </div>
        ) : (
        <form onSubmit={handleSubmit} className="flex w-full max-w-[832px] h-auto sm:h-[86px] items-center justify-between p-3.5 relative rounded-[25px] sm:rounded-[50px] border border-solid border-[#e4e6eb] backdrop-blur-[7.5px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(7.5px)_brightness(100%)] flex-col sm:flex-row gap-4 sm:gap-0">
          <div className="relative self-stretch w-full sm:w-[255px] flex items-center">
            <div className="flex w-12 sm:w-16 h-[40px] sm:h-[58px] items-center justify-center gap-2.5 bg-[#f72585]/20 rounded-[25px] sm:rounded-[50px]">
              <MailIcon className="w-6 sm:w-8 h-6 sm:h-8 text-[#f72585]" />
            </div>

            <Input
              type="email"
              placeholder="Enter Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="absolute top-[10px] sm:top-[18px] left-[60px] sm:left-[81px] w-[120px] sm:w-[172px] [font-family:'Urbanist',Helvetica] font-medium text-black text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal] border-none bg-transparent p-0 h-auto focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>

          <Button
            type="submit"
            className="gap-2.5 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 relative flex-[0_0_auto] bg-[#f72585] rounded-[30px] sm:rounded-[45px] lg:rounded-[60px] inline-flex items-center justify-center overflow-hidden h-auto hover:bg-[#7209b7] transition-all duration-300"
          >
            <span className="[font-family:'Urbanist',Helvetica] font-medium whitespace-nowrap relative w-fit mt-[-1.00px] text-white text-sm sm:text-lg lg:text-xl tracking-[-0.30px] leading-[normal]">
              Send
            </span>
          </Button>
        </form>
        )}

        <div className="flex w-full max-w-[770px] items-center justify-between relative flex-[0_0_auto] flex-col sm:flex-row gap-4 sm:gap-0 text-center sm:text-left">
          {achievementItems.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 relative flex-[0_0_auto] justify-center sm:justify-start"
            >
              <item.icon className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-[#f72585]" />
              <span className="relative w-fit [font-family:'Lufga-Regular',Helvetica] font-normal text-black text-sm sm:text-base tracking-[-0.24px] leading-[normal]">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
