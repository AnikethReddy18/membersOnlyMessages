import { Router } from "express";
import { getSignupForm, postSignupForm } from "../controllers/signupController.js"; 
import validateSignUp from "../validators/signupValidator.js"

const router = Router();

router.get("/", getSignupForm);
router.post("/", validateSignUp, postSignupForm)

export default router;