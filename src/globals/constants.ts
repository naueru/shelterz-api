export const STATUS = {
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNPROCESSABLE_CONTENT: 422,
  CREATED: 201,
};

export const ERROR_MESSAGE = {
  ERROR: "An unknown error ocurred.",
  NOT_FOUND: "Not found.",
  ROUTE_NOT_FOUND: "Could not find this route.",
  WRONG_CREDENTIALS: "Could not identify user. Check credentials.",
  EMAIL_ALREADY_IN_USE: "Could not create user, email already in use.",
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
    houses: 1,
    farm: 0,
    school: 0,
    hospital: 0,
    refinery: 0,
    workshop: 0,
    watchTower: 0,
    fence: 1,
    palisade: 0,
    traps: 0,
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

export const BASE_USER: TUser = {
  id: "",
  userName: "",
  email: "",
  password: "",
  image: "",
};
