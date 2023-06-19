export interface ITurnPageProps {
  direction: Direction;
  onBtnClick: () => void;
}

type Direction = "prev" | "next";

export enum DirectionEnum {
  Prev = "prev",
  Next = "next",
}
