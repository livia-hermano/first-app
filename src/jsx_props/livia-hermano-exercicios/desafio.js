import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function PerfilAluno(props){
  return (
    <View style={styles.card}>
    
    <TouchableOpacity style={styles.button} > 
    <Text>{props.titulo}</Text> 
    </TouchableOpacity>
     <TouchableOpacity  style={styles.button}> 
    <Text>{props.titulo}</Text> 
    </TouchableOpacity>
     <TouchableOpacity  style={styles.button}> 
    <Text>{props.titulo}</Text> 
    </TouchableOpacity>
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
  },
   button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  }
  })