import {body} from "express-validator"

const validateSignUp = [
    body("username").trim().notEmpty().withMessage("Username is empty"),
    body("password").trim().notEmpty().withMessage("Password is empty")
]

export default validateSignUp;