import axiosClient from "../index";

const prefix = "products";

export default {
    async get(queryParams : any){
        const response = await axiosClient.get(`${prefix}`, {
            params: queryParams,
          });
        return response;
    },
    async getUser(productId: any){
        return axiosClient.get(`${prefix}/${productId}`);
    },
    async put(productId: any, payload: any) {
        return await axiosClient.put(`${prefix}/${productId}`, payload);
    },
    async delete(productId: any) {
        return axiosClient.delete(`${prefix}/${productId}`);
    },
    async post(payload: any) {
        return axiosClient.post(`${prefix}`, payload);
    },
};