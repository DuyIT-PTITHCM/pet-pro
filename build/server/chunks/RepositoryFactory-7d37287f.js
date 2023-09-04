import { g as getCookie } from './cookieUtils-3c057440.js';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: "http://103.142.26.42/api/v1.0/",
  headers: {
    "content-type": "application/json",
    "Authorization": "Bearer " + getCookie("access_token")
  }
});
const prefix$6 = "auth";
const AuthRepository = {
  post(payload) {
    return axiosClient.post(`${prefix$6}/register`, payload);
  }
};
const prefix$5 = "categories";
const CategoryRepository = {
  async get(queryParams) {
    const response = await axiosClient.get(`${prefix$5}`, {
      params: queryParams
    });
    return response;
  }
};
const prefix$4 = "menu";
const MenuRepository = {
  async get() {
    const response = await axiosClient.get(`${prefix$4}`);
    return response;
  },
  async post(payload) {
    return await axiosClient.post(`${prefix$4}`, payload);
  },
  async put(manuId, payload) {
    return await axiosClient.put(`${prefix$4}/${manuId}`, payload);
  },
  async delete(manuId) {
    return axiosClient.delete(`${prefix$4}/${manuId}`);
  }
};
const prefix$3 = "user-management";
const UserRepository = {
  async get(queryParams) {
    const response = await axiosClient.get(`${prefix$3}`, {
      params: queryParams
    });
    return response;
  },
  async getUser(userId) {
    return axiosClient.get(`${prefix$3}/${userId}`);
  },
  async put(userId, payload) {
    return await axiosClient.put(`${prefix$3}/${userId}`, payload);
  },
  async delete(userId) {
    return axiosClient.delete(`${prefix$3}/${userId}`);
  }
};
const prefix$2 = "products";
const ProductRepository = {
  async get(queryParams) {
    const response = await axiosClient.get(`${prefix$2}`, {
      params: queryParams
    });
    return response;
  },
  async show(productId) {
    return await axiosClient.get(`${prefix$2}/${productId}`);
  },
  async getUser(productId) {
    return axiosClient.get(`${prefix$2}/${productId}`);
  },
  async put(productId, payload) {
    return await axiosClient.put(`${prefix$2}/${productId}`, payload);
  },
  async delete(productId) {
    return axiosClient.delete(`${prefix$2}/${productId}`);
  },
  async post(payload) {
    return axiosClient.post(`${prefix$2}`, payload);
  }
};
const prefix$1 = "seo";
const SeoRepository = {
  async get(queryParams) {
    const response = await axiosClient.get(`${prefix$1}`, {
      params: queryParams
    });
    return response;
  },
  async show(productId) {
    return await axiosClient.get(`${prefix$1}/${productId}`);
  },
  async getUser(productId) {
    return axiosClient.get(`${prefix$1}/${productId}`);
  },
  async put(productId, payload) {
    return await axiosClient.put(`${prefix$1}/${productId}`, payload);
  },
  async delete(productId) {
    return axiosClient.delete(`${prefix$1}/${productId}`);
  },
  async post(payload) {
    return axiosClient.post(`${prefix$1}`, payload);
  }
};
const prefix = "posts";
const PostRepository = {
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
  menuRepository: MenuRepository,
  seoRepository: SeoRepository,
  postRepository: PostRepository
};
const RepositoryFactory = {
  get: (name) => repositories[name]
};

export { RepositoryFactory as R };
//# sourceMappingURL=RepositoryFactory-7d37287f.js.map
