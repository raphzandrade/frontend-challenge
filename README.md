# Front-end Challenge 

Desafio proposto pela GetNinjas como parte do processo seletivo para a vaga de desenvolvedor front-end. :)

## Dependências
- [grunt](https://gruntjs.com/);
- [node & npm](https://nodejs.org/en/);
- [ruby](https://www.ruby-lang.org/pt/downloads/);
- [sass](https://www.npmjs.com/package/sass);

## Como fazer rodar a aplicação

- Clone o repositório 
`
$ git clone -endereço-
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


 ## O que falta

 Alguns pontos ainda podem ser muito melhorados no projeto, entre eles: 

 - Testes;
 - Performance do JS principal.