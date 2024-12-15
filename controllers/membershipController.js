import pool from "../db/pool.js"

export function renderMembershipPage(req, res){
    res.render("changeMembership")
}

export async function changeMembership(req, res){
    const code = req.body.code;

    if(code == process.env.MEMBER_CODE){
        try{
        await pool.query("UPDATE users SET access_level = 1 WHERE user_id=$1", [req.user.user_id]);
        }catch(err){
            console.log(err);
        }
    }

    res.redirect("/")
}