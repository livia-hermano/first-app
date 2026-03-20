import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
  return( <View style={styles.container}>
    <View style={{
        flexDirection: 'row',
        gap: 10,
        flex: 1,
    }}>
        <View style={styles.sideBox}></View>
        <View style={styles.container}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                
            }}>
                <View style={styles.preto}>
                    <View style={styles.redBox}></View>
                    <View style={styles.yellowBox}></View>
                    <View style={styles.greenBox}></View>
                </View>
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
  preto: {
    padding: 10,
    height: 350,
    width: 200,
    borderRadius: 10,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  redBox: {
    
    borderRadius: 80,
    padding: 50,
    height: 110,
    width: 110,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  yellowBox: {
    
    borderRadius: 80,
    padding: 10,
    height: 110,
    width: 110,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    
    borderRadius: 80,
    padding: 10,
    height: 110,
    width: 110,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
});