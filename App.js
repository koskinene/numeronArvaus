import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default function App() {

  const [guessedNumber, setGuessedNumber] = useState("");
  const [text, setText] = useState("Guess a number between 1-100");
  const [rightNumber, setRightNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [timesGuessed, setTimesGuessed] = useState(0);

  const play = () => {

    const guessed = parseInt(guessedNumber);

    if (guessed < rightNumber) {
      setText("Your guess " + guessed + " is too low");
      setTimesGuessed(timesGuessed + 1);
    } else if (guessed > rightNumber) {
      setText("Your guess " + guessed + " is too high");
      setTimesGuessed(timesGuessed + 1);
    } else if (guessed === rightNumber) {
      Alert.alert("You guessed the number in " + timesGuessed + " guesses");
      setText("Guess a number between 1-100");
      setGuessedNumber("");
      setRightNumber(Math.floor(Math.random() * 100) + 1);
      setTimesGuessed(0);
    }
  }

  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <TextInput style={styles.input} inputMode='numeric' onChangeText={guessedNumber => setGuessedNumber(guessedNumber)} value={guessedNumber} />
      <Button onPress={play} title="Make a guess" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 30,
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 5
  }
});
