import { Text, View, StyleSheet } from "react-native";

export function ExpressoesJSX() {
    const nome = "Manu";
    const idade = 17;
    const preco = 69.3;


    const usuario = {
        nome: "Yasmin",
        cidade: "Salto",
    };
    return( 
    <View style={styles.container}>
        <Text style={styles.titulo}>Expressões JSX - exemplos</Text>
        <View>
            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
        </View>
         <View>
            <Text>Maiusculas: {nome.toUpperCase()}</Text>
            <Text>Soma: {preco * 2}</Text>
        </View>
         <View>
            <Text>{usuario.nome}</Text>
            <Text>{usuario.cidade}</Text>
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
    exemplo: {
        width: "80%",
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#ffff",
        borderRadius: 8,
    },
});
