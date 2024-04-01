"use client";

import Link from "next/link";

import axios from "axios";
import { toast } from "react-hot-toast";

import { Button } from "./ui/button";

import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfileForm({params}:any) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    id: ""
  });

  // Function to fetch user details
  const fetchUserDetails = async () => {
    try {
      const res = await axios.post("/api/user/profile");
      const userData = res.data.data;
      setFormData({
        fullname: userData.fullname,
        email: userData.email,
        username: userData.username,
        id : userData._id
      });
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  // Fetch user details when component mounts
  useEffect(() => {
    fetchUserDetails();
  }, []);


  return (
    <form className="space-y-8" >
      <div>
        <Label htmlFor="fullname">Full Name</Label>
        <Input 
          type="text" 
          id="fullname" 
          name="fullname" 
          value={formData.fullname} 
          readOnly
          required 
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input 
          type="email" 
          id="email" 
          name="email" 
          value={formData.email} 
          readOnly
          required 
        />
      </div>
      <div>
        <Label htmlFor="username">Username</Label>
        <Input 
          type="text" 
          id="username" 
          name="username" 
          value={formData.username} 
          readOnly
          required 
        />
      </div>

      <Link href={`/apps/${formData.id}`}>
      <Button className="mt-5">Back To Dashboard</Button>
      </Link>
    </form>
  );
}