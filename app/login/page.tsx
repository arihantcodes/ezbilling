"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ModeToggle } from "@/components/mode";
import Image from "next/image";
import logolight from "@/public/logolight.svg";
import logodark from "@/public/logodark.svg";
import { Spotlight } from "@/components/ui/Spotlight";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function LoginForm() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const onSignin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/login", user);

      if (response.data.success) {
        // Login successful
        console.log("signin successful", response.data);

        // Extract _id from the response data
        const userId = response.data.data._id;

        toast.success("Login Successfully ");
        router.push(`/apps/${userId}`);
      }
    } catch (error) {
      // Error during login
      console.error("Error during signin:", error);
      toast.error("Login Failed");
      // Handle error scenario, e.g., show error message to the user
    } finally {
      setLoading(false);
    }
  };

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
                  placeholder="email"
                  required
                  className=""
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  required
                  className=""
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div>
                <Button type="submit" className="w-full" onClick={onSignin}>
                  Login
                </Button>
                <Toaster position="top-right" reverseOrder={false} />
              </div>

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
  );
}
