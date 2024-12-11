import { use } from "passport"
import pool from "./pool.js"

export async function signUp(username, password, acessLevel){
    await pool.query("INSERT INTO users VALUES($1, $2, $3)", [username, password, acessLevel])
}