import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return( <View style={styles.container}>
    <View style={{
        flexDirection: 'column',
        flex: 1
    }}>
        <View style={styles.headerBox}><Text style={styles.textStyle}>Header</Text></View>
        <View style={styles.mainBox}><Text style={styles.textStyle}>Main</Text></View>
        <View style={styles.footerBox}><Text style={styles.textStyle}>Footer</Text></View>
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
  mainBox: {
    flex: 1,
    width: 800,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  headerBox: {
    height: 60,
    width: 800,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  footerBox: {
    height: 50,
    width: 800,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});