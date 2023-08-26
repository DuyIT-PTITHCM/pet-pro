import axiosClient from "../index";

const prefix = "user-management";

export default {
    async get(){
        return axiosClient.get(`${prefix}`);
    },
    async getUser(userId: any){
        return axiosClient.get(`${prefix}/${userId}`);
    },
    async put(userId: any, payload: any) {
        return axiosClient.put(`${prefix}/${userId}`, payload);
    },
    async delete(userId: any) {
        return axiosClient.delete(`${prefix}/${userId}`);
    },
};
