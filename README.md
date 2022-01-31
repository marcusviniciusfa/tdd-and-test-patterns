## Desenvolvimento Dirigido por Testes (TDD)

>_"TDD é uma maneira de gerenciar o medo durante a programação."_ - Kent Beck

### Rodando os Testes

- `yarn install` ou `npm install`
- `yarn test` ou `npm run test`

### Estrutura de um Teste Automatizado

- `Given (Dado que)`: Definição de todas as informações necessárias para executar o comportamento que será testado
- `When (Quando)`: Executar o comportamento
- `Then (Então)`: Verificar o que aconteceu após a execução, comparando as informações retornadas com a expectativa que foi criada

[^1]

### Três Leis do TDD

1. Você não pode escrever nenhum código até ter escrito um teste que detecte uma possível falha. 
1. Você não pode escrever mais testes de unidade do que o suficiente para detectar a falha.
1. Você não pode escrever mais código do que o suficiente para passar nos testes.

[^2]

### Test Double

"Um test double é um padrão que tem o objetivo de substituir um DOC (depended-on component) em um determinado tipo de teste por motivos de performance ou segurança"

#### Padrões de Teste

- `Dummy`: Objetos que criamos apenas para completar a lista de parâmetros que precisamos passar para invocar um determinado método
- `Stubs`: Objetos que retornam respostas prontas, definidas para um determinado teste, por questão de performance ou segurança (exemplo: quando eu executar o método fazer pedido preciso que o método pegar cotação do dólar retorne R$3,00)
- `Spies`: Objetos que "espionam" a execução do método e armazenam os resultados para verificação posterior (exemplo: quando eu executar o método fazer pedido preciso saber se o método enviar email foi invocado internamente e com quais parâmetros)
- `Mocks`: Objetos similares a stubs e spies, permitem que você diga exatamente o que quer que ele faça e o teste vai quebrar se isso não acontecer
- `Fake`: Objetos que tem implementações que simulam o funcionamento da instância real, que seria utilizada em produção (exemplo: uma base de dados em memória)

[^3]

[^1]: Artigo: https://martinfowler.com/bliki/GivenWhenThen.html
[^2]: Artigo: http://blog.cleancoder.com/uncle-bob/2014/12/17/TheCyclesOfTDD.html
[^3]: Artigo: https://martinfowler.com/bliki/TestDouble.html