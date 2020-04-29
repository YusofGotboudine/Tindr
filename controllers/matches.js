module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homePage = (request, response) => {
        response.render('matches/home');
    };

    // let loginPage = (request, response) => {
    //     response.render('users/login');
    // };

    // let registrationPage = (request, response) => {
    //     response.render('users/register');
    // };

    // let postLogin = (request, response) => {
    //     console.log('User Logging In');
    //     // response.cookie('loggedin', true);

    //     db.users.loggedin(request.body, (error, queryResult) => {
    //         const data = queryResult.rows[0];
    //         console.log("Retrieved user data: " + data.name);
    //         response.render('users/loggedin', data);
    //     });
    // };

    // let postRegister = (request, response) => {
    //     console.log('Registering User');
    //     response.cookie('registered', true);
    //     response.cookie('loggedin', true);

    //     db.users.registering(request.body, (error, queryResult) => {
    //         const data = request.body;
    //         console.log("Registered user data: " + data.name);
    //         response.render('users/registered', data);
    //     });
    // };


    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        home: homePage
        // login: loginPage,
        // register: registrationPage,
        // loggedin: postLogin,
        // registered: postRegister

    };

}
