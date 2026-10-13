import type { Publisher } from "./publisher";

export class Reader {
  static readonly MAX_ITEMS: number = 3;

  private _firstName: string;
  private _lastName: string;
  private _items: Publisher[];

  constructor(firstName: string, lastName: string) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._items = [];
  }

  get firstName(): string {
    return this._firstName;
  }
  set firstName(v: string) {
    this._firstName = v;
  }

  get lastName(): string {
    return this._lastName;
  }
  set lastName(v: string) {
    this._lastName = v;
  }

  get items(): Publisher[] {
    return this._items;
  }
  set items(v: Publisher[]) {
    this._items = v;
  }

  getInfo(): string {
    const list =
      this._items.length === 0 ? "нет изданий" : this._items.map((i) => `"${i.title}"`).join(", ");
    return `Читатель: ${this._firstName} ${this._lastName} | На руках: ${list}`;
  }
}
