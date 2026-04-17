import { View, Text, StyleSheet } from "react-native";

export default function CartaoUsuario({nome, email}){
  return (
    <View style={styles.card}>
    <Text style={styles.nome}> Nome: {nome}</Text>
    <Text style={styles.email}> Email: {email}</Text>
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
  nome: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  email:{
    fontSize: 14,
    color: "#6b7286"
  }
  })