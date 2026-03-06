import { View, Text, ScrollView, StyleSheet, processColor } from "react-native";

export default function Lista02() {
    const loja_aberta = false;
    const temPromocao = true;

    const nota = 7.5;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 02 - Lívia Hermano</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 1 - Operador Ternário</Text>
        <View>
            <Text>Status: {loja_aberta ? "Aberto" : "Fechado"}</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - Operador &&</Text>
        <View>
            {temPromocao && <Text>"Promoção ativa!
Aproveite os descontos.</Text>}
            {temPromocao && <Text></Text>}
        </View>
      </View>
       <View style={styles.card}>
        <Text style={styles.label}>Exercício 3 - Condicional com Múltiplas Condições</Text>
        <View>
            {nota >= 7 && <Text style={styles.aprovado}>Aprovado</Text>}
            {nota >= 5 && nota < 7 && <Text style={styles.recuperacao}>Recuperação</Text>}
            {nota <5 && <Text style={styles.reprovado}>Reprovado</Text>}
        </View>
       </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  aprovado: {
    color: "#16cc09"
  },
  recuperacao: {
    color: "#f97d00"
  },
  reprovado: {
    color: "#fc0000"
  },
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});