# Mapas (Map)

Um mapa (Map) é uma estrutura de dados que permite armazenar coleções de pares chave-valor. Cada chave é associada a um valor correspondente. Ao contrário de objetos em Javascript, que também podem ser considerados coleções chave-valor, um mapa pode usar chaves de qualquer tipo, não se limitando apenas a strings ou símbolos. Mapas são uma característica fundamental em muitas linguagens de programação, incluindo Javascript, e oferecem algumas vantagens importantes sobre abordagens mais simples para armazenar dados.

## Características Principais dos Mapas

1. **Chaves de Qualquer Tipo**: A principal diferença entre um mapa e um objeto (ou dicionário em outras linguagens) é que um mapa permite que você use praticamente qualquer tipo de dado como chave. Isso inclui números, strings, objetos, funções e até mesmo outros mapas. Isso torna os mapas muito flexíveis em comparação com objetos, que só permitem chaves como strings ou símbolos.

2. **Ordenação de Inserção**: Os mapas geralmente mantêm a ordem de inserção dos pares chave-valor. Isso significa que, ao iterar por um mapa, você acessa os elementos na mesma ordem em que foram inseridos. Essa ordenação é útil quando a sequência dos elementos é relevante.

3. **Eficiência**: Mapas são eficientes para operações de busca, adição e remoção de elementos. Eles são projetados para lidar com grandes quantidades de dados de forma eficiente, tornando-os uma escolha sólida em cenários onde o desempenho é crítico.

4. **Chaves Únicas**: Em um mapa, cada chave é única. Isso garante que não haja duplicatas. Se você tentar adicionar uma chave que já existe no mapa, o valor associado a essa chave será atualizado, substituindo o valor anterior.

## Exemplos e Casos de Uso

1. **Mapeamento de Dados**: Os mapas são frequentemente usados para mapear um conjunto de chaves para valores correspondentes. Por exemplo, você pode usar um mapa para criar um diretório telefônico, onde os nomes são as chaves e os números de telefone são os valores associados.

```js
const phoneBook = new Map();
phoneBook.set("Alice", "555-1234");
phoneBook.set("Bob", "555-5678");

console.log(phoneBook.get("Alice")); // Saída: "555-1234"
```

2. **Manter Ordem de Inserção**: Quando a ordem dos elementos é importante, como ao criar uma lista de tarefas a fazer, você pode usar um mapa para manter a ordem de inserção.

```js
const toDoList = new Map();
toDoList.set(1, "Comprar mantimentos");
toDoList.set(2, "Ir ao banco");

for (const [key, value] of toDoList) {
  console.log(`${key}: ${value}`);
}
// Saída:
// 1: Comprar mantimentos
// 2: Ir ao banco
```

3. **Chaves Complexas**: Em situações em que as chaves são objetos complexos ou funções, os mapas são úteis, pois aceitam qualquer tipo como chave.

```js
const userPreferences = new Map();
const user = { name: "Alice", id: 1 };

userPreferences.set(user, { theme: "dark", language: "en" });

console.log(userPreferences.get(user)); // Saída: { theme: "dark", language: "en" }
```

4. **Performance**: Quando você precisa de alta performance para pesquisas de dados, especialmente em grandes conjuntos de dados, os mapas são uma escolha eficiente em comparação com loops em arrays ou objetos.

```js
const employeeSalaries = new Map();
employeeSalaries.set("Alice", 50000);
employeeSalaries.set("Bob", 60000);

console.log(employeeSalaries.get("Alice")); // Saída: 50000
```

Os mapas são uma ferramenta versátil e poderosa para lidar com dados em JavaScript e em muitas outras linguagens de programação. Eles são particularmente úteis quando você precisa associar dados com chaves de diferentes tipos e manter a ordem de inserção.
