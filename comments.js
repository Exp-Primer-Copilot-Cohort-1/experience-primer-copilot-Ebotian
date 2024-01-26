// Create web server
// 1. Load express module
const express = require("express");
// 2. Create web server
const app = express();
// 3. Set port
const port = 3000;
// 4. Set template engine
app.set("view engine", "pug");
app.set("views", "./views");
// 5. Create route
app.get("/", (req, res) => {
    res.render("index", {
        name: "AAA"
    });
});
// 6. Listen for request
app.listen(port, () => console.log(`Server listening on port ${port}`));