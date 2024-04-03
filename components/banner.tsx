import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export const Banner = () => {
  return (
    <div className="flex items-center justify-between h-[88vh]">
      <div className="flex flex-col justify-center gap-5">
        <div>
          <p className="text-6xl ">Every Day Feels Like Friday</p>
          <p className="text-6xl mt-3">With Our Pizzas!</p>
          <p className="text-slate-500 text-xl mt-3">
            Elevate your everyday with{" "}
            <span className="text-black font-bold">Friday</span> pizzas – where
            every bite feels like a weekend celebration.
          </p>
          <p className="text-slate-500 text-xl">
            Order now for a daily dose of delicious delight!
          </p>
        </div>
        <Button className="max-w-[300px] h-16 rounded-none text-2xl group">
          Order Now
          <ArrowRight
            className="relative ml-2 group-hover:animate-pulse"
            size={30}
          />
        </Button>
      </div>
      <div className="h-full flex items-center justify-center w-full max-w-[800px] relative">
        <Image src="/home.png" alt="pizza" width={800} height={800} />
      </div>
    </div>
  );
};
