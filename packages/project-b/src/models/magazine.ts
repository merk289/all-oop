import { Publisher } from "./publisher";
import { Reception } from "../interfaces/reception";
import { Reader } from "./reader";

export class Magazine extends Publisher implements Reception {
  private _issue: number;

  constructor(title: string, author: string, pubYear: number, copies: number, issue: number) {
    super(title, author, pubYear, copies);
    this._issue = issue;
  }

  get issue(): number {
    return this._issue;
  }
  set issue(v: number) {
    this._issue = v;
  }

  getInfo(): string {
    return `Журнал: "${this.title}" | Издатель: ${this.author} | Год: ${this.pubYear} | Выпуск: ${this.issue} | Экземпляров: ${this.copies}`;
  }

  delivery(reader: Reader): boolean {
    if (this.copies <= 0) {
      console.log(` Нельзя выдать "${this.title}" — экземпляров не осталось`);
      return false;
    }
    if (reader.items.length >= Reader.MAX_ITEMS) {
      console.log(` Нельзя выдать "${this.title}" — у читателя лимит (${Reader.MAX_ITEMS})`);
      return false;
    }
    this.copies -= 1;
    reader.items.push(this);
    console.log(` Журнал "${this.title}" выдан читателю ${reader.firstName} ${reader.lastName}`);
    return true;
  }

  receive(reader: Reader): boolean {
    const idx = reader.items.indexOf(this);
    if (idx === -1) {
      console.log(` У читателя ${reader.firstName} нет журнала "${this.title}"`);
      return false;
    }
    reader.items.splice(idx, 1);
    this.copies += 1;
    console.log(` Журнал "${this.title}" возвращён`);
    return true;
  }
}
