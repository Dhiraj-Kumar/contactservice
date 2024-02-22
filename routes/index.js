import express from "express";
import verifyToken from "../auth/auth.js";
import {
  AddContact,
  GetContacts,
  GetContact,
  UpdateContact,
  DeleteContact,
} from "../controllers/ContactController.js";
const router = express.Router();

router.post("/contact", verifyToken, AddContact);
router.get("/contact", verifyToken, GetContacts);
router.get("/contact/:id", verifyToken, GetContact);
router.put("/contact/:id", verifyToken, UpdateContact);
router.delete("/contact/:id", verifyToken, DeleteContact);

export default router;
