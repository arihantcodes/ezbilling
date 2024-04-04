"use client";
import React, { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { CalendarForm } from "./ui/billdate";
import { Label } from "./ui/label";

import { Button } from "./ui/button";
import axios from "axios";
interface Item {
  name: string;
  quantity: number;
  price: number;
}

const Billtemp = () => {
  const [items, setItems] = useState<Item[]>([
    { name: "", quantity: 0, price: 0 },
  ]);
  const [totalAmount, setTotalAmount] = useState<number>(0);

  useEffect(() => {
    const calculateTotalAmount = () => {
      let total = 0;
      items.forEach((item) => {
        total += item.quantity * item.price;
      });
      setTotalAmount(total);
    };
    calculateTotalAmount();
  }, [items]);

  const handleNameChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newItems = [...items];
    newItems[index].name = event.target.value;
    setItems(newItems);
  };

  const handleQuantityChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newItems = [...items];
    newItems[index].quantity = parseInt(event.target.value);
    setItems(newItems);
  };

  const handlePriceChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newItems = [...items];
    newItems[index].price = parseFloat(event.target.value);
    setItems(newItems);
  };

  const addItem = () => {
    setItems([...items, { name: "", quantity: 0, price: 0 }]);
  };

  const [formData, setFormData] = useState({
    userId: '',
    billname: '',
    billno: '',
    billdate: '',
    businessname: '',
    businessaddress: '',
    gstno: '',
    panno: '',
    clientname: '',
    clientaddress: '',
    clientmobileno: '',
    itemname: '',
    itemquantity: '',
    itemprice: '',
    itemtotal: '',
    totalamount: '',
  });
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/user/bills', formData);
      setMessage(response.data.message);
      setSuccess(response.data.success);
    } catch (error) {
      console.error('Error adding bill:', error);
      setMessage('Failed to add bill');
      setSuccess(false);
    }
  };

  return (
    <>
      <div className="md:w-[900px] text-center flex flex-col justify-center items-center">
        <h1 className="font-bold md:text-4xl ">Create Your Bill in 3 steps</h1>
        <div className='grid grid-cols-2 gap-6 mt-12 min-h-[60px] w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-500 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",'>
          <Input type="text" placeholder="Bill Name" className="w-60 "  onChange={handleChange} />
          <Input type="text" placeholder="Bill No." className="w-60 "  onChange={handleChange} />
          <Input type="date" placeholder="bill Date" className="w-60 " onChange={handleChange}  />
        
          <Input type="text" placeholder="UserId" className="w-60 "  onChange={handleChange} />

          <div>
            <h1 className="text-start font-bold mb-3 text-lg">Your Details</h1>

            <Input
              type="text"
              placeholder="Business Name"
              className="w-60 mb-4"
               onChange={handleChange} 
            />
            <Input type="text" placeholder="Address" className="w-60 mb-4"
             onChange={handleChange} 
            />

            <Input
              type="text"
              placeholder="Business GSTIN (Optional)"
              className="w-60 mt-4"
               onChange={handleChange} 
            />
            <Input
              type="text"
              placeholder="Business PAN Number(Optional) "
              className="w-60 mt-4"
               onChange={handleChange} 
            />
          </div>

          <div className="">
            <h1 className="text-start font-bold mb-3 text-lg">
              Client Details
            </h1>
            <Input
              type="text"
              placeholder="Client Name"
              className="w-60 mb-4"
               onChange={handleChange} 
            />
            <Input
              type="text"
              placeholder="Client Address"
              className="w-60 mb-4"
               onChange={handleChange} 
            />

            <Input
              type="text"
              placeholder="Client Mobile No."
              className="w-60 mt-4"
               onChange={handleChange} 
            />
          </div>

          <div className="m-6 flex justify-center flex-col ">
            {items.map((item, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex flex-col">
                  <Label htmlFor={`item-name-${index}`}>Item Name</Label>
                  <Input
                    id={`item-name-${index}`}
                    type="text"
                    value={item.name}
                    onChange={(e) => handleNameChange(index, e)}
                    className="w-52 mt-5"
                    placeholder="Item Name"
                  />
                </div>
                <div className="flex flex-col">
                  <Label htmlFor={`item-quantity-${index}`}>Quantity</Label>
                  <Input
                    id={`item-quantity-${index}`}
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(index, e)}
                    className="w-52 mt-5"
                    placeholder="Quantity"
                  />
                </div>
                <div className="flex flex-col">
                  <Label htmlFor={`item-price-${index}`}>Price</Label>
                  <Input
                    id={`item-price-${index}`}
                    type="number"
                    value={item.price}
                    onChange={(e) => handlePriceChange(index, e)}
                    className="w-52 mt-5"
                    placeholder="Price"
                  />
                </div>
                <div className="flex flex-col">
                  <Label htmlFor={`item-total-${index}`}>
                    Total Item Price
                  </Label>
                  <Input
                    id={`item-total-${index}`}
                    type="number"
                    value={(item.quantity * item.price).toFixed(2)}
                    className="w-28 mt-5 mb-5"
                    placeholder="Total"
                    readOnly
                  />
                </div>
              </div>
            ))}
            <div>
              <Button
                onClick={addItem}
                className="mt-12 flex justify-center"
                size={"lg"}
              >
                Add Item
              </Button>
              <div className="flex justify-start mt-5 gap-5 items-center">
                <Label htmlFor="total-amount" className="font-bold text-lg">
                  Total Amount
                </Label>
                <Input
                  placeholder="Total Amount"
                  readOnly
                  value={totalAmount.toFixed(2)}
                  className="w-52 font-bold"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-5 items-end">
          <Button onClick={handleSubmit}>Save & Continue</Button>
        </div>
      </div>
    </>
  );
};

export default Billtemp;

