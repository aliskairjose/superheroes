import axios from "axios";

const instace = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: 1,
    apikey: "d74c7e15d978ce5a804ff9fd0e5f06be",
    hash: "b7dc9c3851664fed3ba7915860e6036c",
  },
});

export const getMarvelCharacter = async ({ limit = 20, offset = 0 }) => {
  return await instace
    .get("characters", {
      params: {
        limit,
        offset,
      },
    })
    .then((response) => response.data)
    .catch(console.error);
};

export const getCharacterDetail = async (id) => {
  return await instace
    .get(`characters/${id}`)
    .then((response) => response.data)
    .catch(console.error);
};

export const getComicList = async () => {
  return await instace
    .get(`comics`)
    .then((response) => response.data)
    .catch(console.error);
};

export const getComicDetail = async (id) => {
  return await instace
    .get(`comics/${id}`)
    .then((response) => response.data)
    .catch(console.error);
};
