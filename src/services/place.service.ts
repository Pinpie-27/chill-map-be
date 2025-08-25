import { Category } from "@prisma/client";
import { PlaceRepository } from "../repositories/place.repository";

export const PlaceService = {
  async createPlace(
    title: string,
    description: string,
    category: Category,
    imageUrl: string,
    authorId: string,
    lat?: string,
    lng?: string
  ) {
    return PlaceRepository.createPlace({
      title,
      description,
      category,
      imageUrl,
      authorId,
      lat,
      lng,
    });
  },

  async getAllPlaces() {
    return PlaceRepository.getAllPlaces();
  },

  async getPlaceById(id: string) {
    return PlaceRepository.getPlaceById(id);
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
  ) {
    return PlaceRepository.updatePlace(id, data);
  },

  async deletePlace(id: string) {
    return PlaceRepository.deletePlace(id);
  },
};
