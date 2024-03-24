/* const userModel = require('../controllers/usersControllers');

function userLoggedMiddleware(req, res, next) {

    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = userModel.findByField('email', emailInCookie); 

    if(userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;
    }

    

    next();
}

module.exports = userLoggedMiddleware; */