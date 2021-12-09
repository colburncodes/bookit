import Room from "../models/room";

const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    if (rooms) {
      res.status(200).json({ success: true, rooms });
    }
  } catch (error) {
    res.status.json({
      success: false,
      error: error.message,
    });
  }
};

// Create Room
const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    if (room) {
      res.status(200).json({ success: true, room });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export { getAllRooms, createRoom };
