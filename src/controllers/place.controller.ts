import { Request, Response } from "express";
import { PlaceService } from "../services/place.service";

export const PlaceController = {
  async createPlace(req: Request, res: Response) {
    const { title, description, category, imageUrl, authorId, lat, lng } =
      req.body;
    try {
      const newPlace = await PlaceService.createPlace(
        title,
        description,
        category,
        imageUrl,
        authorId,
        lat,
        lng
      );
      res.status(201).json(newPlace);
    } catch (error) {
      res.status(400).json({ error: "Fail to create a new place" });
    }
  },

  async getAllPlaces(req: Request, res: Response) {
    const places = await PlaceService.getAllPlaces();
    res.json(places);
  },

  async getPlaceById(req: Request, res: Response) {
    const id = req.params.id;
    const place = await PlaceService.getPlaceById(id);
    if (!place) return res.status(404).json({ message: "Place not found" });
    res.json(place);
  },

  async updatePlace(req: Request, res: Response) {
    const id = req.params.id;
    const { title, description, category, imageUrl, lat, lng } = req.body;

    try {
      const updateData: any = {};
      if (title !== undefined) updateData.title = title;
      if (description !== undefined) updateData.description = description;
      if (category !== undefined) updateData.category = category;
      if (imageUrl !== undefined) updateData.imageUrl = imageUrl;
      if (lat !== undefined) updateData.lat = lat;
      if (lng !== undefined) updateData.lng = lng;

      const placed = await PlaceService.updatePlace(id, updateData);
      if (!placed) return res.status(404).json({ message: "Place not found" });
      res.json(placed);
    } catch (error) {
      res.status(400).json({ error: "Failed to update place" });
    }
  },

  async deletePlace(req: Request, res: Response) {
    const id = req.params.id;

    try {
      await PlaceService.deletePlace(id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: "Failed to delete place" });
    }
  },
};
