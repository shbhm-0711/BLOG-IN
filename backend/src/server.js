import env from "dotenv";
env.config();
import express from "express";
import cors from "cors";
import blogs from "./routes/blogs.js";

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1/blogs", blogs);

const port = process.env.PORT || 4000;

app.get("/api", (req, res) => {
  res.send({ msg: "<h1>go to /api/v1 or /api/v2  for api routes</h1>" });
});

app.get("/api/v1", (req, res) => {
  res.send({ msg: "Welcome" });
});

app.listen(port, () => {
  console.log(`Server serving on http://localhost:${port}`);
});
