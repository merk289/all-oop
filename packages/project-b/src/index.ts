import { Library } from "./core/library";
import { Book } from "./models/book";
import { Magazine } from "./models/magazine";
import { Reader } from "./models/reader";

const library = new Library();
const book1 = new Book("Война и мир", "Л.Н. Толстой", 1869, 2, 1274);
const book2 = new Book("Преступление и наказание", "Ф.М. Достоевский", 1866, 1, 671);
const mag1 = new Magazine("Наука и жизнь", "Редакция", 2024, 3, 5);
const mag2 = new Magazine("Мурзилка", "Редакция", 2023, 0, 12);

library.addPublisher(book1);
library.addPublisher(book2);
library.addPublisher(mag1);
library.addPublisher(mag2);
library.printAll();

const reader1 = new Reader("Иван", "Петров");
const reader2 = new Reader("Мария", "Сидорова");

book1.delivery(reader1);
mag1.delivery(reader1);
mag2.delivery(reader1);
mag1.delivery(reader1);
book2.delivery(reader1);
mag2.delivery(reader1);

book1.receive(reader1);
library.removePublisher(mag2);
library.printAll();
