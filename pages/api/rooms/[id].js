import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";
import {
  getRoomById,
  editRoomById,
  deleteById,
} from "../../../controllers/roomController";

const handler = nc();
dbConnect();

handler.get(getRoomById);
handler.put(editRoomById);
handler.delete(deleteById);

export default handler;
