import type { Logger } from "./Logger";
import type { Angle, Distance, Position } from "./Position";
import { CarriageState } from "./CarriageState";
import { LineColor, normalizeColor } from "./Linecolor";

type LoggerConstructor = new () => Logger;

function isLoggerConstructor(value: Logger | LoggerConstructor): value is LoggerConstructor {
  return typeof value === "function";
}

export class Plotter {
  private position: Position;
  private angle: Angle;
  private color: LineColor;
  private carriageState: CarriageState;
  private logger: Logger;

  public constructor(
    logger: Logger | LoggerConstructor,
    position: Position = { x: 0, y: 0 },
    angle: Angle = 0,
    color: LineColor = LineColor.BLACK,
    carriageState: CarriageState = CarriageState.UP,
  ) {
    if (isLoggerConstructor(logger)) {
      this.logger = new logger();
    } else {
      this.logger = logger;
    }

    this.position = { ...position };
    this.angle = angle;
    this.color = color;
    this.carriageState = carriageState;
  }

  public setColor(color: LineColor | string): void {
    this.color = normalizeColor(color.toString());
    this.logger.log(`Устанавливаем ${this.color} цвет линии.`);
  }

  public carriageDown(): void {
    this.carriageState = CarriageState.DOWN;
    this.logger.log("Опускаем каретку");
  }

  public carriageUp(): void {
    this.carriageState = CarriageState.UP;
    this.logger.log("Поднимаем каретку");
  }

  public move(distance: Distance): void {
    const newPosition = this.calcNewPosition(distance, this.angle, this.position);

    if (this.carriageState === CarriageState.DOWN) {
      this.drawLine(this.position, newPosition, this.color);
    } else {
      this.logger.log(
        `Передвигаем на ${distance} от точки (${this.position.x}, ${this.position.y})`,
      );
    }

    this.position = newPosition;
  }

  public turn(angle: Angle): void {
    this.logger.log(`Поворачиваем на ${angle} градусов`);
    this.angle = (this.angle + angle) % 360;
  }

  public setPosition(position: Position): void {
    this.logger.log(`Устанавливаем позицию каретки в (${position.x}, ${position.y}).`);
    this.position = { ...position };
  }

  public getPosition(): Position {
    return { ...this.position };
  }

  public getAngle(): Angle {
    return this.angle;
  }

  public getColor(): LineColor {
    return this.color;
  }

  public getCarriageState(): CarriageState {
    return this.carriageState;
  }

  private drawLine(from: Position, to: Position, color: LineColor): void {
    this.logger.log(
      `...Чертим линию из (${from.x}, ${from.y}) в (${to.x}, ${to.y}) используя ${color} цвет.`,
    );
  }

  private calcNewPosition(distance: Distance, angle: Angle, current: Position): Position {
    const angleInRads = angle * (Math.PI / 180);
    const x = current.x + distance * Math.cos(angleInRads);
    const y = current.y + distance * Math.sin(angleInRads);

    return {
      x: Math.round(x),
      y: Math.round(y),
    };
  }
}
