import mongoose from "mongoose";

// Types
import type { IShelter } from "../types/shelters-types";

const shelterSchema = new mongoose.Schema<IShelter>({
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  name: { type: String, required: true },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  buildings: {
    houses: { type: Number, required: true },
    farm: { type: Number, required: true },
    school: { type: Number, required: true },
    hospital: { type: Number, required: true },
    refinery: { type: Number, required: true },
    workshop: { type: Number, required: true },
    watchTower: { type: Number, required: true },
    fence: { type: Number, required: true },
    palisade: { type: Number, required: true },
    traps: { type: Number, required: true },
  },
  resources: {
    wood: { type: Number, required: true },
    food: { type: Number, required: true },
    water: { type: Number, required: true },
    medicalSupplies: { type: Number, required: true },
    fuel: { type: Number, required: true },
    population: { type: Number, required: true },
  },
});

export const ShelterModel = mongoose.model("Shelter", shelterSchema);
