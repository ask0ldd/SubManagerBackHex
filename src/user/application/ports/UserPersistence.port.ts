import { User } from "src/user/domain/entities/User.entity";

export interface UserPersistencePort {
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  save(user: User): Promise<User | null>;
  delete(id: string): Promise<void>;
}

// create a token that will be linked, within a module, to an implementation of the repository
export const USER_REPOSITORY = Symbol('USER_REPOSITORY');