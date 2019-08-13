const friends = require('../data/friends');
module.exports = function(app) {
    app.post('/api/friends', (req, res) => {
        let userResults = [];
        let bestMatch;

        for(prop in req.body) {
            if (req.body.hasOwnProperty(prop)){
                userResults.push(parseInt(req.body[prop]));
            }
        }

        let leastDifferent = undefined;
        friends.forEach(element => {
            let difference = 0;
            for (let i = 0; i < element.scores.length; i++) {
                difference += Math.abs(element.scores[i] - userResults[i]);
            }
            if (leastDifferent === undefined || difference < leastDifferent) {
                leastDifferent = difference;
                bestMatch = element;
            }
        });

        console.log(userResults, bestMatch)

        res.json(bestMatch);
    });
}