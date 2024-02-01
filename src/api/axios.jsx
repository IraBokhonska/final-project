import axios from "axios";

const apiKeyPixabay = process.env.REACT_APP_API_KEY_PIXABAY;

const fetchImg = (request, page) => {
  return axios.get("https://pixabay.com/api/", {
    params: {
      q: request,
      key: apiKeyPixabay,
      image_type: "photo",
      orientation: "vertical",
      per_page: 12,
      page: page,
    },
  });
};

export default fetchImg;
