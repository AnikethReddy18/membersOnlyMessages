import pool from "../db/pool.js"

export function renderMembershipPage(req, res){
    res.render("changeMembership")
}

export async function changeMembership(req, res){
    const code = req.body.code;

    if(code == process.env.MEMBER_CODE){
        await pool.query("UPDATE users SET access_level = 1 WHERE user_id=$1", [req.user.user_id]);
    }

    else if(code == process.env.ADMIN_CODE){
        await pool.query("UPDATE users SET access_level = 0 WHERE user_id=$1", [req.user.user_id]);
    }

    res.redirect("/")
}