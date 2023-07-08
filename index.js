const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const userRouter = require("./route/userRoute");

// configuration
dotenv.config();

// object
const app = express();

// middleware
app.use(express.json());

// route
app.use("/api/v1", userRouter);

app.use("/", (req, res) => {
  res.send("Your are about to connect to mongodb server");
});

// listen server
// app.listen(5000, () => console.log("Server is listening in the port: 5000..."));
const PORT = 5000 || process.env.PORT;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is running on PORT: ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
