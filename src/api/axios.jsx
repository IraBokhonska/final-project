import axios from "axios";

const apiKeyPixabay = process.env.REACT_APP_API_KEY_PIXABAY;

console.log("apiKeyPixabay", apiKeyPixabay);

const fetchImg = (request, page) => {
  return axios.get("https://pixabay.com/api/", {
    params: {
      q: request,
      key: apiKeyPixabay,
      image_type: "photo",
      orientation: "vertical",
      per_page: 9,
      page: page,
    },
  });
};

export default fetchImg;