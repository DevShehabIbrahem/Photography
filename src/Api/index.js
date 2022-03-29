import axios from "axios";
const API_KEY = "26273485-a8160688426c2a0b5b5e6d744";
const URL = "https://pixabay.com/api/";

export const fetchImages = async () => {
  const prosses = await axios.get(
    `${URL}/?key=${API_KEY}&q=horror&image_type=photo&category&per_page=200&safesearch=true`
  );
  return prosses;
};
