import axios from "axios";

const instace = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: 1,
    apikey: "d74c7e15d978ce5a804ff9fd0e5f06be",
    hash: "b7dc9c3851664fed3ba7915860e6036c",
  },
});

export const getMarvelCharacter = async (params = {}) => {
  return await instace
    .get("characters", {
      params,
    })
    .then((response) => response.data.data)
    .catch(console.error);
};

export const getCharacterDetail = async (id) => {
  return await instace
    .get(`characters/${id}`)
    .then((response) => response.data.data.results[0])
    .catch(console.error);
};

export const getComicList = async (params = {}) => {
  return await instace
    .get(`comics`,{
      params,
    })
    .then((response) => response.data.data)
    .catch(console.error);
};

export const getComicDetail = async (id) => {
  return await instace
    .get(`comics/${id}`)
    .then((response) => response.data)
    .catch(console.error);
};
