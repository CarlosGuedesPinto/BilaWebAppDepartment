import React, { useState } from 'react';
import { View, Image, StyleSheet, ImageBackground, Text } from 'react-native';

const App = () => {
  return (
    <ImageBackground source={{ uri: 'https://source.unsplash.com/random' }} style={styles.container}>
      <View>
        <Text>Ola123</Text>
      </View>
    </ImageBackground>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;