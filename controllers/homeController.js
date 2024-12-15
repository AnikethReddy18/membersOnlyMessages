import pool from "../db/pool.js";

export async function getHomePage(req, res) {
    if (req.isUnauthenticated()) {
        res.redirect("/login");
    }

    else {
        try{
        if (req.user.access_level < 2) {
            const getQuery = `SELECT username, title, content 
                          FROM posts
                          INNER JOIN users ON posts.user_id = users.user_id`


            const { rows } = await pool.query(getQuery);
            res.render("home", { user: req.user, posts: rows })
        }
        else{
            const { rows } = await pool.query("SELECT title, content FROM posts");
            res.render("home", { user: req.user, posts: rows })
        }
    }catch(err){
        log(err)
    }
    }
}

export async function postMessage(req, res) {
    if (req.isUnauthenticated()) {
        res.redirect("/login")
    }

    else {
        try{
        await pool.query("INSERT INTO posts(user_id, title, content) VALUES($1, $2, $3)", [req.user.user_id, req.body.title, req.body.content])
        }catch(error){
            console.log(error)
        }
        res.redirect("/")
    }
}