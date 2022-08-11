## Projeto Tegrafood
Projeto feito para etapa do projeto simulado do programa Jovens Tegranos, onde é necessário fazer ou o front-end de acordo com o projeto Figma recebido, ou fazer a codificação da API com base na documentação providenciada. Neste projeto, eu decidi fazer ambos front-end e back-end a fim de melhor aproveitação dos designs recebidos.

No quesito de front-end, foram feitas as telas responsivas do login, cadastro, listagem de produtos (ambos administrador e usuário), criação/edição de produto, e finalmente a página de carrinho.

No quesito de back-end, foi feita uma API com acesso à um banco de dados SQLite, onde é possível armazenar os dados dos usuários e produtos. Além disso, para o carrinho e algumas outras funções, também é utilizado o sessionStorage para armazenamento de dados de curto prazo de uso.

---

### Como executar o projeto
1. Após baixar o projeto em seu computador, é necessário primeiro iniciar a API seguindo os seguintes comandos na pasta backend:
    1. `npm i`, durante sua primeira inicialização, para instalar os pacotes npm necessários;
    1. `npm run dev`, para iniciar a API (obs: esta API roda na porta 3001 por padrão, por favor garanta que tal porta está livre no momento de execução).
1. Com a API ligada, será possível acessar as páginas do projeto pela maneira desejada, sendo por meio de acesso direto ao arquivo HTML ou alguma extensão de IDE como Live Server (eu recomendo a segunda opção, pos ela permite melhor execução de como o projeto seria executado em um servidor sem problemas).

OBS: É possível que o fetch não funcione no seu navegador devido à falta de um certificado oficialmente validado na API, caso isso aconteça, por favor abra o site em um navegador com CORS desabilitado. Caso isso também não seja possível, por favor considere o vídeo demonstração e o código providenciado.

---

### Tecnologias utilizadas
+ HTML(HyperText Markup Language)
+ CSS(Cascading Style Sheets)
+ Javascript
+ SQLite
+ Express
+ Node.js
