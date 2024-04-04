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
import React, { useEffect, useState } from "react";
import { ModeToggle } from "@/components/mode";
import Image from "next/image";
import logolight from "@/public/logolight.svg";
import logodark from "@/public/logodark.svg";
import { Spotlight } from "@/components/ui/Spotlight";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();

  const [user, setUser] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.fullname.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);
  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/user/signup", user);
      toast.success("Account Create Successfully ");
      router.push("/login");
    } catch (error: any) {
      console.log("signup failed");
      toast.error("Account Create Failed");
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
            <CardTitle className="text-xl">Sign Up</CardTitle>
            <CardDescription>
              Enter your information to create an account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="fullname">Full name</Label>
                  <Input
                    id="fullname"
                    placeholder="Fullname"
                    required
                    value={user.fullname}
                    onChange={(e) =>
                      setUser({ ...user, fullname: e.target.value })
                    }
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="username">Username</Label>
                  <Input
                    id="username"
                    placeholder="Username"
                    required
                    value={user.username}
                    onChange={(e) =>
                      setUser({ ...user, username: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={user.email}
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={user.password}
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
              </div>
              <div>
                <Button type="submit" className="w-full" onClick={onSignup}>
                  {buttonDisabled
                    ? " Create an account"
                    : " Ready For Create an account"}
                </Button>
                <Toaster position="top-right" reverseOrder={false} />
              </div>
              <Button variant="outline" className="w-full">
                Sign up with GitHub
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
