import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://103.142.26.42/api/v1.0/",
    headers: {
        "content-type": "application/json",
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
    },
});
export default axiosClient;