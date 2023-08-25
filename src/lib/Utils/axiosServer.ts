import axios from "axios";

// Tạo một hàm để tạo axiosClient với token được truyền vào
export function createAxiosClient() {
  const axiosClient = axios.create({
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });
  return axiosClient;
}