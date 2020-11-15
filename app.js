const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const firebase = require("firebase");
const firebaseConfig = require("./firebase.js");
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Routes Import
const indexRoute = require("./routes/index.js");
const postRoute = require("./routes/post.js");
const createRoute = require("./routes/createBlogPost.js");

// Routes
app.use("/", indexRoute);
app.use("/post", postRoute);
app.use("/create", createRoute);

app.listen(port, () => {
  console.log("Exercise Four is running!");
});
