//Package imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from 'path'
//File imports
import authRoutes from "./routes/auth.routes.js";
import messagesRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDB.js";
import { app, server } from "./socket/socket.js";
// const app = express();

const PORT = process.env.PORT || 5001;

const __dirname = path.resolve();
dotenv.config()

app.use(express.json()) //Used to parse incoming req with json payloads

app.use(cookieParser());

// app.get("/", (req, res) => {
//   //Root route http://localhost5000
//   res.send("Hello World");
// });

// app.get("/api/auth/", (req, res) => {
//     res.send("signup route");
// })
// app.get("/api/auth/", (req, res) => {
//     res.send("signin route");
// })
// app.get("/api/auth/", (req, res) => {
//     res.send("signout route");
// })

app.use("/api/auth", authRoutes);
app.use("/api/messages", messagesRoutes);
app.use("/api/users", userRoutes);


app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
// })

server.listen(PORT, () => {
  console.log(`server runing on port ${PORT}`);
  connectToMongoDB();
});
