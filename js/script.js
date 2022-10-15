function adicionar() {
    //recebe a quantidade de cadastro para fazer
    let qtdAdd = prompt('Quantos Cadastros Deseja Fazer ?');
    //converte em numero o que foi recebido pelo prompt de comando
    qtdAdd = Number(qtdAdd);

    //Laço de repetição para repetir o cadastro de acordo com o numero 
    //de vezes que o usuario quizer
    for (let i = 0; i < qtdAdd; qtdAdd--) {

        //recebe e atribui a variavel
        const nome = prompt('Digite o nome do cliente');
        const email = prompt('Digite o e-mail do cliente');
        const telefone = prompt('Digite o telefone do cliente');

        //relacionando com o id da tabela
        const clientes = document.getElementById('clientes');

        //criando uma nova linha na tabela
        const tr = document.createElement('tr');

        //criando novas colunas na linha criada acima
        const tdNome = document.createElement('td');
        tdNome.innerText = nome;
        const tdEmail = document.createElement('td');
        tdEmail.innerText = email;
        const tdTelefone = document.createElement('td');
        tdTelefone.innerText = telefone;

        //cria uma coluna para alocar o botao
        const tdExcluir = document.createElement('td');
        //cria o botao
        const btnExcluir = document.createElement('button');
        //define o tipo 
        btnExcluir.type = 'button';
        //define uma classe para o botao para podermos achar depois
        btnExcluir.classList = 'btnExcluir';
        //Formatando para inserir uma imagem dentro
        btnExcluir.innerHTML = '<img class="icone" src="img/removido.png" alt="" >';
        //atribuido o botao como filho/dependente da coluna/pai 
        tdExcluir.appendChild(btnExcluir);



        //Adicionando ao final da lista(pai)-TR  como filhos(dependentes)-TD
        tr.appendChild(tdNome);
        tr.appendChild(tdEmail);
        tr.appendChild(tdTelefone);
        tr.appendChild(tdExcluir)

        tdNome.addEventListener('click', function () {
            alterar(this);
        });
        tdEmail.addEventListener('click', function () {
            alterar(this);
        });
        tdTelefone.addEventListener('click', function () {
            alterar(this);
        });

        //Juntando Tudo
        clientes.appendChild(tr);
    }
}


function alterar(td) {
    td.innerText = prompt('Digite o novo valor do campo');
    /* td2.innerText = prompt('Digite o nome do e-mail');
     td3.innerText = prompt('Digite o nome do telefone');*/


}

//Atribuindo um evento no click
document.getElementById('add').addEventListener('click', adicionar);

const itensTabela = document.querySelectorAll('#clientes td');
for (let i = 0; i < itensTabela.length - 1; i++) {
    itensTabela[i].addEventListener('click', function () {
        alterar(this);
    })
}

//seleciona a tabela com id clientes
const tabela = document.querySelector('#clientes');
//adiciona um evento na tabela
tabela.addEventListener('click', function (event) {
    //grava propriedades do botao selecionado
    var elementoClicado = event.target;
    //Compara para ver se a contem a classe btnExcluir
    if (elementoClicado.classList.contains("btnExcluir")) {
        //identifica qual coluna foi clicado
        var filho = elementoClicado.parentNode;
        //identifica qual a linha pai desta coluna 
        var linha = filho.parentNode;
        //exclui a linha inteira
        linha.remove();
        //Envia uma msg avisando da exclusao
        alert('Excluido com Sucesso');
    }
})


