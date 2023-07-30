import axios from "axios";

const instace = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts: 1,
    apikey: "d74c7e15d978ce5a804ff9fd0e5f06be",
    hash: "b7dc9c3851664fed3ba7915860e6036c",
  },
});

export const getMarvelCharacter = async () => {
  const response = await instace.get('characters', {
    params: {},
  });
  return response.data.data;
};

export const getCharacterDetail = async (id) => {
  const response = await instace.get(`characters/${id}`);
  return response.data.data;
};
