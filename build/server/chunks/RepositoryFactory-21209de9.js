import { g as getCookie } from './cookieUtils-3c057440.js';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "http://103.142.26.42/api/v1.0/",
  headers: {
    "content-type": "application/json",
    "Authorization": "Bearer " + getCookie("access_token")
  }
});
const prefix$4 = "auth";
const AuthRepository = {
  post(payload) {
    return axiosClient.post(`${prefix$4}/register`, payload);
  }
};
const prefix$3 = "categories";
const CategoryRepository = {
  async get(queryParams) {
    const response = await axiosClient.get(`${prefix$3}`, {
      params: queryParams
    });
    return response;
  }
};
const prefix$2 = "menu";
const MenuRepository = {
  async get() {
    const response = await axiosClient.get(`${prefix$2}`);
    return response;
  },
  async post(payload) {
    return await axiosClient.post(`${prefix$2}`, payload);
  },
  async put(manuId, payload) {
    return await axiosClient.put(`${prefix$2}/${manuId}`, payload);
  },
  async delete(manuId) {
    return axiosClient.delete(`${prefix$2}/${manuId}`);
  }
};
const prefix$1 = "user-management";
const UserRepository = {
  async get(queryParams) {
    const response = await axiosClient.get(`${prefix$1}`, {
      params: queryParams
    });
    return response;
  },
  async getUser(userId) {
    return axiosClient.get(`${prefix$1}/${userId}`);
  },
  async put(userId, payload) {
    return await axiosClient.put(`${prefix$1}/${userId}`, payload);
  },
  async delete(userId) {
    return axiosClient.delete(`${prefix$1}/${userId}`);
  }
};
const prefix = "products";
const ProductRepository = {
  async get(queryParams) {
    const response = await axiosClient.get(`${prefix}`, {
      params: queryParams
    });
    return response;
  },
  async show(productId) {
    return await axiosClient.get(`${prefix}/${productId}`);
  },
  async getUser(productId) {
    return axiosClient.get(`${prefix}/${productId}`);
  },
  async put(productId, payload) {
    return await axiosClient.put(`${prefix}/${productId}`, payload);
  },
  async delete(productId) {
    return axiosClient.delete(`${prefix}/${productId}`);
  },
  async post(payload) {
    return axiosClient.post(`${prefix}`, payload);
  }
};
const repositories = {
  authRepository: AuthRepository,
  userRepository: UserRepository,
  categoryRepository: CategoryRepository,
  productRepository: ProductRepository,
  menuRepository: MenuRepository
};
const RepositoryFactory = {
  get: (name) => repositories[name]
};

export { RepositoryFactory as R };
//# sourceMappingURL=RepositoryFactory-21209de9.js.map
