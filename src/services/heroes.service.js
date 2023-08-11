import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/superheroe/",
});

export const getSuperHero = async (name) => {
  return await instance
    .get(`search/${name}`)
    .then((response) => response.data)
    .catch(console.error);
};
export const getSuperHeroID = async (id) => {
  return await instance
    .get(id)
    .then((response) => response.data)
    .catch(console.error);
};
