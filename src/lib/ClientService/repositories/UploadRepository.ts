import { getCookie } from "$lib/Utils/cookieUtils";
import axiosClient from "../index";

const prefix = "upload";

export default {

    async uploadFile(payload: any) {
        return axiosClient.post(`${prefix}`, payload, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': 'Bearer ' + getCookie('access_token')
            },
        });
    },
    async deleteFile(payload: any) {
        return axiosClient.post(`${prefix}/delete`, payload);
    },
};
