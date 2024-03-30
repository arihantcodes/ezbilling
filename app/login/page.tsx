import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ModeToggle } from "@/components/mode";
import Image from "next/image";
import logolight from "@/public/logolight.svg";
import logodark from "@/public/logodark.svg";
import { Spotlight } from "@/components/ui/Spotlight";
export default function LoginForm() {
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
    <Card className="mx-auto max-w-sm md:mt-32">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
              <Link href="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
          <Button variant="outline" className="w-full">
            Login with Google
          </Button>
        </div>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
    </div>
    </>
  )
}
