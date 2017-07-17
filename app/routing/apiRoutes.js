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

// pseudo code for matching

// friendsData[this.length-1].scores for the newewst entry

// for loop from friendsData.length -1 to pull in all the previous objects in the array
// compare their score from this.legnth-1 score to the other objects before it using Math.abs for loop through each index in each score
// use a var counter to add each index from math.abs together at the end = total difference
// match the totaldifference index number that's closest to 0 to the onject in the friendsData array the new entry was matched too
// include this as the data for the post AJAX call on survey.html to include in the modal

        res.json(true);
    });
};
