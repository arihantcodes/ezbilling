import React from "react";
import { ModeToggle } from "@/components/mode";
import Image from "next/image";
import logolight from "@/public/logolight.svg";
import logodark from "@/public/logodark.svg";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Spotlight } from "@/components/ui/Spotlight";
import { UserButton } from "@clerk/nextjs";

const basic = [
  {
    title: "Customise Invoice Columns with Formulas",
  },
  {
    title: "Unlimited Custom Fields",
  },
  {
    title: "Share Invoices via Email in 1-click",
  },
  {
    title: "24x7 Email  Support",
  },
  {
    title: "One Click Print",
  },
  {
    title: "Invoice Tracking",
  },
  {
    title: "Expense Tracking",
  },
  {
    title: "Tax Calculation and Management",
  },
];
const stander = [
  {
    title: "Customise Invoice Columns with Formulas",
  },
  {
    title: "Unlimited Custom Fields",
  },
  {
    title: "Share Invoices via Email in 1-click",
  },
  {
    title: "24x7 Email  Support",
  },
  {
    title: "One Click Print",
  },
  {
    title: "Invoice Tracking",
  },
  {
    title: "Expense Tracking",
  },
  { title: "Payment Gateway Integration" },
  { title: "Document Attachment Capability" },
  { title: "Priority Support" },
  { title: "Make Your Custom Plan" },
];

type PricingProps = React.ComponentProps<typeof Card>;
const Pricing: React.FC<PricingProps> = ({ className, ...props }) => {
  return (
    <>
      <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative  ">
        <div className=" flex flex-row items-center justify-between">
          <Link href="/">
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
          </Link>
          <div className="flex items-center gap-8 p-4">
            <Link href="/pricing">
              <h1 className="font-semibold text-lg">Pricing</h1>
            </Link>
            <UserButton />

            <ModeToggle />
          </div>
        </div>

        <div>
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />
        </div>
        <div className="flex gap-12 justify-center items-center mt-16">
          <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
              <CardTitle>Basic Plan</CardTitle>
              <CardDescription className="text-4xl">₹ 00/mo</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                {basic.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <Link href="/apps">
              <CardFooter>
                <Button className="w-full">Continue Free 😊</Button>
              </CardFooter>
            </Link>
          </Card>
          <Card className={cn("w-[380px]", className)} {...props}>
            <CardHeader>
              <CardTitle>Standard Plan</CardTitle>
              <CardDescription className="text-4xl">₹ 399/mo</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div>
                {stander.map((notification, index) => (
                  <div
                    key={index}
                    className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                  >
                    <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {notification.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Continue With Standard Plan 💵</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Pricing;
