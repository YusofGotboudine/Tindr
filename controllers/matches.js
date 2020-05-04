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

    let randomUserGen = (request, response) => {
        let user_id = request.cookies["user_id"];
        // console.log(user_id);
        if (sha256(user_id + 'logged' + spice) === request.cookies["logged_in"]) {
            db.matches.socialise(user_id, (error, queryResult) => {
                const data = queryResult.rows[0];
                console.log("Socialise with " + data.name + "? (Y/N)");
                response.cookie('user_id2', data.id);
                response.render('matches/socialise', data);
            });
        };
    };

    let socialising = (request, response) => {
        let user_id = request.cookies["user_id"];
        let user_id2 = request.cookies["user_id2"];
        let users = { user1: user_id, user2: user_id2 };
        if (sha256(user_id + 'logged' + spice) === request.cookies["logged_in"]) {
            db.matches.matchCheck(users, (error, queryResult) => {
                const data = queryResult;
                console.log(data);
                // console.log("Matched with " + data.name);
                response.render('matches/socialising', data);
            });
        };
    };

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
        socialise: randomUserGen,
        socialising: socialising
    };

}
