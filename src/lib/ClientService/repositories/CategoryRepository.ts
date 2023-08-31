import axiosClient from "../index";

const prefix = "categories";

export default {
    async get(queryParams : any){
        const response = await axiosClient.get(`${prefix}`, {
            params: queryParams,
          });
        return response;
    },
};
