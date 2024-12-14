import {Router} from "express"
import { renderMembershipPage, changeMembership } from "../controllers/membershipController.js";

const router = Router()

router.get("/", renderMembershipPage)

router.post("/", changeMembership)

export default router;