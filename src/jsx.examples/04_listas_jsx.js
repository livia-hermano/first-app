 import { View, Text, StyleSheet } from "react-native";
 
 export default function Exemplo04() {
     const frutas = ["Maçã", "Laranja", "Limão","Morango"];
     const alunos = [
        {id: 1, nome:"Manu", nota: 10},
        {id: 2, nome:"Yasmin", nota: 8},
        {id: 3, nome:"Agatha", nota: 9},
     ];
 
   return (
     <View style={styles.container}>
         <View style={styles.exemplo}>
             <Text style={styles.titulo}>Exemplo 4 - Map</Text>
             <Text style={styles.subtitulo}>Map Padrão</Text>
             {frutas.map((frutas, indice) => (
                <Text key={indice}>
                    {indice + 1} - {frutas}
                </Text>
             ))}
         </View>
         <View style={styles.exemplo}>
             <Text style={styles.titulo}>Exemplo 4 - Map em objetos</Text>
             <Text style={styles.subtitulo}>Map em objetos</Text>
             {alunos.map((alunos) => (
                <Text key={alunos.id}>
                    {alunos.nome} - {alunos.nota}
                </Text>
             ))}
         </View>
         <View style={styles.exemplo}>
            <Text style={styles.titulo}>Exemplo 4 - Map com Filter</Text>
            <Text style={styles.subtitulo}>Map com Filter</Text>
            {alunos
             .filter((alunos) => alunos.nota >= 7)
             .map((alunos) => (
                <Text key={alunos.id}>Aprovado: {alunos.nome}</Text>
             ))}
         </View>
     </View>
   );
 }
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     justifyContent: "center",
     alignItems: "center",
     backgroundColor: "#f5f5f5",
   },
   titulo: {
     fontSize: 20,
     fontWeight: "bold",
     marginBottom: 20,
   },
   subtitulo: {
     fontSize: 14,
     fontWeight: "bold",
     color: "#4285f4",
     marginBottom: 8,
   },
   exemplo: {
     width: "80%",
     padding: 16,
     marginBottom: 16,
     backgroundColor: "#fff",
     borderRadius: 8,
   },
 });
 