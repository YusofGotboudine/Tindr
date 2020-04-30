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

    return {
        userProfile, updateProfile,
    };
};
