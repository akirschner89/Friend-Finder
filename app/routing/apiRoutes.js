var friendsData = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);

        var newScore = 0;

        for (var i = 0; i < 10; i++) {
            newScore += parseInt(req.body.scores[i]);
        };




        var targetScore = 0;

        var x = 0;

        var friendScore = 0;

        findScore();

        function findScore() {

            var s = friendsData[x].scores.map(Number);


            var friendScore = s.reduce(function(sum, value) {
                return sum + value;
            }, 0);

            difference = Math.abs(newScore - friendScore);

            matchScore();
        }



        function matchScore() {
            if (difference === targetScore) {

                return friendsData[x];
            } else {
                x++;
                if (x === friendsData.length - 1) {
                    x = 0;
                    targetScore++;
                }
                
                findScore();
            }
        }

        res.json(friendsData[x]);
    });
};