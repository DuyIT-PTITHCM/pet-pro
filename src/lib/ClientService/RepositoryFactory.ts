import AuthRepository from "./repositories/AuthRepository";
import CategoryRepository from "./repositories/CategoryRepository";
import MenuRepository from "./repositories/MenuRepository";
import UserRepository from "./repositories/UserRepository";
import ProductRepository from "./repositories/ProductRepository";
import SeoRepository from "./repositories/SeoRepository";
import PostRepository from "./repositories/PostRepository";
import UploadRepository from "./repositories/UploadRepository";
import OrderRepository from "./repositories/OrderRepository";
import UseServiceRepository from "./repositories/UseServiceRepository";
import CustomerRepository from "./repositories/CustomerRepository";

interface RepositoryList {
    [key: string]: any;
}

const repositories: RepositoryList = {
    authRepository: AuthRepository,
    userRepository: UserRepository,
    categoryRepository: CategoryRepository,
    productRepository: ProductRepository,
    menuRepository: MenuRepository,
    seoRepository: SeoRepository,
    postRepository: PostRepository,
    uploadRepository: UploadRepository,
    orderRepository: OrderRepository,
    useServiceRepository: UseServiceRepository,
    customerRepository: CustomerRepository
};

export const RepositoryFactory = {
    get: (name: string) => repositories[name],
};
