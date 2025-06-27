// declaramos um variável string com o endereço da API
let endereco = "http://localhost:8080/produtos";

// trazemos a tabela para "dentro" do javascript
const table = document.querySelector("table");

// conectamos enfim na API
fetch(endereco).then((resposta) => resposta.json()).then((dados) => {
    // depois de conectar no "endereco", pegamos a resposta recebida,
    // convertemos para formato JSON e recebemos este JSON aqui como
    // a variável "dados"
    console.log(dados);
    // percorremos o vetor de produtos, um produto de vez
    dados.forEach(um_produto => {
        // aqui faremos o necessário para um produto
        // começamos criando uma linha nova para a tabela
        const tr = document.createElement("tr");
        
        // criamos a primeira célula para a linha
        const td_id = document.createElement("td")
        td_id.innerHTML = um_produto.id;
        // adicionamos esta célula à linha
        tr.appendChild(td_id);
        
        // criamos a segunda célula
        const td_nome = document.createElement("td");
        // colocamos dentro da célula o nome da produto
        td_nome.textContent = um_produto.nome;
        // adicionamos a nova célula na linha
        tr.appendChild(td_nome);

        const td_preco = document.createElement("td");
        td_preco.textContent = `R$ ${um_produto.preco.toFixed(2)}`;
        tr.appendChild(td_preco);

        
        const td_estoque = document.createElement("td");
        td_estoque.textContent = um_produto.estoque;
        tr.appendChild(td_estoque);

        // por fim, incluímos a linha (tr) na tabela
        table.appendChild(tr);
    });
});