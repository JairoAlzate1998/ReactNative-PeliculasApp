import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/movieInterface';

export const useMovies = () => {
  const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([]);

  const getMovies = async () => {
    const res = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    setPeliculasEnCine(res.data.results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    peliculasEnCine,
  };
};
