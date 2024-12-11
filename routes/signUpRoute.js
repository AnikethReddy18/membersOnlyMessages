import { Router } from "express";
import { getSignupForm } from "../controllers/signupController.js"; 

const router = Router();

router.get("/", getSignupForm)


export default router;