async function loadData(cepUsuario) {
    const RESPONSE = await fetch(`https://viacep.com.br/ws/${cepUsuario}/json/`);
    if(!RESPONSE.ok) {
        console.log(RESPONSE.status);
        return false;
    }
    return RESPONSE.json();
}


let cep = Number(prompt("Digite o seu cep:"));

let dados = await loadData(cep)

//COMO MOSTRA AS INFORMAÇOES NO JAVASCRIPT
let body = document.querySelector("body");

body.innerHTML =
`
<div>
<h1>Dados da pesquisa</h1>
<ul>
    <li>${dados.cep || 'Não informado'}</li>
    <li>${dados.logradouro || 'Não informado'}</li>
    <li>${dados.bairro || 'Não informado'}</li>
    <li>${dados.localidade || 'Não informado'}</li>
    <li>${dados.uf || 'Não informado'}</li>
    <li>${dados.estado || 'Não informado'}</li>
    <li>${dados.regiao || 'Não informado'}</li>
    <li>${dados.ddd || 'Não informado'}</li>
</ul>
</div>
`