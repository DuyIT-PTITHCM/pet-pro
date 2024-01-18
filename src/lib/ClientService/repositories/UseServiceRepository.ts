import axiosClient from "../index";

const prefix = "use-services";

export default {
    async get(code : any){
        const response = await axiosClient.get(`${prefix}/${code}`);
        return response;
    },
    async post(payload: any) {
        return axiosClient.post(`${prefix}`, payload);
    },
    async put(id: any, payload: any) {
        return await axiosClient.put(`${prefix}/${id}`, payload);
    }
};
