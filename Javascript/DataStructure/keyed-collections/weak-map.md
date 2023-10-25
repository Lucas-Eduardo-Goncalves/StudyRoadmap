# Mapa Fraco (WeakMap)

O WeakMap é uma estrutura de dados em Javascript que se assemelha a um Map, mas com algumas diferenças cruciais. É uma coleção de pares chave/valor, onde as chaves devem ser objetos e são mantidas de forma fraca. Isso significa que as chaves que não são mais acessíveis por outras referências podem ser automaticamente removidas pelo coletor de lixo. Diferentemente dos mapas convencionais, os WeakMaps não são iteráveis e não suportam operações de iteração como size, clear e forEach.

## Características Principais do WeakMap

1. **Chaves são Objetos e Mantidas de Forma Fraca**: Um dos principais diferenciais do WeakMap é que ele só aceita objetos como chaves, e essas chaves são mantidas de forma fraca. Isso significa que se não houver outras referências para um objeto usado como chave, ele pode ser automaticamente removido pelo coletor de lixo. Isso é útil em situações em que você não quer que as chaves do mapa impeçam a coleta de lixo.

2. **Privacidade dos Dados**: O WeakMap é frequentemente usado para armazenar dados privados associados a objetos sem poluir o espaço de nomes do objeto. Como as chaves são objetos, o acesso aos valores do mapa é possível apenas se o objeto-chave estiver acessível de outra forma no código.

3. **Não é Iterável**: Ao contrário de um Map normal, um WeakMap não é iterável. Isso significa que você não pode usar métodos como forEach, keys ou values para percorrer os elementos do mapa.

4. **Melhoria de Desempenho e Economia de Memória**: O uso de WeakMaps pode melhorar o desempenho e economizar memória, especialmente em cenários onde a criação e destruição frequentes de objetos estão envolvidas.

## Exemplos e Casos de Uso

1. **Armazenamento de Dados Privados**: Um uso comum do WeakMap é armazenar dados privados associados a objetos. Isso pode ser útil em bibliotecas e estruturas de código onde você deseja associar dados privados a um objeto sem expô-los publicamente.

```javascript
const privates = new WeakMap();

class Exemplo {
  constructor() {
    privates.set(this, { hiddenData: "Some hidden data" });
  }

  getPrivateData() {
    return privates.get(this);
  }
}

const example = new Exemplo();
console.log(example.getPrivateData()); // Saída: { hiddenData: "Some hidden data" }
```

2. **Cache de Dados para Objetos**: Você pode usar WeakMaps para criar caches de dados associados a objetos. Isso pode ser útil quando você precisa armazenar resultados de cálculos complexos ou dados temporários relacionados a objetos.

```javascript
const cache = new WeakMap();

function complexCalculation(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  } else {
    const result = /* ... perform complex calculation ... */;
    cache.set(obj, result);
    return result;
  }
}
```

3. **Melhoria de Desempenho em Estruturas de Dados Grandes**: Em estruturas de dados grandes, o uso de WeakMaps pode ajudar a melhorar o desempenho e economizar memória, pois as chaves que não são mais acessíveis podem ser automaticamente removidas pelo coletor de lixo.

Embora o WeakMap não seja tão amplamente utilizado quanto o Map, ele desempenha um papel importante em cenários específicos em que a privacidade dos dados, a economia de memória e o gerenciamento automático de recursos são essenciais.

## Como o GarbageCollector funciona?

O coletor de lixo apaga as chaves em um WeakMap quando essas chaves não são mais acessíveis a partir de nenhum outro lugar do código. Isso é feito quando o coletor de lixo percebe que não existem mais referências para um objeto-chave fora do WeakMap. A razão para essa característica é permitir que objetos sejam automaticamente removidos quando não são mais necessários, o que pode economizar memória e evitar vazamentos de memória.

Vamos ver um exemplo para entender melhor:

```js
let key = { id: 1 }; // Um objeto-chave

const weakMap = new WeakMap();
weakMap.set(key, "Informação confidencial");

console.log(weakMap.get(key)); // Saída: "Informação confidencial"

key = null; // Removendo a única referência externa para o objeto-chave

// Neste ponto, o coletor de lixo percebe que o objeto-chave não é mais acessível e pode remover a entrada no WeakMap.
```

Neste exemplo, quando `key` é definido como `null`, a única referência para o objeto-chave é eliminada. O coletor de lixo, em algum momento, perceberá que não existem mais referências válidas para o objeto-chave e poderá limpar a entrada correspondente no WeakMap. Isso significa que a entrada que associava o objeto-chave à "Informação confidencial" no WeakMap será automaticamente removida quando o objeto-chave se tornar inacessível.

Isso é útil em situações onde você deseja associar dados a objetos, mas também deseja que esses dados sejam automaticamente liberados quando os objetos não são mais necessários. Evita vazamentos de memória, já que as entradas no WeakMap são automaticamente removidas quando as chaves não são mais referenciadas, ao contrário dos Map padrão, onde as entradas permaneceriam até que você as removesse manualmente.
