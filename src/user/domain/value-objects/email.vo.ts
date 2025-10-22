import { ValueObject } from "./valueObject.interface";

interface EmailProps {
  value: string;
}

class Email extends ValueObject<EmailProps> {
  protected validate(props: EmailProps): void {
    if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(props.value)) {
      throw new Error('Invalid email format');
    }
  }

  get value(): string {
    return this.props.value;
  }
}

export default Email