import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
  return( <View style={styles.container}>
    <View style={{
        flexDirection: 'row',
        gap: 4,
        flex: 1,
    }}>
        <View style={styles.sideBox}></View>
        <View style={styles.container}>
            <View style={{
                flexDirection: 'columns',
                gap: 10,
                flex: 1,
                margin: 5,
            }}>
                <View style={styles.umBox}></View>
                <View style={styles.doisBox}></View>
                <View style={styles.tresBox}></View>
            </View>
        </View>
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
  sideBox: {
    width: 80,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center"
  },
  umBox: {
    flex: 1,
    padding: 10,
    height: 80,
    width: 300,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  doisBox: {
    flex: 1,
    padding: 10,
    height: 80,
    width: 300,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
  tresBox: {
    flex: 1,
    padding: 10,
    height: 80,
    width: 300,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
});
