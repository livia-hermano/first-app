import { View, Text, StyleSheet } from "react-native";

export default function CartaoProduto(props){
  return (
    <View style={styles.card}>
    <Text style={styles.produto}> Produto: {props.produto}</Text>
    <Text style={styles.preco}> Preço: {props.preco}</Text>
    </View>
)}



const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "#e5e7eb"
  },
    produto: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  preco:{
    fontSize: 14,
    color: "#6b7286"
  }
  })