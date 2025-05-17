type TLocation = {
  lat: number;
  lng: number;
};

type TBuilding = {
  title: string;
  description: string;
  level: number;
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

type TShelter = {
  id: string;
  owner: string;
  name: string;
  location: TLocation;
  buildings: TBuildings;
  resources: TResources;
};

type TShelters = TShelter[];
