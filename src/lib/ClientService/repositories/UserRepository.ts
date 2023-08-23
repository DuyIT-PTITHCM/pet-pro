import axiosClient from "../index";

const prefix = "user-management";

export default {
    async get(){
        return axiosClient.get(`${prefix}`);
    },
};
