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
  houses: TBuilding;
  farm: TBuilding;
  school: TBuilding;
  hospital: TBuilding;
  refinery: TBuilding;
  workshop: TBuilding;
  watchTower: TBuilding;
  palisade: TBuilding;
  traps: TBuilding;
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
