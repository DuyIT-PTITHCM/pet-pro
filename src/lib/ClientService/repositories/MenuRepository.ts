import axiosClient from "../index";

const prefix = "menu";

export default {
    async get(){
        const response = await axiosClient.get(`${prefix}`);
        return response;
    },
    async post(payload: any) {
        return await axiosClient.post(`${prefix}`, payload);
    },
    async put(manuId: any, payload: any) {
        return await axiosClient.put(`${prefix}/${manuId}`, payload);
    },
    async delete(manuId: any) {
        return axiosClient.delete(`${prefix}/${manuId}`);
    },
};
