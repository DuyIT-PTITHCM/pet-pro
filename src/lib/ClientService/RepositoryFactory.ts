import AuthRepository from "./repositories/AuthRepository";
import CategoryRepository from "./repositories/CategoryRepository";
import UserRepository from "./repositories/UserRepository";
import ProductRepository from "./repositories/ProductRepository";

interface RepositoryList {
    [key: string]: any;
}

const repositories: RepositoryList = {
    authRepository: AuthRepository,
    userRepository: UserRepository,
    categoryRepository: CategoryRepository,
    productRepository: ProductRepository,
};

export const RepositoryFactory = {
    get: (name: string) => repositories[name],
};
