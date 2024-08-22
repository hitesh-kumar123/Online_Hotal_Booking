const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");

app.get("/", (req, res) => {
  res.send("Hi I am root user!");
});

app.use("/users", users);
app.use("/posts", posts);

app.get("/admin", (req,res) =>{
  
})

app.listen(3000, () => {
  console.log("server is listing to 3000");
});
