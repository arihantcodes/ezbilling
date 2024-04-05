"use client";
import Link from "next/link";
import {
  Bell,
  CircleUser,
  Home,
  LineChart,
  Menu,
  Package,
  Package2,
  Search,
  Users,
  Settings,
} from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { ModeToggle } from "@/components/mode";
import Image from "next/image";
import logodark from "@/public/logodark.svg";
import logolight from "@/public/logolight.svg";
import axios from "axios";

import { useRouter } from "next/navigation";

import { useState } from "react";

export default function Dashboard({ params }: any) {
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/user/logout");
      toast.success("Logout successful");
      router.push("/login");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Logout failed");
    }
  };
  const [formData, setFormData] = useState({
    userId: params.id,
    billname: "",
    billno: "",
    billdate: "",
    businessname: "",
    businessaddress: "",
    gstno: "",
    panno: "",
    clientname: "",
    clientaddress: "",
    clientmobileno: "",
    itemname: "",
    itemquantity: "",
    itemprice: "",
    itemtotal: "",
    totalamount: "",
  });

  const billing = async () => {
    try {
      const response = await axios.post("/api/user/bills", formData);
      console.log(response);
      if (response.status === 200) {
        toast.success("Bill Created Successfully");
      } else {
        toast.error("Failed to create bill");
      }
    } catch (error: any) {
      console.log(error.message);
      toast.error("Bill Creation Failed with frontend error");
    }
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="grid min-h-screen w-full dark:bg-black   md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r dark:bg-black md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
            <Link
              href="https://twitter.com/Arihantdotcom"
              className="flex items-center gap-2 font-semibold"
            >
              <Image
                src={logodark}
                height={16}
                width={18}
                alt="5"
                className=" dark:block hidden"
              />
              <Image
                src={logolight}
                height={16}
                width={18}
                alt="5"
                className=" dark:hidden block"
              />
              <span className="">EzBilling</span>
            </Link>
            <Button variant="outline" size="icon" className="ml-auto h-8 w-8">
              <Bell className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              <Link
                href={`/apps/${params.id}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href={`/apps/settings/${params.id}`}
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Settings className="h-4 w-4" />
                Settings
              </Link>
              <Link
                href={`/apps/yourbill/${params.id}`}
                className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary"
              >
                <Package className="h-4 w-4" />
                Your Bill{" "}
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <Users className="h-4 w-4" />
                Customers
              </Link>
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              >
                <LineChart className="h-4 w-4" />
                Analytics
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4">
            <Card>
              <CardHeader className="p-2 pt-0 md:p-4">
                <CardTitle>Upgrade to Pro</CardTitle>
                <CardDescription>
                  Unlock all features and get unlimited access to our support
                  team.
                </CardDescription>
              </CardHeader>
              <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
                <Link href="/pricing">
                  <Button size="sm" className="w-full">
                    Upgrade
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b  dark:bg-black px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="https://twitter.com/Arihantdotcom"
                  className="flex items-center gap-2 text-lg font-semibold"
                >
                  <Image
                    src={logodark}
                    height={16}
                    width={18}
                    alt="5"
                    className=" dark:block hidden"
                  />
                  <Image
                    src={logolight}
                    height={16}
                    width={18}
                    alt="5"
                    className=" dark:hidden block"
                  />
                  <span className="">EzBilling</span>
                </Link>
                <Link
                  href={`/apps/${params.id}`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href={`/apps/settings/${params.id}`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                  <Settings className="h-5 w-5" />
                  Settings
                </Link>
                <Link
                  href={`/apps/settings/${params.id}`}
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Package className="h-5 w-5" />
                  Your Bill
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <Users className="h-5 w-5" />
                  Customers
                </Link>
                <Link
                  href="#"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                  <LineChart className="h-5 w-5" />
                  Analytics
                </Link>
              </nav>

              <div className="mt-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Upgrade to Pro</CardTitle>
                    <CardDescription>
                      Unlock all features and get unlimited access to our
                      support team.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href="/pricing">
                      <Button size="sm" className="w-full">
                        Upgrade
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </SheetContent>
          </Sheet>
          <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href={`/profile/${params.id}`}>Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <div>
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
                <Toaster position="top-right" reverseOrder={false} />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </header>
        <main className="flex  dark:bg-black  flex-row flex-wrap justify-evenly gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="md:w-[800px] text-center flex flex-col justify-center items-center">
            <h1 className="font-bold md:text-4xl">
              Create Your Bill in 3 steps
            </h1>
            <div className="grid md:grid-cols-2 gap-6 mt-12 min-h-[60px] w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-500 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300 text-start">
              <Input
                type="text"
                placeholder="Bill Name"
                name="billname"
                className="w-60"
                onChange={handleInputChange}
              />
              <Input
                type="text"
                placeholder="Bill No."
                name="billno"
                className="w-60"
                onChange={handleInputChange}
              />
              <Input
                type="date"
                placeholder="Bill Date"
                name="billdate"
                className="w-60"
                onChange={handleInputChange}
              />
              <Input
                type="text"
                placeholder="User ID"
                name="userId"
                className="w-60"
                onChange={handleInputChange}
                value={formData.userId}
                readOnly
              />

              <div className="">
                <h1 className="font-bold text-lg ">Your Details</h1>
                <Input
                  type="text"
                  placeholder="Business Name"
                  name="businessname"
                  className="w-60 mb-5 mt-3"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  placeholder="Business Address"
                  name="businessaddress"
                  className="w-60 mb-5"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  placeholder="Business GSTIN (Optional)"
                  name="gstno"
                  className="w-60 mb-5"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  placeholder="Business PAN Number (Optional)"
                  name="panno"
                  className="w-60 mb-5"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <h1 className="font-bold text-lg ">Client Details</h1>
                <Input
                  type="text"
                  placeholder="Client Name"
                  name="clientname"
                  className="w-60 mb-7 mt-3"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  placeholder="Client Address"
                  name="clientaddress"
                  className="w-60 mb-7"
                  onChange={handleInputChange}
                />
                <Input
                  type="text"
                  placeholder="Client Mobile No."
                  name="clientmobileno"
                  className="w-60 mb-7"
                  onChange={handleInputChange}
                />
              </div>
              <Input
                type="text"
                placeholder="Item Name"
                name="itemname"
                className="w-60"
                onChange={handleInputChange}
              />
              <Input
                type="number"
                placeholder="Quantity"
                name="itemquantity"
                className="w-60"
                onChange={handleInputChange}
              />
              <Input
                type="number"
                placeholder="Price"
                name="itemprice"
                className="w-60"
                onChange={handleInputChange}
              />
              <Input
                type="number"
                placeholder=" Item Total"
                name="itemtotal"
                className="w-60"
                onChange={handleInputChange}
              />
              <Input
                type="number"
                placeholder="Total Amount"
                name="totalamount"
                className="w-60"
                onChange={handleInputChange}
              />
            </div>
            <div className="flex mt-5 items-end">
              <Button onClick={billing}>Save & Continue</Button>
              <Toaster position="top-right" reverseOrder={false} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
