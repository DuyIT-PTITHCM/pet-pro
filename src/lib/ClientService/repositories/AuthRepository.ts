import axiosClient from "../index";

const prefix = "auth";

export default {
    post(payload: any) {
        return axiosClient.post(`${prefix}/register`, payload);
    },
};
