import React from 'react';
import {Text, View} from 'react-native';
import {useMovies} from '../hooks/useMovies';

export const HomeScreen = () => {
  const {peliculasEnCine} = useMovies();

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
};
