import { Router } from "express";
import { getHomePage, postMessage } from "../controllers/homeController.js";

const router = Router();

router.get("/", getHomePage);

router.post("/post", postMessage)

export default router;