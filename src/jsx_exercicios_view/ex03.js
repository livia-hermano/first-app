import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView03() {
  return( <View style={styles.container}>
    <View style={{
        flexDirection: 'row',
        gap: 4,
        height: 20,
        justifyContent: "space-between",
        width: '100%'
    }}>
        <View style={styles.redBox}><Text style={styles.textStyle}>R</Text></View>
         <View style={styles.greenBox}><Text style={styles.textStyle}>G</Text></View>
        <View style={styles.blueBox}><Text style={styles.textStyle}>B</Text></View>
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
  redBox: {
    height: 70,
    width: 70,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 70,
    width: 70,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 70,
    width: 70,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});