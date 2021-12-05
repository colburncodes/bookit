import mongoose from "mongoose";


const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter room name."],
    trim: true,
    maxlength: [100, "Room name cannot exceed 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please enter room price"],
    maxlength: [4, "Room price cannot exceed 4 characters"],
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please a room description."],
    trim: true,
    maxlength: [250, "Room description cannot exceed 200 characters."],
  },
  address: {
    type: String,
    required: [true, "Please enter room address."],
    trim: true,
    maxlength: [],
  },
  capacity: {
    type: Number,
    required: [true, "Please enter room guest capacity."],
  },
  numOfBeds: {
    type: Number,
    required: [true, "Please enter number of beds."],
  },
  checkIn: {
    type: Date,
    required: [false, "Please enter check-in date."],
  },
  checkOut: {
    type: Date,
    required: [false, "Please enter check-out date."],
  },
  internet: {
    type: Boolean,
    default: false,
  },
  heating: {
    type: Boolean,
    default: false,
  },
  cooling: {
    type: Boolean,
    default: false,
  },
  coffeeMaker: {
    type: Boolean,
    default: false,
  },
  cleaningFee: {
    type: Boolean,
    default: false,
  },
  parking: {
    type: Boolean,
    default: false,
  },
  petAllowed: {
    type: Boolean,
    default: false,
  },
  keyPadEntry: {
    type: Boolean,
    default: false,
  },
  washer: {
    type: Boolean,
    default: false,
  },
  dryer: {
    type: Boolean,
    default: false,
  },
  ratings: {
    type: Number,
    default: 0.0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  television: {
    type: Boolean,
    default: false,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter a room category."],
    enum: {
      values: ["King", "Queen", "Twin"],
    },
    message: "Please select bed",
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: false,
      },
      name: {
        type: String,
        required: false,
      },
      rating: {
        type: Number,
        required: false,
      },
      remarks: {
        type: String,
        required: false,
      },
    },
  ],
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
});

export default mongoose.models.Room || mongoose.model('Room', roomSchema);
