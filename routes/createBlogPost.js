// Create blogposts
const express = require("express");
const router = express.Router();

// Require Firebase
const firebase = require("firebase");
// Initialize Firestore Database
const database = firebase.firestore();
// Reference specific collection
const blogposts = database.collection("blogposts");

const form = `
<form action="/create/submit">
  <input type="text" name="title" placeholder="Title of Post" />
  <input type="text" name="text" placeholder="Text of Post" />
  <input type="text" name="author" placeholder="Author" />
  <button type="submit">Submit Post</button>
</form>
`;

router.get("/", (req, res) => res.send(form));

router.get("/submit", (req, res) => {
  const queryParams = req.query;
  const idFromTitle = queryParams.title.replace(/\s+/g, "-").toLowerCase();

  blogposts
    .doc(idFromTitle)
    .set(queryParams)
    .then((doc) => {
      res.send("Successful Submission.");
    })
    .catch((error) => {
      res.send("Failed Submission.");
    });
});

module.exports = router;
