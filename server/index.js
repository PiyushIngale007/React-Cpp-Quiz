// Create express app
var express = require("express")
var app = express()
var db = require("./database.js")

// Server port
var HTTP_PORT = 5000 
// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%",HTTP_PORT))
});

app.get("/", (req, res, next) => {
    var sql = "select * from DS_DB WHERE col_1 IN (SELECT col_1 FROM DS_DB ORDER BY RANDOM() LIMIT 10)"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
});
// Insert here other API endpoints

// Default response for any other request
app.use(function(req, res){
    res.status(404);
});