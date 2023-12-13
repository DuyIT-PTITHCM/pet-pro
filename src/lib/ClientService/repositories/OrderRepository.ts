import axiosClient from "../index";

const prefix = "orders";

export default {
    async get(queryParams : any){
        const response = await axiosClient.get(`${prefix}`, {
            params: queryParams,
          });
        return response;
    },
    async put(orderId: any, payload: any) {
        return await axiosClient.put(`${prefix}/${orderId}/status`, payload);
    },
};
