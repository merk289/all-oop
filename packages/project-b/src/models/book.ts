import { Publisher } from "./publisher";
import { Reception } from "../interfaces/reception";
import { Reader } from "./reader";

export class Book extends Publisher implements Reception {
  private _pages: number;

  constructor(title: string, author: string, pubYear: number, copies: number, pages: number) {
    super(title, author, pubYear, copies);
    this._pages = pages;
  }

  get pages(): number {
    return this._pages;
  }
  set pages(v: number) {
    this._pages = v;
  }

  getInfo(): string {
    return `Книга: "${this.title}" | Автор: ${this.author} | Год: ${this.pubYear} | Страниц: ${this.pages} | Экземпляров: ${this.copies}`;
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
    console.log(` Книга "${this.title}" выдана читателю ${reader.firstName} ${reader.lastName}`);
    return true;
  }

  receive(reader: Reader): boolean {
    const idx = reader.items.indexOf(this);
    if (idx === -1) {
      console.log(` У читателя ${reader.firstName} нет книги "${this.title}"`);
      return false;
    }
    reader.items.splice(idx, 1);
    this.copies += 1;
    console.log(` Книга "${this.title}" возвращена`);
    return true;
  }
}
