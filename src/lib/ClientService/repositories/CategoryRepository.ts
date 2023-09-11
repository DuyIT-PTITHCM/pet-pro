import axiosClient from "../index";

const prefix = "categories";

export default {
    async get(queryParams : any){
        const response = await axiosClient.get(`${prefix}`, {
            params: queryParams,
          });
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
