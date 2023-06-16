import { FC } from "react";

const List: FC<any> = ({ range }) => {
  return (
    <div>
      {range?.map((item: any, index: number) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  );
};

export default List;
