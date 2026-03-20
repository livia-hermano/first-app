import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
  return( <View style={styles.container}>
    <View style={{
        flexDirection: 'row',
        flex: 1,
        gap: 8,
        width: '100%'
    }}>
        <View style={styles.greenBox}><Text style={styles.textStyle}>Coluna 01</Text></View>
        <View style={styles.blueBox}><Text style={styles.textStyle}>Coluna 02</Text></View>
    </View>
  </View>
)}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    gap: 18,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  greenBox: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});