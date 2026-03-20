import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView04() {
  return( <View style={styles.container}>
    <View style={{
        flexDirection: 'row',
        flex: 1,
        gap: 4,
        height: 20,
        justifyContent: "center",
        alignItems: 'center'
    }}>
        <View style={styles.box}><Text style={styles.textStyle}>Center</Text></View>
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
  box: {
    height: 120,
    width: 120,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});