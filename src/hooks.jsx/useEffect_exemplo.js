import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput, Alert, Button } from "react-native";

export default function TelaMoeda(){
    const [moedas, setMoedas] = useState(0)
    
    useEffect(()=> {
        if(moedas === 67){
            Alert.alert("Sucesso", "Você desbloqueou a aura!!!")
        }
    }, [moedas])

    return(
        <View style={styles.container}>
            <Text style={styles.text}>Moedas coletadas: {moedas}</Text>
            <Button title="Pegar Moeda" onPress={() => setMoedas(moedas + 1)} style={styles.button}></Button>
            <Button title="Deletar Moeda" onPress={() => setMoedas(moedas - 1)} style={styles.button}></Button>

        </View>
    )
}


const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center" },
texto: { fontSize: 24, marginBottom: 20 },
button: {
backgroundColor: "#4285f4",
padding: 12,
borderRadius: 8,
marginTop: 16,
},
});