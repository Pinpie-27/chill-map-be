import prisma from "../prisma/client";

export const UserRepository = {
  async getAllUsers() {
    return prisma.user.findMany();
  },

  async getUserById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        places: true,
        comments: true,
        likes: true,
      },
    });
  },

  async createUser(data: { email: string; name: string; avatar?: string }) {
    return prisma.user.create({ data });
  },
};
