import { Plotter } from "./Plotter";
import { LogToConsole } from "./LogToConsole";
import type { Distance } from "./Position";

function drawTriangle(plt: Plotter, size: Distance): void {
  plt.setColor("Green");

  for (let i = 0; i < 3; ++i) {
    plt.carriageDown();
    plt.move(size);
    plt.carriageUp();
    plt.turn(120.0);
  }
}

const plotter = new Plotter(LogToConsole);
drawTriangle(plotter, 100.0);
