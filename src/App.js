import { StyleSheet, Text, View, ViewBase } from 'react-native';
import Exemplo from './hooks.jsx/useState_exemplo'
import TelaMoedas from './hooks.jsx/useEffect_exemplo';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaMoedas/>
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