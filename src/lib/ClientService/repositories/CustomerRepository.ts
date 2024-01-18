import axiosClient from "../index";

const prefix = "customer";

export default {
    async get(code : any){
        const response = await axiosClient.get(`${prefix}/${code}`);
        return response;
    },
    async info(){
        return axiosClient.get(`${prefix}/info`);
    },
    // async post(payload: any) {
    //     return axiosClient.post(`${prefix}`, payload);
    // },
    // async put(id: any, payload: any) {
    //     return await axiosClient.put(`${prefix}/${id}`, payload);
    // }
};
