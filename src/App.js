import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import ViewExemplo02 from './view.examples/view_exemplo02';

export default function App() {
  return (
    <View style={styles.container}>
      <ViewExemplo02 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7b00',
    alignItems: 'center',
    justifyContent: 'center',
  },

textStyle:{
  fontSize: 50,
  color: "red",
},
});