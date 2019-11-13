// LOAD DATA //
var friends = require("../data/friends.js");

// ROUTING //
module.exports = (app) => { 
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });
 
    app.post("/api/friends", (req, res) => {
       
        var maxScore = 50;
        var equallyDesp;
        var user = req.body;
        
        friends.forEach((friend) => { 
            var difference = 0; 
            for (i = 0; i < friend.scores.length; i++) {
                
                difference += Math.abs(friend.scores[i] - user.scores[i]);
            }
            if (difference < maxScore) {
                
                maxScore = difference;
                equallyDesp = friend; 
            };
        });
        
        res.json(equallyDesp); 
        friends.push(req.body);
    });
};