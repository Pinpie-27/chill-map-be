import { Category, Place } from "@prisma/client";
import prisma from "../prisma/client";

export const PlaceRepository = {
  async createPlace(data: {
    title: string;
    description: string;
    category: Category;
    imageUrl?: string;
    authorId: string;
    lat?: string;
    lng?: string;
  }): Promise<Place> {
    return prisma.place.create({ data });
  },

  async getAllPlaces(): Promise<Place[]> {
    return prisma.place.findMany({
      include: {
        author: true,
        comments: true,
        likes: true,
      },
    });
  },

  async getPlaceById(id: string): Promise<Place | null> {
    return prisma.place.findUnique({
      where: { id },
      include: {
        author: true,
        comments: true,
        likes: true,
      },
    });
  },

  async updatePlace(
    id: string,
    data: {
      title?: string;
      description?: string;
      category?: Category;
      imageUrl?: string;
      lat?: string;
      lng?: string;
    }
  ): Promise<Place> {
    return prisma.place.update({
      where: { id },
      data,
    });
  },

  async deletePlace(id: string): Promise<Place> {
    return prisma.place.delete({
      where: { id },
    });
  },
};
