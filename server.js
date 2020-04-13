const express = require("express");
const app = express();
app.use(express.static("public"))

app.get("/", function(request, res) {
    res.sendFile(__dirname + "/index.html");
});

const listener = app.listen(process.env.PORT, () => {
    console.log("running the server on " + listener.address().port);
});