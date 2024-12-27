import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import IntroScreen from './views/introscreen';  // Import the IntroScreen component
import MainScreen from './views/mainscreen';   // Import the MainScreen component

const App = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Show the IntroScreen for 3 seconds, then show the MainScreen
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);  // 3 seconds

    return () => clearTimeout(timer);  // Cleanup timer if component unmounts
  }, []);

  return (
    <View style={styles.container}>
      {showIntro ? <IntroScreen /> : <MainScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
