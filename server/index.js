import express from "express";
import cors from "cors";

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:3000",
    //   add production url
    ],
    credentials: true,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
  })
);

//API route
app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from arunava server" });
  console.log("Hello");
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Server is running at http://localhost:${PORT}`)
);
