

export default function ListaDeCompras(){
    function handleAdicionar(){

    }
    const novoProduto = {
        id: Date.now().toString(),
        nome: produto,
        quantidade: quantidade,
    }

    setProduto([...produtos, novoProduto])
    setProduto("")
    setQuantidade("")
}