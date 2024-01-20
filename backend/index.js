import express from "express";
import connectDB from "./db/index.js";
import dotenv from "dotenv";
import routes from "./routes/book.routes.js";
import cors from "cors";

// config environment variable
dotenv.config({
  path: "./.env",
});

// create app using express
const app = express();

// init port
const port = process.env.PORT || 5555;

// use middleware
app.use(express.json());
// use cors policy
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-type"],
  })
);

app.get("/", (req, res) => {
  return res.status(200).send(`app is running on port ${port}`);
});

// set routes
app.use("/books", routes);

// connect to database
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`app is listing on port ${port}`);
    });
    console.log("connect mongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });
