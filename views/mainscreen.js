import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const MainScreen = () => {
  const [input, setInput] = useState('');
  const [previousAnswer, setPreviousAnswer] = useState('');

  // Function to handle button presses
  const handleButtonPress = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  // Function to calculate the result
  const calculateResult = () => {
    try {
      const result = eval(input).toString(); // Be cautious with eval!
      setPreviousAnswer(result); // Store the result for the previous answer button
      setInput(result); // Display the result
    } catch (e) {
      setInput('Error');
    }
  };

  // Function to clear the input
  const clearInput = () => {
    setInput('');
  };

  // Function to delete the last character (backspace)
  const eraseLastCharacter = () => {
    setInput(input.slice(0, -1));
  };

  // Function to show the previous answer
  const showPreviousAnswer = () => {
    setInput(previousAnswer); // Set the input to the previous answer
  };

  return (
    <View style={styles.container}>
      {/* Display Section with Scroll */}
      <ScrollView
        style={styles.displayBox}
        contentContainerStyle={styles.displayContent} // Correctly applying layout properties here
        showsVerticalScrollIndicator={true} // Show vertical scrollbar when necessary
        keyboardShouldPersistTaps="handled" // Prevent screen shift when keyboard appears
        scrollEnabled={true} // Enable scrolling
      >
        {/* Ensure input is always a valid string */}
        <Text style={styles.displayText}>{input || '0'}</Text>
      </ScrollView>

      <View style={styles.buttons}>
        {/* Button Rows */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('7')}>
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('8')}>
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('9')}>
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('/')}>
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('4')}>
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('5')}>
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('6')}>
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('*')}>
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('1')}>
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('2')}>
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('3')}>
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('-')}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('0')}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('.')}>
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.equalButton]} // Green background for "="
            onPress={calculateResult}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handleButtonPress('+')}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Row for Clear and Previous Answer buttons */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.button} onPress={clearInput}>
            <Text style={styles.buttonText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={showPreviousAnswer}>
            <Text style={styles.buttonText}>Ans</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={eraseLastCharacter}>
            <Text style={styles.buttonText}>←</Text> {/* Erase last character */}
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.footer}>
        {/* Wrap footer text */}
        <Text style={styles.footerText}>Calc by Krrish</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1C',
  },
  displayBox: {
    height: 120,
    backgroundColor: '#333', // Background for the display box
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  displayContent: {
    justifyContent: 'center', // Align text in the center of the display box
    alignItems: 'flex-end', // Align text to the right
    paddingVertical: 15,
  },
  displayText: {
    color: 'white',
    fontSize: 48,
    fontWeight: 'bold',
    textAlign: 'right', // Align numbers to the right
    paddingRight: 10,
  },
  buttons: {
    flex: 3,
    justifyContent: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    margin: 5,
  },
  equalButton: {
    backgroundColor: 'green', // Green background for "="
  },
  buttonText: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#333',
  },
  footerText: {
    color: 'white',
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default MainScreen;
