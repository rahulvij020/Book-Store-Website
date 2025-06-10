const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const {connectDB} = require("./lib/db");
const bookRouter = require("./routes/book.route");

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());
// app.use(
//   cors({
//     origin: `http://localhost:${process.env.PORT}`,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type"],
//   })
// );

app.use("/books", bookRouter);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running at address http://localhost:${PORT}`);
  connectDB();
});
