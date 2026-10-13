export enum LineColor {
  BLACK = "чёрный",
  RED = "красный",
  GREEN = "зелёный",
}

export function normalizeColor(color: string): LineColor {
  const value = color.toLowerCase();

  if (value === "black" || value === "чёрный" || value === "черный") {
    return LineColor.BLACK;
  }

  if (value === "red" || value === "красный") {
    return LineColor.RED;
  }

  if (value === "green" || value === "зелёный" || value === "зеленый") {
    return LineColor.GREEN;
  }

  throw new Error(`Неизвестный цвет: ${color}`);
}
