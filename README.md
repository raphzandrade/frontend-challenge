# Front-end Challenge 

Desafio proposto pela GetNinjas como parte do processo seletivo para a vaga de desenvolvedor front-end. Repositório original [aqui](http://email.mg.kenoby.com/c/eJwVjcsOgyAURL9GdiXcK4ouWBhj_wPh8mgVjdJF-_XVZJKZszgZp1uQ6CVLGgV0QgmJcHXPgSMOUw8K1ARqxFFUUqyBvylv85fbbWVRO4stoQGUkjrllTDeuR6oIe-gbixbdCxlP6t6qPB5JaQSP_Nt30Alp_wy57X9seVC2T1sNMtCORA79GH2-OMmu8M4uu7DatJyy39ZWDg6). :)

## Dependências
- [grunt](https://gruntjs.com/);
- [node & npm](https://nodejs.org/en/);
- [ruby](https://www.ruby-lang.org/pt/downloads/) (para compilar o SASS);
- [sass](https://www.npmjs.com/package/sass);

## Como fazer rodar a aplicação

- Clone o repositório 
`
$ git clone git@github.com:raphzandrade/frontend-challenge.git
 `

 - Entre na pasta do projeto 
 `
 $ cd frontend-challenge/app/
 `

 - Inicie o servidor node
`
$ node server.js
`

- Abra o navegador e entre no endereço
`
http://localhost:4200/
`

## Como rodar os testes unitários 

Para rodar os testes unitários basta digitar o seguinte comando dentro da pasta do projeto: 

`
$ grunt jasmine
`

## Para desenvolver 
 
 Neste projeto foi utilizado o grunt para compactação de html e Javascript, assim como para compilar os arquivos SASS (que facilitam muito a escrita e manutenção).

 Para manter o grunt compilando as novas modificações realizadas, utilize o seguinte comando: 

 `
 grunt watch
 `

 Enquanto o grunt estiver realizando a tarefa, todas alterações realizadas serão automaticamente compiladas/compactadas para os arquivos de destino.


 ## Pendências e melhorias

 - Testes (incluir mais caso no existente e criar um teste para o server.js);
 - Performance do JS principal (Simplificação e reescrita).
 - Criação dos scripts de máscara para os campos de cep e telefone.
 - Melhoria do server.js.
 - Melhoria no layout geral.