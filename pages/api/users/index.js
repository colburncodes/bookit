import nc from "next-connect";
import dbConnect from "../../../config/dbConnect";

import { getUsers, createUser } from "../../../controllers/userController";

const handler = nc();

dbConnect();


// USER
handler.get(getUsers);
handler.post(createUser);

export default handler;