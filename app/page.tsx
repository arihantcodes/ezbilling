"use client";
import { ModeToggle } from "@/components/mode";
import Image from "next/image";
import logolight from "../public/logolight.svg";
import logodark from "../public/logodark.svg";

import { cn } from "@/utils/cn";
import { Spotlight } from "@/components/ui/Spotlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Rating } from "@/components/rating";

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
            height={30}
            width={30}
            className="m-5 dark:block hidden"
            alt=""
          />
          <Image
            src={logolight}
            height={30}
            width={30}
            className="m-5 dark:hidden"
            alt=""
          />

          <h1 className="md:font-bold md:text-2xl hidden md:block ">
            EzBilling
          </h1>
        </div>
        <div className="flex items-center gap-8 p-4">
          <Link href="/pricing">
            <h1 className="font-semibold text-lg">Pricing</h1>
          </Link>
          <Link href="/login">
            <h1 className="font-semibold text-lg">Login</h1>
          </Link>
          <Link href="/signup">
            <h1 className="font-semibold text-lg">Signup</h1>
          </Link>

          <ModeToggle />
        </div>
      </div>

      <div>
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
      </div>

      <TypewriterEffect words={words} className="mt-16" />
      <div className="mt-12 flex justify-center flex-col  text-center">
        <Rating />
        <Link href="/apps">
          <Button>Create Your First Bill</Button>
        </Link>
      </div>
    </div>
  );
}
