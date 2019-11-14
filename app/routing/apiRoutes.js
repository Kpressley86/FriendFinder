// DEPENDENCIES //
var path = require("path");
var friends = require("../data/friends.js");

// ROUTING //
module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends);
    });

    app.post('/api/friends', (req, res) => {

        var totalDifference;
        var lowestDifference = 41;
        var match;
        var user = req.body

        for (var i in friends) {
            totalDifference = 0;

            for (var j in friends[i].scores) {
                totalDifference += Math.abs(friends[i].scores[j] - user.scores[j])
            }
            if (totalDifference < lowestDifference) {
                lowestDifference = totalDifference;
                match = friends[i]
            }
        };
        friends.push(user)
        res.send([match, lowestDifference])
    });
};