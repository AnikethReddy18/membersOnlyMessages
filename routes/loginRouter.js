import { Router } from "express";
import { getLoginForm } from "../controllers/loginContoller.js";
import passport from "passport";

const router = Router();

router.get("/", getLoginForm);

router.post("/", passport.authenticate('local',{
    successRedirect: "/",
    failureRedirect: "/login"
}))

export default router;