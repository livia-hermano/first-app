import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewBase } from 'react-native';
import ExercicioView09 from './jsx_exercicios_view/ex09';

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView09 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
    alignItems: 'center',
    justifyContent: 'center',
  },

textStyle:{
  fontSize: 50,
  color: "red",
},
});