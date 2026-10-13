import { Publisher } from "../models/publisher";

export class Library {
  private _publishers: Publisher[];

  constructor() {
    this._publishers = [];
  }

  get publishers(): Publisher[] {
    return this._publishers;
  }

  addPublisher(p: Publisher): void {
    this._publishers.push(p);
    console.log(` Добавлено: "${p.title}"`);
  }

  removePublisher(p: Publisher): void {
    const idx = this._publishers.indexOf(p);
    if (idx === -1) {
      console.log(` "${p.title}" не найдено`);
      return;
    }
    this._publishers.splice(idx, 1);
    console.log(` Удалено: "${p.title}"`);
  }

  printAll(): void {
    console.log("\n=== Фонд библиотеки ===");
    if (this._publishers.length === 0) {
      console.log("(пусто)");
      return;
    }
    this._publishers.forEach((p, i) => console.log(`${i + 1}. ${p.getInfo()}`));
    console.log("=======================\n");
  }
}
