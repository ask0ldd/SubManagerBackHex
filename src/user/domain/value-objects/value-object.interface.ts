export abstract class ValueObject<T> {
  protected readonly props: T;

  constructor(props: T) {
    this.props = Object.freeze(props); // ensures immutability
    this.validate(props);
  }

  protected abstract validate(props: T): void;

  equals(vo?: ValueObject<T>): boolean {
    if (vo == null) return false;
    return JSON.stringify(this.props) === JSON.stringify(vo.props);
  }
}