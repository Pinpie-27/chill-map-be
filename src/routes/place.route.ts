import { Router } from "express";
import { PlaceController } from "../controllers/place.controller";

const router = Router();

router.get("/getAllPlace", PlaceController.getAllPlaces);
router.post("/createPlace", PlaceController.createPlace);
router.get("/getPlaceById/:id", PlaceController.getPlaceById);
router.put("/updatePlace/:id", PlaceController.updatePlace);
router.delete("/deletePlace/:id", PlaceController.deletePlace);

export default router;
