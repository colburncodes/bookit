
import dbConnect from "../config";

import Room from "../models/room";
import rooms from "../data/rooms";

dbConnect();

const seedRooms = async () => {
  try {
    await Room.deleteMany(); //remove room collection
    console.log("Rooms are deleted");
    await Room.insertMany(rooms);
    console.log("All rooms are added.");
  } catch (error) {
    console.error(error.message);
    process.exit();
  }
};

seedRooms();
