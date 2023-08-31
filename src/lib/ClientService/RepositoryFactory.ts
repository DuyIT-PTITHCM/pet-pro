import AuthRepository from "./repositories/AuthRepository";
import MenuRepository from "./repositories/MenuRepository";
import UserRepository from "./repositories/UserRepository";

interface RepositoryList {
    [key: string]: any;
}

const repositories: RepositoryList = {
    authRepository: AuthRepository,
    userRepository: UserRepository,
    menuRepository: MenuRepository
};

export const RepositoryFactory = {
    get: (name: string) => repositories[name],
};
