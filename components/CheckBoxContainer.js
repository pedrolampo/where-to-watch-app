import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function CheckBoxContainer(props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        style={styles.checkbox}
        size={25}
        fillColor="rgb(88, 88, 255)"
        unfillColor="#FFFFFF"
        text="Movie"
        iconStyle={{ borderColor: 'transparent' }}
        textStyle={{ textDecorationLine: 'none', fontFamily: 'monospace' }}
        onPress={() => {
          props.setIsMovie(!props.isMovie);
        }}
      />
      <BouncyCheckbox
        size={25}
        fillColor="rgb(88, 88, 255)"
        unfillColor="#FFFFFF"
        text="TV Show"
        iconStyle={{ borderColor: 'transparent' }}
        textStyle={{ textDecorationLine: 'none', fontFamily: 'monospace' }}
        onPress={() => {
          props.setIsTV(!props.isTV);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingTop: 5,
  },
  checkbox: {
    paddingVertical: 5,
  },
});
