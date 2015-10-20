var request       = require('request'),
    q             = require('q'),
    usersData    = require('./data-users.json');//,
//    gamesData     = require('./data-games.json'),
//    teamsData     = require('./data-teams.json'),
//    locationsData = require('./data-locations.json');

var url = 'https://thermo-fisher.azure-mobile.net/tables';

uploadData(url + '/users', usersData);



function uploadData(url, data) {
    var promises = [];

    for (var i = 0; i < data.length; i++) {
        addRecord(data[i]);
    }


    function addRecord(itemToAdd) {
        var deferred = q.defer();
        promises.push(deferred.promise);

        var options = {
            url: url,
            headers: {
                'Content-Type': 'application/json',
                'X-ZUMO-APPLICATION': 'tMIJKjLmFPbpLrgwPzQPkaysfjHCtF42'
            },
            form: itemToAdd
        };

        request.post(options, function(error, response, body) {
            //console.log("Response: ", body);
            //console.log("Request Complete.");
            deferred.resolve();
        });
    }

    return q.all(promises);
}
