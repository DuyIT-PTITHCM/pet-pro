import axiosClient from "../index";

const prefix = "user-management";

export default {
    async get(queryParams : any){
        const response = await axiosClient.get(`${prefix}`, {
            params: queryParams,
          });
        return response;
    },
    async getUser(userId: any){
        return axiosClient.get(`${prefix}/${userId}`);
    },
    async info(){
        return axiosClient.get(`${prefix}/info`);
    },
    async put(userId: any, payload: any) {
        return await axiosClient.put(`${prefix}/${userId}`, payload);
    },
    async delete(userId: any) {
        return axiosClient.delete(`${prefix}/${userId}`);
    },
};
