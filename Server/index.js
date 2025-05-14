import express from "express";
import cors from "cors";
import ConnectToMongo from "./config/db.js";
import authRoutes from "./routes/blog.js";

const app = express();
const PORT = 9000;

// Connect to MongoDB
ConnectToMongo();

// Middleware to handle CORS
app.use(cors());

// Middleware to parse JSON bodies in request
app.use(express.json());

// Serve static files (images) from the 'public/upload' directory
app.use("/uploads", express.static("public/upload"));

// Add routes
app.get("/", (req, res) => {
  res.send("API is Running....");
});

// Use the API routes for blog operations
app.use("/api/v1", authRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`API is running on ${PORT}`);
});
