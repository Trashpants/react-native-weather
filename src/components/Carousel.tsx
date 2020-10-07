import React, { FunctionComponent } from "react";
import { Dimensions, Text } from "react-native";
import styled from "styled-components/native";

interface CarouselProps {
  items: string[];
}

const Carousel: FunctionComponent<CarouselProps> = ({ items }) => {
  const Container = styled.ScrollView`
    flex: 1;
  `;
  const Slide = styled.View`
    width: ${Dimensions.get("screen").width}px;
    flex: 1;
    background-color: #abc;
  `;

  return (
    <Container
      horizontal
      decelerationRate="fast"
      snapToInterval={Dimensions.get("screen").width}
      showsHorizontalScrollIndicator={false}
      overScrollMode="never"
    >
      {items.map((e, index) => (
        <Slide key={index}>
          <Text>{e}</Text>
        </Slide>
      ))}
    </Container>
  );
};

export default Carousel;
export { Carousel };
