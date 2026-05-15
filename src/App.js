import { StyleSheet, Text, View, ViewBase } from 'react-native';
import Exemplo from './hooks.jsx/useState_exemplo'
import FlatListExemplo from './flatlist.jsx/exemplo2';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatListExemplo/>
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