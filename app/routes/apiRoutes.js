var friends = require("../data/friends");
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsArr);
  });
app.post("/api/friends", function(req, res) {
    var num = [];
    for (index = 0; index < friends.length; i++) {
      var answer = 0;
      for (x = 0; x < 10; x++) {
       answer += Math.abs(parseInt(friends[i].num[x])-parseInt(req.body.num[x]));
      }
      num.push(parseInt(answer));
    }
    var match = num.indexOf(Math.min(...num));
    res.json({
      name: friends[match].name,
      photo: friends[match].photo
    });
    friends.push(req.body);
  });
};

