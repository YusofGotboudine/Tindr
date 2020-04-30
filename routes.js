module.exports = (app, allModels) => {

    // require the controller
    const usersController = require('./controllers/users')(allModels);
    const matchesController = require('./controllers/matches')(allModels);

    app.get('/', usersController.index);

    app.get('/login', usersController.login);

    app.get('/register', usersController.register);

    app.post('/loggedin', usersController.loggedin);

    app.post('/registered', usersController.registered);

    app.get('/home', matchesController.home);

    app.get('/profile', matchesController.profile);

    app.get('/editprofile', matchesController.edit);

    app.post('/profile/', matchesController.update);


};
