import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:9000",
   // baseUrl: "https://bookstore.com"
});

export default api;