import {validationResult} from "express-validator"
import { signUp } from "../db/queries.js"
import bcrypt from "bcrypt"

export function getSignupForm(req, res){
    res.render("signup")
}

export async function postSignupForm(req, res){
    const errors = validationResult(req)
    if(errors.isEmpty()){
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        await signUp(req.body.username, hashedPassword, 2);
        res.redirect("/");
    }   
    else{
        res.redirect("/signup")
    }
}




