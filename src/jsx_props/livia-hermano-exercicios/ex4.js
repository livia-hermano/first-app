import { View, Text, StyleSheet } from "react-native";

export default function PerfilAluno(props){
  return (
    <View style={styles.card}>
    <Text style={styles.nome}> Nome: {props.nome}</Text>
    <Text style={styles.info}> Turma: {props.turma}</Text>
    <Text style={styles.info}> Matricula: {props.matricula}</Text>

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
  info:{
    fontSize: 14,
    color: "#6b7286"
  }
  })