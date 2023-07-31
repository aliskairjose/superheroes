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
    .then((response) => response.data)
    .catch(console.error);
};

export const getListEpisodes = async ({ query = "" }) => {
  let response = null;
  response = await instance
    .get("episode", { params: { name: query } })
    .then((response) => response.data)
    .catch(console.error);

  if (!response) {
    response = await instance
      .get("episode", { params: { episode: query } })
      .then((response) => response.data)
      .catch(console.error);
  }

  return response;
};
