var express = require("express"),
      app = express();

var connection = null;
app.get("/", function (req, res) {
  res.send("Welcome to Shippable");
});

app.listen(3000, function () {
  console.log('Express listening on port1112 3000');
});
