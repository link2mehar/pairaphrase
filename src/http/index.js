import axios from "axios";

const instance = axios.create({
  baseURL: "https://app.pairaphrase.com/apiv2"
});

export default instance;
