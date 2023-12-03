import { Router } from "express";
import blogs from "../fakeData/blogs.js";

const router = Router();

router.get("/", (req, res) => {
  res.send({ msg: "Yet to be implemented" });
});
router.get("/fake", (req, res) => {
  console.log(res);
  res.send({ msg: "OK", data: blogs });
});

export default router;
