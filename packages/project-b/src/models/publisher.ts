export abstract class Publisher {
    private _title: string;
    private _author: string;
    private _pubYear: number;
    private _copies: number;

    constructor(title: string, author: string, pubYear: number, copies: number) {
        this._title = title;
        this._author = author;
        this._pubYear = pubYear;
        this._copies = copies;
    }

    get title(): string { return this._title; }
    set title(v: string) { this._title = v; }

    get author(): string { return this._author; }
    set author(v: string) { this._author = v; }

    get pubYear(): number { return this._pubYear; }
    set pubYear(v: number) { this._pubYear = v; }

    get copies(): number { return this._copies; }
    set copies(v: number) { this._copies = v; }

    abstract getInfo(): string;
}