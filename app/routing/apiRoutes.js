// DEPENDENCIES //
var path = require("path");
var friends = require("../data/friends.js");

module.exports = (app) => { 
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    });
 
    app.post("/api/friends", (req, res) => {
        console.log("post request received.\n");
       
        var maxDifference = 50; //maximum allowed difference between users. 5 points per 10 questions (5 * 10 = 50)
        var matchedFriend; //empty friend object to send back
        var currentFriend = req.body; //set post request object to currentFriend
        console.log("current friend: " + currentFriend + "\n");
        friends.forEach((friend) => { 
            var difference = 0; 
            for (i = 0; i < friend.scores.length; i++) {
                
                difference += Math.abs(friend.scores[i] - currentFriend.scores[i]);
            }
            if (difference < maxDifference) {
                
                maxDifference = difference;
                matchedFriend = friend; 
            };
        });
        res.json(matchedFriend); 
        friends.push(req.body);
    });
};