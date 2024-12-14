export function getHomePage(req, res){
    if(req.isUnauthenticated()){
        res.redirect("/login");
    }

    else{
        res.render("home", {user: req.user})
    }
}