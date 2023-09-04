import AuthRepository from "./repositories/AuthRepository";
import CategoryRepository from "./repositories/CategoryRepository";
import MenuRepository from "./repositories/MenuRepository";
import UserRepository from "./repositories/UserRepository";
import ProductRepository from "./repositories/ProductRepository";
import SeoRepository from "./repositories/SeoRepository";
import PostRepository from "./repositories/PostRepository";

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
};

export const RepositoryFactory = {
    get: (name: string) => repositories[name],
};
