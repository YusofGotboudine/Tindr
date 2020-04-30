module.exports = (db) => {
    const sha256 = require('js-sha256');
    const spice = "papaya64";

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let homePage = (request, response) => {
        response.render('matches/home');
    };

    let profilePage = (request, response) => {
        let user_id = request.cookies["user_id"];
        // console.log(user_id);
        if (sha256(user_id + 'logged' + spice) === request.cookies["logged_in"]) {

            db.matches.userProfile(user_id, (error, queryResult) => {
                const data = queryResult.rows[0];
                console.log(data.name + "'s Profile");
                response.render('users/profile', data);
            });
        };
    };

    let editProfilePage = (request, response) => {
        response.render('users/editprofile');
    };

    let updateProfile = (request, response) => {
        let user_id = request.cookies["user_id"];
        // console.log(user_id);
        if (sha256(user_id + 'logged' + spice) === request.cookies["logged_in"]) {
            let updates = request.body;
            updates['id'] = user_id;
            console.log(updates);
            db.matches.updateProfile(updates, (error, queryResult) => {
                const data = queryResult.rows[0];
                console.log("UserID " + data.id + "'s profile updated!");
                response.render('users/updatedprofile', data);
            });
        };
    };

    // let postLogin = (request, response) => {
    //     console.log('User Logging In');
    //     // response.cookie('loggedin', true);

    // db.users.loggedin(request.body, (error, queryResult) => {
    //     const data = queryResult.rows[0];
    //     console.log("Retrieved user data: " + data.name);
    //     response.render('users/loggedin', data);
    // });
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
        home: homePage,
        profile: profilePage,
        edit: editProfilePage,
        update: updateProfile,
        // loggedin: postLogin,
        // registered: postRegister

    };

}
