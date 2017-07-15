// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsData = [
  {
    "name": "Dwayne Johnson",
    "photo": "dwayne@therock.com",
    "scores": [1,5,4,3,2,3,2,2,5,1]
  },
  {
  	"name": "Frank Reynolds",
    "photo": "frank@pattys.com",
    "scores": [4,4,2,1,5,5,3,2,5,4]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsData;