import axios from "axios";

const instance = axios.create({
  baseURL: "https://superheroapi.com/api/9918813838192214/",
});

export const getSuperHero = async (name) => {
  return await instance
    .get(`search/${name}`)
    .then((response) => response.results)
    .catch(console.error);
};
