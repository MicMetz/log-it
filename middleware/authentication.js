// export a function to check if the user exists, to access routes.
exports.isAuth = (req,res,next) => {
    // if the user exists in session storage.
    if(req.session.user && req.session.user.role === "user") {
        next();
    } else {
        // res.redirect("/login");
        next();
    }
}
