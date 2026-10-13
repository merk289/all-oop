import type { Reader } from "../models/reader";

export interface Reception {
  delivery(reader: Reader): boolean;
  receive(reader: Reader): boolean;
}
