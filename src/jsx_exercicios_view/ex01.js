import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView01() {
  return (
          <View style={styles.container}>
  
              <View style={{
                  flexDirection: 'column', 
                  gap: 4,
                  height: 20,
                  justifyContent: "center"

              }}>
                  <View style={styles.redBox}><Text style={styles.textBox}>Vermelho</Text></View>
                  <View style={styles.blueBox}><Text style={styles.textBox}>Azul</Text></View>
                  <View style={styles.greenBox}><Text style={styles.textBox}>Verde</Text></View>
                
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
        backgroundColor: "#ffffff",
        borderRadius: 8,
    },
      box: {
        width: 50,
        height: 50,
        backgroundColor: "#2a4e89",
        borderRadius: 4,
        justifyContent: "center",
        alignItems: "center",
    },
    textBox: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
  redBox: {
    height: 80,
    width: 80,

    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
  greenBox: {
    height: 80,
    width: 80,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  blueBox: {
    height: 80,
    width: 80,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});