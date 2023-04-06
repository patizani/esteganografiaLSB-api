
# Esteganografia LSB

## Sobre
O desafio realizado foi desenvolver uma API Rest capaz de esconder e revelar a mensagem em uma imagem, utilizando o algoritmo LSB (Least Significant Bit).
Neste desafio foram utilizadas as seguintes tecnologias :

- Express
- Node
- Multer
- JavaScript

## Como executar o projeto

### Pre-requisitos
Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina: [Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).

## Executando o BackEnd (Server)

```bash
# Clonar este repositório
$ git clone git@github.com:patizani/esteganografiaLSB-api.git

# Acesse a pasta do projeto em seu terminal
$ cd esteganografiaLSB-api

# Instale as dependências
$ npm install

# Execute a aplicação no modo de desenvolvimento
$ npm executar dev

# O servidor iniciará na porta: 3333 - acesse <http://localhost:3333>
```

## Rotas da API
Foi utilizado o framework Open Source Insomnia para desenvolvimento e teste da API Rest. A API oferece quatro rotas para realizar as seguintes ações:

- POST /image = Recebe um multipart/form-data com uma imagem bitmap e retorna a identificação única do arquivo armazenado no diretório temporário './tmp' do servidor;

- GET /image/:filename = Retorna a imagem especificada no filename;  

- POST /encode = recebe um application/json com a identificação da imagem ("filename"), gerada após o upload para o servidor, e a mensagem original ("message"). A API deverá aplicar o algoritmo de Esteganografia e retornar um json com a identificação da imagem no novo arquivo gerado.

**Nota 1:** A imagem encodada parece estar corrompida, pois não consegui abrir e visualizar a imagem.

- GET /decode = recebe um application/json com com a identificação da imagem encodada ("filename") e retorna a mensagem escondida na imagem.

**Nota 2:** No algoritmo de esteganografia foi incluído o binário 00101110 (caractere '.') para evitar que seja percorrida toda a imagem durante a recuperação da mensagem. 

## Licença
Este projeto está sob licença
[MIT](https://github.com/patizani/esteganografiaLSB-api/blob/main/LICENSE)

Desenvolvido by Patrícia Garcia Zanirati (https://www.linkedin.com/in/patricia-zanirati/)
