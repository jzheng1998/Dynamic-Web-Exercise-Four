const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

const firebaseConfig = {
  apiKey: "AIzaSyAxLeGOi9T4qIKDpVTkiIGiM8Xjn8mn2_U",
  authDomain: "dm---exercise-four.firebaseapp.com",
  databaseURL: "https://dm---exercise-four.firebaseio.com",
  projectId: "dm---exercise-four",
  storageBucket: "dm---exercise-four.appspot.com",
  messagingSenderId: "977913621456",
  appId: "1:977913621456:web:1f1ff441ac73cb03b527d5",
};
const firebase = require("firebase");
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
