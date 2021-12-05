import Room from "../models/room";

const getAllRooms = (req, res) => {
  res.status(200).json({
    success: true,
    message: "All Rooms",
  });
};

// Create Room => /api/rooms
const createRoom = async (req, res) => {
  try {
    const room = await Room.create(req.body);
    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status.json({
      success: false,
      error: error.message,
    });
  }
};

export { getAllRooms, createRoom };
