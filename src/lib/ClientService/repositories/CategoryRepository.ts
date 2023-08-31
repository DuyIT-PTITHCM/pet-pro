import axiosClient from "../index";

const prefix = "categories";

export default {
    async get(){
        return await axiosClient.get(`${prefix}`);
    }
};
