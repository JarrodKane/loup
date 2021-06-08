import React from "react";

import { DisplayContainer } from "./styles";
import Card from "../../molecules/Card";

interface Props {
  recipies: [{}] | undefined;
}

// TODO : You could have some nice pre-rendering here if the array is length of 0, so that it still displays
// some empty boxes that are shown to be loading data in, less jarring if you know how many and what sizes the cards will be ahead of time

// I do want children so just decided to use a RECT.FC to get them quickly
interface Props {}

const DisplayGrid = (props: Props) => {
  const { recipies } = props;

  console.log(recipies);

  if (recipies === undefined) {
    // TODO: Add in some prettier handling for loading state here
    return <div>Loading data</div>;
  } else {
    return (
      <DisplayContainer>
        {recipies.map((recipie) => (
          <Card recipie={recipie} key={recipie.contentId} />
        ))}
      </DisplayContainer>
    );
  }
};

export default DisplayGrid;
