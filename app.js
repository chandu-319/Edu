// 
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));  // Serve static files from the public directory
app.set('views', path.join(__dirname, 'views'));  // Set the views directory

// Route for the form
app.get("/form", (req, res) => {
    res.render("form.ejs");
});

// Route for the thank you page
app.get("/thankyou", (req, res) => {
    res.render("thankyou.ejs");
});

// Route for the homepage
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// Start the server
app.listen(port, () => {
    console.log("App is listening on port " + port);
});
