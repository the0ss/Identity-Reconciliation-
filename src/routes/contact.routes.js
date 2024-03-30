import { Router } from "express";
import { registerContact } from "../controllers/contact.controller.js";

const router = Router()

router.post("",registerContact)

export default router