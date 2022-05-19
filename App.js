import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import MainScreen from './screens/MainScreen';
import Results from './components/Results';

export default function App() {
  const [results, setResults] = useState(false);
  const [error, setError] = useState('');

  return (
    <View style={styles.container}>
      <MainScreen
        title="What do you want to watch?"
        showResults={setResults}
        setError={setError}
      />
      {results && <Results errorMsg={error} />}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(43, 41, 51)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
