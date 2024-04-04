import mongoose from "mongoose";

const BillSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId, // Store MongoDB ObjectID
    ref: "User", // Reference to the User model
    required: true,
  },
  billname: {
    type: String,
    required: true,
  },
  billno: {
    type: Number,
    required: true,
  },
  billdate: {
    type: Date,
    required: true,
  },
 
  businessname: {
    type: String,
    required: true,
  },
  businessaddress: {
    type: String,
    required: true,
  },
  gstno: {
    type: String,
  },
  panno: {
    type: String,
  },
  clientname: {
    type: String,
    required: true,
  },
  clientaddress: {
    type: String,
    required: true,
  },
  clientmobileno: {
    type: Number,
    required: true,
  },
  itemname: {
    type: String,
    required: true,
  },
  itemquantity: {
    type: Number,
    required: true,
  },
  itemprice: {
    type: Number,
    required: true,
  },
  itemtotal: {
    type: Number,
    required: true,
  },
  totalamount: {
    type: Number,
    required: true,
  },
});


const Bills = mongoose.models.Bills || mongoose.model("Bills", BillSchema);

export default Bills;