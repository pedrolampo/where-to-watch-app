import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

export default function Results({ errorMsg }) {
  if (errorMsg.length > 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.resultText}>{errorMsg}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.resultText}>Results here!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(43, 41, 51)',
    alignItems: 'center',
  },
  resultText: {
    color: 'white',
    fontFamily: 'monospace',
  },
});
