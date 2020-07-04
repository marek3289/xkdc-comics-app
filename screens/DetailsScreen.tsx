import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { View, Button, ActivityIndicator } from 'react-native';

import { proxyUrl } from '../constants';

const Container = styled.View`
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin: 20px 30px;
`;

const LoaderWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const ContentWrapper = styled.View`
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 7.5px;
  box-shadow: 3px 3px 3px #ccc;
  width: 100%;
  height: 90%;
  position: relative;
`;

const FlexWrapper = styled.View`
  width: 100%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const ButtonWrapper = styled.View`
  margin: 0 25px;
`;

const Img = styled.Image`
	width: 100%;
	height: 65%;
  margin: 10px 0;
`;

const Heading = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

const Paragraph = styled.Text`
  font-size: 13px;
  text-align: center;
`;

const BackButtonWrapper = styled.View`
  position: absolute;
  left: 5px;
  top: 5px;
`;

interface ComicType {
  title: string;
  num: number;
  img: string;
  alt: string;
  day: string;
  month: string;
  year: string;
}

const DetailsScreen: React.FC = ({ navigation, route: { params: { id, lastComic } } }) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [comic, setComic] = useState<ComicType>({});

  const { title, num, img, alt, day, month, year } = comic;

  useEffect(() => {
    setError('');

    const getComic = async () => {
      try {
        const result =  await fetch(`${proxyUrl}https://xkcd.com/${id}/info.0.json`);
        const json = await result.json();
        setComic(json);
        setLoading(false);
      } catch {
        setLoading(false);
        setError('Something went wrong...');
      }
    };

    getComic();
  }, []);

  const handleBackToHome = () => navigation.goBack();
  const handleChangeComic = (newId: number) => navigation.push('Details', { lastComic, id: newId });

  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <ActivityIndicator size='large' />
        </LoaderWrapper>
      ) : (
        <Container>
          <ContentWrapper>
            <BackButtonWrapper>
              <Button title='<' onPress={handleBackToHome} />
            </BackButtonWrapper>
            <Heading>{title}</Heading>
            <Paragraph>Added {day} / {month} / {year}</Paragraph>
            <Img resizeMode='contain' source={{ uri: img }} />
            <Paragraph>{alt}</Paragraph>
          </ContentWrapper>
          <FlexWrapper>
            <ButtonWrapper>
              <Button
                title='prev'
                disabled={isLoading || num <= 1}
                onPress={() => handleChangeComic(num - 1)}
              />
            </ButtonWrapper>
            <View>
              <Button
                title='next'
                disabled={isLoading || num >= lastComic}
                onPress={() => handleChangeComic(num + 1)}
              />
            </View>
          </FlexWrapper>
        </Container>
      )}
    </>
  );
};

export default DetailsScreen;
