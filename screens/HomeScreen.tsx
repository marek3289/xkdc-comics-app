import React, { useState } from 'react';
import styled from 'styled-components/native';
import { FlatList, Text, ActivityIndicator } from 'react-native';

import { ComicPreview } from '../components';
import useFetchComics from '../hooks/useFetchComics';

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

type Event = {
  distanceFromEnd: number;
};

const HomeScreen: React.FC = ({ navigation, route }) => {
  const [pageNumber, setPageNumber] = useState<number>(1);
  const postPerPage: number = 8;

  const {
    comicsList,
    currentComicNumber,
    isLoading,
    error,
  } = useFetchComics(pageNumber, postPerPage);

  const handlePress = (itemId: number) => {
    navigation.navigate('Details', { id: itemId, lastComic: currentComicNumber });
  };

  const loadNewComics = (e: Event) => {
    if (e.distanceFromEnd < 100 && e.distanceFromEnd >= 0) {
      setPageNumber(prevPage => prevPage + 1);
    }
  };

  return (
    <Container>
      {comicsList.length !== 0 && (
        <FlatList
          keyExtractor={(item) => item.num.toString()}
          data={comicsList}
          onEndReached={loadNewComics}
          onEndReachedThreshold={0.1}
          renderItem={({ item }) => (
            <ComicPreview item={item} handlePress={handlePress} />
          )}
        />
      )}
      {isLoading && <ActivityIndicator size='large' />}
      {error.length !== 0 && !isLoading && <Text>{error}</Text>}
    </Container>
  );
};

export default HomeScreen;
