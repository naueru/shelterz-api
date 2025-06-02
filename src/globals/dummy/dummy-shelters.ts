// Types
import type { TShelters } from "../../types/shelters-types.ts";

// Constants
import { BASE_SHELTER } from "../constants.ts";

const BASE_SHELTERS_LIST = new Array(5).fill(null);

const DUMMY_SHELTERS: TShelters = BASE_SHELTERS_LIST.map((_, i) => {
  return {
    ...BASE_SHELTER,
    id: `s${i}`,
    owner: `u${i % 2 === 0 ? i : 1}`,
    name: `Shelter ${i}`,
    location: { lat: i, lng: i },
  };
});

export { DUMMY_SHELTERS };
