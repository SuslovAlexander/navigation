export interface ITurnPageProps {
  direction: Direction;
  onBtnClick: any;
}

type Direction = "prev" | "next";

export enum DirectionEnum {
  Prev = "prev",
  Next = "next",
}
