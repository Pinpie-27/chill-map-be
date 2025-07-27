import { UserRepository } from "../repositories/user.repository";


export const UserService = {
  async getAllUsers() {
    return UserRepository.getAllUsers();
  },

  async getUserById(id: string) {
    return UserRepository.getUserById(id);
  },

  async createUser(email: string, name: string, avatar?: string) {
    return UserRepository.createUser({ email, name, avatar });
  },
};
