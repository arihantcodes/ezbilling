import React, { useState, useEffect } from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

interface Item {
  name: string;
  quantity: number;
  price: number;
}

const ItemForm: React.FC = () => {
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

  return (
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
          <Label htmlFor={`item-total-${index}`}>Total Item Price</Label>
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
  
  );
};

export default ItemForm;
