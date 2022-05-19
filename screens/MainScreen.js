import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import CheckBoxContainer from '../components/CheckBoxContainer';

export default function MainScreen({ title, showResults, setError }) {
  const [value, setValue] = useState('');
  const [isMovie, setIsMovie] = useState(false);
  const [isTV, setIsTV] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <CheckBoxContainer
        isMovie={isMovie}
        isTV={isTV}
        setIsMovie={setIsMovie}
        setIsTV={setIsTV}
      />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder="Interstellar"
        placeholderTextColor="grey"
      />

      <TouchableOpacity
        style={styles.btnContainer}
        onPress={
          isTV || isMovie
            ? () => {
                setError('');
                showResults(true);
              }
            : () => {
                showResults(true);
                setError('Please enter a movie or TV series to look up.');
              }
        }
      >
        <Text style={styles.btnText}>Search</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 22,
    fontFamily: 'monospace',
  },
  input: {
    backgroundColor: 'rgb(43, 41, 51)',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 8,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 15,
    width: 250,
    color: 'white',
    fontFamily: 'monospace',
  },
  btnContainer: {
    width: 110,
    height: 35,
    backgroundColor: 'grey',
    justifyContent: 'center',
    borderRadius: 5,
  },
  btnText: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'monospace',
  },
});
