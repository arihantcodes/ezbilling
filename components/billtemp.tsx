import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const Billtemp = () => {
  const [formData, setFormData] = useState({
    userId: "",
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
    } catch (error:any) {
      console.log(error.message);
      toast.error("Bill Creation Failed with frontend error");
    }
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="md:w-[900px] text-center flex flex-col justify-center items-center">
        <h1 className="font-bold md:text-4xl">Create Your Bill in 3 steps</h1>
        <div className="grid grid-cols-2 gap-6 mt-12 min-h-[60px] w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-500 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300">
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
          />
          <Input
            type="text"
            placeholder="Business Name"
            name="businessname"
            className="w-60"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Business Address"
            name="businessaddress"
            className="w-60"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Business GSTIN (Optional)"
            name="gstno"
            className="w-60"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Business PAN Number (Optional)"
            name="panno"
            className="w-60"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Client Name"
            name="clientname"
            className="w-60"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Client Address"
            name="clientaddress"
            className="w-60"
            onChange={handleInputChange}
          />
          <Input
            type="text"
            placeholder="Client Mobile No."
            name="clientmobileno"
            className="w-60"
            onChange={handleInputChange}
          />
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
            placeholder="Total"
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
    </>
  );
};

export default Billtemp;
