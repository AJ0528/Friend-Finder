var friends = require("../data/friends");
;

app.get("/app/data/friends", function(req, res) {
    res.json(tableData);
  });

module.exports = function (app) {

}