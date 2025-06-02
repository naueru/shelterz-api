import { Document, Types } from "mongoose";

type TLocation = {
  lat: number;
  lng: number;
};

type TBuildings = {
  houses: number;
  farm: number;
  school: number;
  hospital: number;
  refinery: number;
  workshop: number;
  watchTower: number;
  fence: number;
  palisade: number;
  traps: number;
};

type TResources = {
  wood: number;
  food: number;
  water: number;
  medicalSupplies: number;
  fuel: number;
  population: number;
};

export type TShelter = {
  id: string;
  owner: string;
  name: string;
  location: TLocation;
  buildings: TBuildings;
  resources: TResources;
};

export type TShelters = TShelter[];

export interface IShelter extends Document {
  owner: Types.ObjectId;
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  buildings: TBuildings;
  resources: TResources;
}
