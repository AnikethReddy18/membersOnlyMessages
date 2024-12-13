export default function logout(req, res){
    req.logout(()=>res.redirect("/"))
}