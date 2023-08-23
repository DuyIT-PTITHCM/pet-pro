import AuthRepository from "./repositories/AuthRepository";
import UserRepository from "./repositories/UserRepository";

interface RepositoryList {
    [key: string]: any;
}

const repositories: RepositoryList = {
    authRepository: AuthRepository,
    userRepository: UserRepository
};

export const RepositoryFactory = {
    get: (name: string) => repositories[name],
};
