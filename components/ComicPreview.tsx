import * as React from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';

const Wrapper = styled.View`
  margin: 20px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 3px 3px 3px #ccc;
  padding: 10px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

const Description = styled.View`
  display: flex;
  align-self: stretch;
  width: 50%;
  margin: 5px 20px;
`;

const Heading = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  text-align: end;
`;

const Paragraph = styled.Text`
  font-size: 12px;
  text-align: end;
`;

const Img = styled.Image`
  width: 120px;
  height: 100px;
  border: 1px solid black;
  border-radius: 3px;
`;

interface PreviewProps {
  item: {
    title: string,
    img: string,
    day: string,
    month: string,
    year: string,
  };
  handlePress: () => void;
}

const ComicPreview: React.FC<PreviewProps> = ({ item, handlePress }) => {
  const { title, img, day, month, year } = item;

  return (
    <TouchableHighlight underlayColor='white' onPress={() => handlePress(item.num)}>
      <Wrapper>
        <Description>
          <Heading>{title}</Heading>
          <Paragraph>Added {day} / {month} / {year}</Paragraph>
        </Description>
        <Img source={{ uri: img }} />
      </Wrapper>
    </TouchableHighlight>
  );
};

export default ComicPreview;
