import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true,
    required: [true, "Please enter firstname."],
    maxlength: [50, "Firstname cannot exceed 50 characters."],
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, "Please enter lastname."],
    maxlength: [50, "Lastname cannot exceed 50 characters."],
  },
  email: {
    type: String,
    trim: true,
    required: [true, "Please enter email address."],
    maxlength: [100, "Email cannot exceed 100 characters."],
  },
  phone: {
    type: Number,
    trim: true,
    required: [true, "Please enter phone number."],
    maxlength: [20, "Phone number cannot exceed 20 characters."],
  },
  role: {
    type: String,
    trim: true,
    required: [true, "Please enter role either host or guest."],
  },
});

export default mongoose.models.User || mongoose.model('User', userSchema);
