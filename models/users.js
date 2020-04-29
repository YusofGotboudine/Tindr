/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {
    const sha256 = require('js-sha256');

    // `dbPoolInstance` is accessible within this function scope

    let registering = (user, callback) => {

        let query = 'INSERT INTO users(name, password, email, description) Values ($1, $2, $3, $4) Returning *';
        // console.log(user.password);
        let hashPW = sha256(user.password);
        // console.log(hashPW);
        let insertValues = [user.name, hashPW, user.email, user.description];

        dbPoolInstance.query(query, insertValues, (error, queryResult) => {
            if (error) {
                console.log('ERROR');
                console.log(error);
            }
            console.log(queryResult.rows);
            callback(error, queryResult);
        });
    };

    let loggedin = (user, callback) => {

        let query = 'SELECT * FROM users WHERE email = ($1) AND password = ($2)';
        // console.log(user.password)
        let hashPW = sha256(user.password);
        let insertValues = [user.email, hashPW];

        dbPoolInstance.query(query, insertValues, (error, queryResult) => {
            if (error) {
                console.log('ERROR');
                console.log(error);
            }
            console.log(queryResult.rows);
            callback(error, queryResult);
        });
    };

    return {
        registering, loggedin,
    };
};
