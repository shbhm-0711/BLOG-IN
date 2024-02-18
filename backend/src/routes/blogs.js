import { Router } from "express";
import blogs from "../fakeData/blogs.js";
import { Msg } from "../constants/request.js";

const router = Router();

router.get("/", (req, res) => {
  console.log(res);
  res.send({ msg: Msg.OK, data: blogs });
});

export default router;
