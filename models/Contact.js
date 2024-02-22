import mongoose from "mongoose";
const ContactSchema = new mongoose.Schema({
  _id: String,
  firstname: String,
  lastname: String,
  email: String,
  city: String,
  age: Number,
  phone: String,
});

export default mongoose.model("Contact", ContactSchema, "Contacts");
