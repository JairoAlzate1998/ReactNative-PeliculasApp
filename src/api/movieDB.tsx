import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'd0fbda3a560e06c083c26dd998d038fc',
    language: 'es-ES',
  },
});

export default movieDB;
