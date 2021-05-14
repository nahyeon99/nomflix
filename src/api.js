import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "c55ab2965ce5a9595286ad2b00230001",
    language: "en-US",
  },
});

// 절대경로는 baseURL 덮어쓰므로, 상대경로로 작성
api.get("tv/popular");

export default api;
