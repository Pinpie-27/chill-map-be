import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const UserController = {
  async getAllUsers(req: Request, res: Response) {
    const users = await UserService.getAllUsers();
    res.json(users);
  },

  async getUserById(req: Request, res: Response) {
    const id = req.params.id;
    const user = await UserService.getUserById(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  },

  async createUser(req: Request, res: Response) {
    const { email, name, avatar } = req.body;
    try {
      const newUser = await UserService.createUser(email, name, avatar);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: "Email already exists or invalid data" });
    }
  },
};
