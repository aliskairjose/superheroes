import axios from "axios";

const instance = axios.create({
  baseURL: "https://rickandmortyapi.com/api/",
});

export const getListCharacter = async ({
  page = 1,
  name = "",
  gender = "",
  status = "",
}) => {
  return await instance
    .get("character", {
      params: {
        page,
        name,
        gender,
        status,
      },
    })
    .then((response) => response.data);
};

export const getListEpisodes = async ({ name = "", episode = "" }) => {
  return await instance
    .get("episode", {
      params: { name, episode },
    })
    .then((response) => response.data);
};
