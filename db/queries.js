
import pool from "./pool.js"

export async function signUp(username, password, acessLevel){
    await pool.query("INSERT INTO users (username, password, access_level) VALUES($1, $2, $3)", [username, password, acessLevel])
}
