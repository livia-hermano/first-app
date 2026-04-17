import { StyleSheet, Text, View, ViewBase } from 'react-native';
import CartaoPerfil1 from './jsx_props/exemplo1';

export default function App() {
  return (
    <View style={styles.container}>
      <CartaoPerfil1 nome="Agatha" idade={17}/>
      <CartaoPerfil1 nome="Manu" idade={17}/>
      <CartaoPerfil1 nome="Lívia" idade={17}/>
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