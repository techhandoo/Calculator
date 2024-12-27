import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const IntroScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/calculator-logo.jpeg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1C1C1C',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default IntroScreen;
