/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    const sha256 = require('js-sha256');

    // `dbPoolInstance` is accessible within this function scope

    let userProfile = (user, callback) => {

        // console.log(user);
        let query = 'SELECT * FROM users WHERE id = ' + user;

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                console.log('ERROR');
                console.log(error);
            }
            console.log(queryResult.rows);
            callback(error, queryResult);
        });
    };

    let updateProfile = (user, callback) => {

        let query = 'UPDATE users SET name = ($1), description = ($2) WHERE id = ($3) Returning *';
        let insertValues = [user.name, user.description, user.id];

        dbPoolInstance.query(query, insertValues, (error, queryResult) => {
            if (error) {
                console.log('ERROR');
                console.log(error);
            }
            console.log(queryResult);
            callback(error, queryResult);
        });
    };

    let socialise = (user, callback) => {

        let query = 'SELECT * FROM users WHERE NOT id = ' + user + ' ORDER BY RANDOM() LIMIT 1';

        dbPoolInstance.query(query, (error, queryResult) => {
            if (error) {
                console.log('ERROR');
                console.log(error);
            }
            // console.log(queryResult.name);
            callback(error, queryResult);
        });
    };

    let matchCheck = (user, callback) => {

        let query = 'SELECT * FROM matches WHERE (user_id1 =' + user.user2 + ' AND user_id2 =' + user.user1 + ')';

        dbPoolInstance.query(query, (error, queryResult) => {
            console.log('Checking if other user reciprocates like');
            if (error) {
                console.log('ERROR');
                console.log(error);
            }
            console.log('if value > 0, other user reciprocates like', queryResult.rows.length);

            if (queryResult.rows.length == 0) {
                let query2 = 'SELECT * FROM matches WHERE (user_id1 =' + user.user1 + ' AND user_id2 =' + user.user2 + ')';
                dbPoolInstance.query(query2, (error, queryResult2) => {
                    console.log("Checking if like has been stored befored");
                    if (error) {
                        console.log('ERROR');
                        console.log(error);
                    }
                    console.log('if value > 0, this like has already been stored', queryResult2.rows.length);

                    if (queryResult2.rows.length == 0) {
                        let query3 = 'INSERT INTO matches(user_id1, user_id2) VALUES(' + user.user1 + ', ' + user.user2 + ') Returning *';
                        dbPoolInstance.query(query3, (error, queryResult3) => {
                            console.log("Storing the like");
                            if (error) {
                                console.log('ERROR');
                                console.log(error);
                            }
                            console.log('if value > 0, this like was JUST stored', queryResult3.rows.length);
                        });
                    }
                });
            } else if (queryResult.rows.length > 0) {
                let retrieveQuery = 'SELECT matches.user_id2, users.name FROM matches INNER JOIN users ON matches.user_id2 = users.id WHERE matches.user_id2 = ' + user.user2;
                dbPoolInstance.query(retrieveQuery, (error, finalQueryResult) => {
                    console.log("Retrieving match's details");
                    if (error) {
                        console.log('ERROR');
                        console.log(error);
                    }
                });

            }

            callback(error, queryResult);
        });
    };

    return {
        userProfile, updateProfile, socialise, matchCheck,
    };
};
