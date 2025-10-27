/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from "@nestjs/common";
import { UserPersistencePort } from "src/user/application/ports/UserPersistence.port";
import { User } from "src/user/domain/entities/User.entity";

@Injectable()
export class SQLiteUserPersistence implements UserPersistencePort {
  mockUser = User.build("mockName","mock@mock.com")

  private users: Map<string, User> = new Map<string, User>().set(this.mockUser.getId(), this.mockUser);

  async findById(id: string): Promise<User | null> {
    // return Promise.resolve(this.users.get(id) ?? null);
    const firstEntry = this.users.entries().next().value as [string, User] | undefined; // [key, user]
    return Promise.resolve(firstEntry ? firstEntry[1] : null);
  }

  async findByEmail(email: string): Promise<User | null> {
    const users = Array.from(this.users.values());
    return Promise.resolve(users.find((user) => user.getEmail() === email) || null);
  }

  async findAll(): Promise<User[]> {
    return Promise.resolve(Array.from(this.users.values()));
  }

  async save(user: User): Promise<User | null> {
    this.users.set(user.getId(), user);
    return Promise.resolve(this.users.get(user.getId()) ?? null)
  }

  async delete(id: string): Promise<void> {
    this.users.delete(id);
    return Promise.resolve(void 0)
  }
}