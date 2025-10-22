import { ValueObject } from "./valueObject.interface";

interface UserIdProps {
  value: string;
}

class UserId extends ValueObject<UserIdProps> {
  protected validate(props: UserIdProps): void {
    // Validate that the user ID is a valid UUID (v4 or any generic UUID format)
    if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(props.value)) {
      throw new Error('Invalid user ID format');
    }
  }

  get value(): string {
    return this.props.value;
  }
}

export default UserId;