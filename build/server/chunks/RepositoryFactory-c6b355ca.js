import { B as BASE_API } from './Const-aff6847f.js';
import { g as getCookie } from './cookieUtils-3c057440.js';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: BASE_API,
  headers: {
    "content-type": "application/json",
    "Authorization": "Bearer " + getCookie("access_token")
  }
});
const prefix$7 = "auth";
const AuthRepository = {
  post(payload) {
    return axiosClient.post(`${prefix$7}/register`, payload);
  }
};
const prefix$6 = "categories";
const CategoryRepository = {
  async get(queryParams) {
    const response = await axiosClient.get(`${prefix$6}`, {
      params: queryParams
    });
    return response;
  },
  async post(payload) {
    return await axiosClient.post(`${prefix$6}`, payload);
  },
  async put(manuId, payload) {
    return await axiosClient.put(`${prefix$6}/${manuId}`, payload);
  },
  async delete(manuId) {
    return axiosClient.delete(`${prefix$6}/${manuId}`);
  }
};
const prefix$5 = "menu";
const MenuRepository = {
  async get() {
    const response = await axiosClient.get(`${prefix$5}`);
    return response;
  },
  async post(payload) {
    return await axiosClient.post(`${prefix$5}`, payload);
  },
  async put(manuId, payload) {
    return await axiosClient.put(`${prefix$5}/${manuId}`, payload);
  },
  async delete(manuId) {
    return axiosClient.delete(`${prefix$5}/${manuId}`);
  }
};
const prefix$4 = "user-management";
const UserRepository = {
  async get(queryParams) {
    const response = await axiosClient.get(`${prefix$4}`, {
      params: queryParams
    });
    return response;
  },
  async getUser(userId) {
    return axiosClient.get(`${prefix$4}/${userId}`);
  },
  async info() {
    return axiosClient.get(`${prefix$4}/info`);
  },
  async put(userId, payload) {
    return await axiosClient.put(`${prefix$4}/${userId}`, payload);
  },
  async delete(userId) {
    return axiosClient.delete(`${prefix$4}/${userId}`);
  }
};
const prefix$3 = "products";
const ProductRepository = {
  async get(queryParams) {
    const response = await axiosClient.get(`${prefix$3}`, {
      params: queryParams
    });
    return response;
  },
  async show(productId) {
    return await axiosClient.get(`${prefix$3}/${productId}`);
  },
  async getUser(productId) {
    return axiosClient.get(`${prefix$3}/${productId}`);
  },
  async put(productId, payload) {
    return await axiosClient.put(`${prefix$3}/${productId}`, payload);
  },
  async delete(productId) {
    return axiosClient.delete(`${prefix$3}/${productId}`);
  },
  async post(payload) {
    return axiosClient.post(`${prefix$3}`, payload);
  }
};
const prefix$2 = "seo";
const SeoRepository = {
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
const prefix$1 = "posts";
const PostRepository = {
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
const prefix = "upload";
const UploadRepository = {
  async uploadFile(payload) {
    return axiosClient.post(`${prefix}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + getCookie("access_token")
      }
    });
  },
  async uploadFileEditor(payload) {
    return axiosClient.post(`${prefix}/editor`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization": "Bearer " + getCookie("access_token")
      }
    });
  },
  async deleteFile(payload) {
    return axiosClient.post(`${prefix}/delete`, payload);
  }
};
const repositories = {
  authRepository: AuthRepository,
  userRepository: UserRepository,
  categoryRepository: CategoryRepository,
  productRepository: ProductRepository,
  menuRepository: MenuRepository,
  seoRepository: SeoRepository,
  postRepository: PostRepository,
  uploadRepository: UploadRepository
};
const RepositoryFactory = {
  get: (name) => repositories[name]
};

export { RepositoryFactory as R };
//# sourceMappingURL=RepositoryFactory-c6b355ca.js.map
