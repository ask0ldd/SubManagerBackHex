import { randomUUID } from "crypto";
import Email from "../value-objects/email.vo";
import UserId from "../value-objects/user-id.vo";

export class User{
  constructor(
    private readonly id: UserId,
    private name: string,
    private email: Email,
  ) {}

  static build(name: string, email: string) {
    if (!name || name.trim().length < 2) {
      throw new Error('Name must be at least 2 characters long')
    }

    return new User(
      new UserId({value : randomUUID()}),
      name.trim(),
      new Email({value : email}),
    )
  }

  getId() : string{
    return this.id.value
  }

  getName(): string {
    return this.name
  }

  getEmail() {
    return this.email.value
  }
}