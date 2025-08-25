import { Router } from "express";
import { UserController } from "../controllers/user.controller";

const router = Router();

router.get("/getAllUser", UserController.getAllUsers);
router.get("/:id", UserController.getUserById);
router.post("/createUser", UserController.createUser);

export default router;
