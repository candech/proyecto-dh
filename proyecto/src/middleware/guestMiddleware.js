function guestMiddleware(req, res, next) {
    
    if(req.session.userLogged) {
        return res.redirect('profileUser')
    }
    next();
}

module.exports = guestMiddleware;