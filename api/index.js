const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const path = require("path");
const multer = require("multer");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "/images")));

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(()=>{
      console.log("Connected to the database...");
  }).catch((err)=>{
      console.log('Connection unsuccessful...')
  })
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "images");
    },
    filename: (req, file, cb) => {
        cb(null, "hello.jpeg");
    },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/posts", postRoute);

app.listen("5000", ()=>{
    console.log('Backend is running...')
})