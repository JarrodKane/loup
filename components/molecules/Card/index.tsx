import React from "react";

import { CardContainer } from "./styles";

interface Props {
  src: string;
  title: string;
}

// I do want children so just decided to use a RECT.FC to get them quickly
interface Props {}

const Card = (props: Props) => {
  const { src, title } = props;

  return (
    <div>
      <div>Image</div>
      <div>{title}</div>
    </div>
  );
};

export default Card;
