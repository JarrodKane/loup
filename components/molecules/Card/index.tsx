import React from "react";
import Image from "next/image";

import { CardContainer, ContentContainer, ImageContainer } from "./styles";

interface Props {
  recipie: {};
}

const Card = (props: Props) => {
  const {
    authors,
    contentId,
    imageList,
    isFavourted,
    tags,
    title,
    urlPartial,
  } = props.recipie;

  console.log(imageList);

  // TODO: Break down Image, and title down into their atom components
  // Mainly for image, since there's a selection of images you would want to pick depending on the device
  // For the title, I think this would also be a link tag, though the entire card here could also just be a link to the page

  return (
    <CardContainer>
      <ImageContainer>
        <Image
          src={`${imageList.landscapewidedesktop2x.url}`}
          objectFit="cover"
          layout="fill"
          // width={300}
          // height={200}
        />
      </ImageContainer>

      <ContentContainer>{title}</ContentContainer>
    </CardContainer>
  );
};

export default Card;
