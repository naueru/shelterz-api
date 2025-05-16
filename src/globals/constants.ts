export const STATUS = {
  NOT_FOUND: 404,
  CREATED: 201,
};

export const ERROR_MESSAGE = {
  ERROR: "An unknown error ocurred",
  NOT_FOUND: "Not found",
  ROUTE_NOT_FOUND: "Could not find this route",
};

export const BASE_SHELTER: TShelter = {
  id: "",
  owner: "",
  name: "",
  location: {
    lat: 0,
    lng: 0,
  },
  buildings: {
    houses: {
      title: "",
      description: "",
      level: 0,
    },
    farm: {
      title: "",
      description: "",
      level: 0,
    },
    school: {
      title: "",
      description: "",
      level: 0,
    },
    hospital: {
      title: "",
      description: "",
      level: 0,
    },
    refinery: {
      title: "",
      description: "",
      level: 0,
    },
    workshop: {
      title: "",
      description: "",
      level: 0,
    },
    watchTower: {
      title: "",
      description: "",
      level: 0,
    },
    palisade: {
      title: "",
      description: "",
      level: 0,
    },
    traps: {
      title: "",
      description: "",
      level: 0,
    },
  },
  resources: {
    wood: 0,
    food: 0,
    water: 0,
    medicalSupplies: 0,
    fuel: 0,
    population: 0,
  },
};
