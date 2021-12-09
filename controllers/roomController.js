import Room from "../models/room";

// Fetch All Rooms api/rooms
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

// Create Room => api/rooms/
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

// Get Room Details => api/rooms/:id
const getRoomById = async (req, res) => {
  try {
    const room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(404).json({
        success: false,
        error: "Room not found!",
      });
    }
    res.status(200).json({ success: true, room });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Update Room details => api/rooms/:id
const editRoomById = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(404).json({
        success: false,
        error: "Room not found!",
      });
    }
    // update room
    room = await Room.findByIdAndUpdate(req.query.id, req.body, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({ success: true, room });

  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// Delete Room  => api/rooms/:id
const deleteById = async (req, res) => {
  try {
    let room = await Room.findById(req.query.id);
    if (!room) {
      return res.status(404).json({
        success: false,
        error: "Room not found!",
      });
    }
    // delete room
    room = await Room.findByIdAndDelete(req.query.id, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({ success: true, room });
    
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};


export { getAllRooms, createRoom, getRoomById, editRoomById, deleteById };
