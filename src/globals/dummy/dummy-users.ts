import { BASE_USER } from "../constants.ts";

const BASE_USERS_LIST = new Array(5).fill(null);

const DUMMY_USERS: TUsers = BASE_USERS_LIST.map((_, i) => {
  return {
    ...BASE_USER,
    id: `u${i}`,
    userName: `User ${i}`,
    email: `user${i}@shelterz.com`,
    password: "1234",
  };
});

export { DUMMY_USERS };
