import { StyleSheet, Text, View, ViewBase } from 'react-native';
import PerfilAluno from './jsx_props/livia-hermano-exercicios/desafio';

export default function App() {
  return (
    <View style={styles.container}>
      <PerfilAluno titulo="Wow" />
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