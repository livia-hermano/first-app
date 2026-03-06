import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lista03 from './jsx.listas/lista_03';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista03 />
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