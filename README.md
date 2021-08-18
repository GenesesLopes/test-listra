# Listra - Processo seletivo.

Este projeto foi proposto como etapa de seleção para Desenvolvedor Full Stack.

# Sobre o projeto!

Este teste possui como objetivo simular o financiamento de um veículo no qual o cliente possui interesse. O sistema deve atender os seguintes requisitos: 

* O sistema deve permitir que o cliente selecione qual veículo deseja simular o financiamento.
* Ao selecionar o item, o sistema deve exibir o valor do veículo selecionado e um campo para que ele  coloque o valor de entrada que deseja dar no financiamento.
  * O valor de entrada, pode ser qualquer valor inferior ao veículo que esteja sendo simulado
* Ao clicar em simular o sistema deve exibir os valores das parcelas simuladas.
  * A fórmula para calcular as parcelas é: (valor do carro - valor da entrada) / números de parcelas.
  * O número de parcelas será: 6, 12 e 48.


# Estrutura e tecnologias
Para a construção do projeto, foi utlizado as seguintes tecnologias:

* **Ambiente de desenvolvimento**
    * Docker/docker-compose
        * PHP 8.0
        * Node 14-lts
        * Nginx 1.21.0
* **Font-end.**
    * VueJs
    * Bootstrap 4
        * SASS
    * Axios
* **Back-end.**
    * Lavavel Versão 8
    * MySql 5.7
    * Redis 6.2

# Iniciando projeto

Para iniciar o projeto, não é obrigatório a utilização do docker, porém se faz recomendado por simular ao maximo a ambiente de produção.

- Clone o repositorio:

```bash
  git clone https://github.com/GenesesLopes/test-listra.git
```

- Navegue até a pasta que acabou de clonar:

```bash
  cd test-listra
```

- Para subir o container desejado, basta executar o comando (Windows, ou Linux):

```sh
docker-compose -f .docker/docker-compose.yml up -d nomeDoContainer
```
- Ou pode Subir todos de uma vez: 
```sh
docker-compose -f .docker/docker-compose.yml up -d --build --force-recreate
```
- Containers disponiveis; `api-listra`, `nginx-listra`, `db-listra` e `redis-listra`.


Caso utilize VSCode, você terá a opção de subir todo o ambiente de desenvolvimento utilizando o plugin 
<a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers">Remote Container</a>. mas vale lembrar que é orbigatório o uso do docker.

# Executando projedo

Para fins de teste, o projeto (inicializado utilizando docker), já executa o build para execução na porta 80. A api está disponível na porta 8000.
