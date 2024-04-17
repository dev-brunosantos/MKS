const storage:any = localStorage.getItem('produto')
let dados:string[] = JSON.parse(storage) || [];
export default function SalvarLocalStorage(id:string, img: string, nome: string, preco: string | number) {

    let item:any = {
        id: id,
        img: img,
        nome: nome,
        preco: preco
    }

    dados.push(item)
    localStorage.setItem('produto', JSON.stringify(dados))
    alert(`${item.nome} adicionado ao carrinho`)
}
