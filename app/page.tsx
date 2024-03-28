import { ModeToggle } from "@/components/mode";
import Image from "next/image";
import logolight from "../public/logolight.svg";
import logodark from "../public/logodark.svg";
import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";

export default function Home() {
  const words = [
    {
      text: "Making ",
    },
    {
      text: "Billing ",
    },
    {
      text: "Easy ",
    },
    {
      text: "For",
    },
    {
      text: "You",
    },
    {
      text: "Free.",
    },
  ];
  return (
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative  ">
      <div className=" flex flex-row items-center justify-between">
        <div className="flex items-center">
          <Image
            src={logodark}
            height={55}
            width={35}
            className="m-5 dark:"
            alt=""
          />
          <h1 className="font-bold text-2xl">EzBilling</h1>
        </div>
        <div className="flex gap-8 p-4">
          <h1>Pricing</h1>
          <h1>Register</h1>
        <ModeToggle />
        </div>
      </div>

      <div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>

        <TypewriterEffect words={words} className="mt-16"/>
      <div className="mt-12 flex justify-center  text-center">
      <Button variant={"destructive"}>Coming Soon</Button>
      </div>
    </div>
  );
}
