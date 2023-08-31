import { g as getCookie } from './cookieUtils-3c057440.js';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "http://103.142.26.42/api/v1.0/",
  headers: {
    "content-type": "application/json",
    "Authorization": "Bearer " + getCookie("access_token")
  }
});
const prefix$3 = "auth";
const AuthRepository = {
  post(payload) {
    return axiosClient.post(`${prefix$3}/register`, payload);
  }
};
const prefix$2 = "categories";
const CategoryRepository = {
  async get() {
    return await axiosClient.get(`${prefix$2}`);
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
  productRepository: ProductRepository
};
const RepositoryFactory = {
  get: (name) => repositories[name]
};

export { RepositoryFactory as R };
//# sourceMappingURL=RepositoryFactory-8144373c.js.map
