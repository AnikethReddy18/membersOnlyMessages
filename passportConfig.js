import passport from "passport";
import {Strategy} from "passport-local"
import pool from "./db/pool.js";
import bcrypt from "bcrypt"

async function verifyCallback(username, password, done){
  const {rows} = await pool.query("SELECT * FROM Users WHERE username=$1", [username]);
  const user = rows[0];
  if(!user) return done(null, false);

  const isValid = await bcrypt.compare(password, user.password)
  
  if(isValid) return done(null, user);
  else return done(null, false)
}

passport.serializeUser(function(user, done) {
    done(null, user.user_id);
});
  
passport.deserializeUser(async function(id, done) {
    const { rows } = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
    const user = rows[0];
    done(null, user);
});

const strategy = new Strategy(verifyCallback);
passport.use(strategy)