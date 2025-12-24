import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import studentRoute from "./routes/student.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
 res.send("Hello World");
});

app.use("/api/student", studentRoute);

app.use((err, req, res, next) => {
 console.error(err.stack);
 res.status(500).json({ error: "Internal Server Error" });
});

app.listen(PORT, () => {
 console.log(`Listening on Port ${PORT}`);
});
