import AuthRepository from "./repositories/AuthRepository";

interface RepositoryList {
    [key: string]: any;
}

const repositories: RepositoryList = {
    authRepository: AuthRepository,
};

export const RepositoryFactory = {
    get: (name: string) => repositories[name],
};
