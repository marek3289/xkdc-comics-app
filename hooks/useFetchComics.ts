import { useState, useEffect } from 'react';

import { proxyUrl, url } from '../constants';

const useFetchComics = (pageNumber: number, postPerPage: number) => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const [currentComicNumber, setCurrentComicNumber] = useState<number>(0);
  const [comicsList, setComicsList] = useState<any[]>([]);

  const getComicsNumbers = () => {
    const comicsNumbers = Array(postPerPage)
      .fill()
      .map((_, i) => currentComicNumber - (postPerPage * pageNumber - postPerPage) - i);

    return comicsNumbers;
  };

  useEffect(() => {
    const getCurrentComicNumber = async () => {
      try {
        const data = await fetch(`${proxyUrl}${url}`);
        const { num } = await data.json();

        setCurrentComicNumber(num);
      } catch (err) {
        setLoading(false);
        setError('Something went wrong...');
      }
    };

    getCurrentComicNumber();
  }, []);

  useEffect(() => {
    const getComicsList = () => {
      const fetchedList = [];

      if (currentComicNumber) {
        setLoading(true);
        const comicsNumbers = getComicsNumbers();

        comicsNumbers.map(async (num) => {
          try {
            const data = await fetch(`${proxyUrl}https://xkcd.com/${num}/info.0.json`);
            const comic = await data.json();
            fetchedList.push({ ...comic });

            if (comicsNumbers.length === fetchedList.length) {
              setComicsList(prevState => [...prevState, ...fetchedList]);
              setLoading(false);
            }
          } catch {
            setLoading(false);
            setError('Something went wrong...');
          }
        });
      };
    };

    getComicsList();
  }, [currentComicNumber, pageNumber]);

  return { comicsList, currentComicNumber, isLoading, error };
};

export default useFetchComics;
