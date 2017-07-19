var friendsData = require("../data/friends.js");


module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        // console.log(req.body);
        friendsData.push(req.body);
        // console.log("\n----------------" + "\n scores for new entry " + req.body.scores);
        // console.log(friendsData);

        // for (var i = 0; i < friendsData.length; i++) {
        //     console.log("\n----------------" + "\n scores for each index in friendsData " + friendsData[i].scores);
        // };

        // pseudo code for finding the best match

        // score total for the newewst entry
        var newScore = 0;

        for (var i = 0; i < 10; i++) {
            newScore += parseInt(req.body.scores[i]);
        };

        console.log("this is the new score - score of the newest friend submitted: " + newScore);

        //set target var to 0
        var targetScore = 0;
        console.log("starting targetScore: " + targetScore);
        //set counter for index of friendsData
        var x = 0;
        console.log("starting index counter to move through friendsData array: " + x);
        var friendScore = 0;
        // console.log("starting friendScore placeholder for the score of each scoreindex of friendsData: " + friendScore);
        findScore();
        //function to find the score of existing data one at a time using parseInt
        function findScore() {
            console.log("\n------------------------------" + "\nThe goal is for difference to match the targetScore");
            console.log("The current friend is: " + friendsData[x].name)
            var s = friendsData[x].scores.map(Number);
            // parseInt(s);
            console.log("should be an array of numbers for the current friend: " + s);
            // console.log("this data type is actually: " + typeOf(s));
            var friendScore = s.reduce(function(sum, value) {
                return sum + value;
            }, 0);
            console.log("updated friend score: " + friendScore);
            console.log("newest entry score: " + newScore);
            //find the difference between first index of friendData vs newScore using math.abs
            difference = Math.abs(newScore - friendScore);
            console.log("difference: " + difference);
            matchScore();
        }


        //call the function to match the diff to the target
        //function match the difference to a "target" - starting at 0
        function matchScore() {
            if (difference === targetScore) {
                //if diff equals target, return that index of friendsData
                console.log("this is the info that matches: ");
                console.log(friendsData[x]);
                return friendsData[x];
            }
            //else increase counter and start again
            else {
                x++;
                // targetScore++;
                if (x === friendsData.length -1) {
                    x = 0;
                    targetScore++;
                }

                // if (x % friendsData.length - 1 === 0) {
                //   targetScore++;
                // }
                console.log("new round targetScore: " + targetScore);
                console.log("new round counter: " + x);
                findScore();
            }
        }






        // for loop from friendsData.length -1 to pull in all the previous objects in the array
        // compare their score from this.legnth-1 score to the other objects before it using Math.abs for loop through each index in each score
        // use a var counter to add each index from math.abs together at the end = total difference
        // match the totaldifference index number that's closest to 0 to the onject in the friendsData array the new entry was matched too
        // include this as the data for the post AJAX call on survey.html to include in the modal

        res.json(friendsData[x]);
    });
};
