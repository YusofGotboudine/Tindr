module.exports = (db) => {
    const sha256 = require('js-sha256');
    const spice = "papaya64";

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let indexPage = (request, response) => {
        response.cookie('user_id', '');
        response.cookie('user_id2', '');
        response.cookie('logged_in', '');
        response.render('users/index');
    };

    let loginPage = (request, response) => {
        response.render('users/login');
    };

    let registrationPage = (request, response) => {
        response.render('users/register');
    };

    let postLogin = (request, response) => {
        console.log('User Logging In');

        db.users.loggedin(request.body, (error, queryResult) => {
            const data = queryResult.rows[0];
            console.log(data);
            let user_id = data.id;
            let currentSession = sha256(user_id + 'logged' + spice);
            console.log(currentSession);
            response.cookie('user_id', user_id);
            response.cookie('logged_in', currentSession);
            console.log("Retrieved user data: " + data.name);
            response.render('users/loggedin', data);
        });
    };

    let postRegister = (request, response) => {
        console.log('Registering User');

        db.users.registering(request.body, (error, queryResult) => {
            const data = queryResult.rows[0];
            console.log(data);
            let user_id = data.id;
            let currentSession = sha256(user_id + 'logged' + spice);
            console.log(currentSession);
            response.cookie('user_id', user_id);
            response.cookie('logged_in', currentSession);
            console.log("Registered user data: " + data.name);
            response.render('users/registered', data);
        });
    };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: indexPage,
        login: loginPage,
        register: registrationPage,
        loggedin: postLogin,
        registered: postRegister

    };

}
