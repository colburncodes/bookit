import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { getAllRooms, createRoom } from "../../../controllers/roomController";

const handler = nc();

dbConnect();

handler.get(getAllRooms);
handler.post(createRoom);

export default handler;
