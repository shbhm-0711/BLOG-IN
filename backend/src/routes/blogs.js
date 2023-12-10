import { Router } from "express";
import blogs from "../fakeData/blogs.js";

const router = Router();

router.get("/", (req, res) => {
  console.log(res);
  res.send({ msg: "OK", data: blogs });
});

export default router;
