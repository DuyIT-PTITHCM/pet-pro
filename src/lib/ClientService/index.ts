import { BASE_API } from "$lib/Const";
import { getCookie } from "$lib/Utils/cookieUtils";
import axios from "axios";

const axiosClient = axios.create({
    baseURL: BASE_API,
    headers: {
        "content-type": "application/json",
        'Authorization': 'Bearer ' + getCookie('access_token')
    },
});
export default axiosClient;