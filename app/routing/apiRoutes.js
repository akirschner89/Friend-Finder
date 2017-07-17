var friendsData = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        friendsData.push(req.body);
        console.log("\n----------------" + "\n scores for new entry " + req.body.scores);
        console.log(friendsData);

        for (var i = 0; i < friendsData.length; i++) {
            console.log("\n----------------" + "\n scores for each index in friendsData " + friendsData[i].scores);
        };

        // function findMatch(data) {
        //   for (var i = 0; i < friendsData.length; i++) {
        //       for (var x = 0; x < 10; x++) {
        //         newIndexScore = Math.abs(data[x] - friendsData[i].scores[x]);
        //         console.log(newIndexScore);
        //       }
        // };

        // findMatch(req.body.scores);
        // }
        res.json(true);
    });
};
