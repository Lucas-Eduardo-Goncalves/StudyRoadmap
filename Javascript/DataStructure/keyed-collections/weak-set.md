# WeakSet

Um objeto WeakSet é uma estrutura de dados em Javascript que se assemelha a um Set, mas com algumas diferenças importantes. Assim como os Sets, os WeakSets são coleções de objetos, e cada objeto em um WeakSet ocorre apenas uma vez, garantindo que todos os objetos na coleção sejam únicos. A principal diferença é que os objetos em um WeakSet são mantidos de forma fraca, o que significa que, se não houver outras referências para um objeto, ele pode ser automaticamente removido pelo coletor de lixo.

## Características Principais de um WeakSet

1. **Objetos Únicos**: Um WeakSet garante que cada objeto seja único dentro da coleção. Se você tentar adicionar o mesmo objeto mais de uma vez, a operação será ignorada.

2. **Aceita Apenas Objetos**: Um WeakSet só pode conter objetos como elementos. Tentar adicionar valores não-objetos (como números, strings, etc.) resultará em um erro.

3. **Mantido de Forma Fraca**: A característica fundamental do WeakSet é que ele mantém seus objetos de forma fraca. Isso significa que se o único local onde um objeto é referenciado for o WeakSet, o objeto pode ser removido pelo coletor de lixo, mesmo que esteja na coleção.

4. **Não é Iterável**: Os WeakSets não são iteráveis como os Sets. Você não pode acessar um objeto específico com base em sua posição no conjunto, e não há métodos de iteração como forEach disponíveis.

## Exemplos e Casos de Uso

Aqui estão alguns exemplos de como os WeakSets podem ser usados e casos de uso comuns:

1. **Referências Fracas**: A principal finalidade dos WeakSets é a manutenção de referências fracas. Isso é útil em situações em que você deseja associar dados a objetos, mas não deseja impedir que esses objetos sejam coletados pelo coletor de lixo quando não são mais referenciados em nenhum outro lugar do código.

```javascript
const weakSet = new WeakSet();
let objeto = { nome: "Alice" };

weakSet.add(objeto);

// Mais tarde, quando não há mais referências externas para 'objeto':
objeto = null; // O objeto pode ser coletado pelo coletor de lixo e removido automaticamente do WeakSet.
```

2. **Privacidade de Dados**: Os WeakSets são frequentemente usados para associar dados privados a objetos de forma que esses dados não sejam acessíveis a partir de fora do objeto, mas possam ser automaticamente removidos quando o objeto é coletado.

```javascript
const privates = new WeakSet();

class ClasseComDadosPrivados {
  constructor() {
    privates.add(this);
    this.dadosPrivados = { segredos: "Só para uso interno" };
  }

  getDadosPrivados() {
    if (privates.has(this)) {
      return this.dadosPrivados;
    }
    return undefined;
  }
}

const objeto = new ClasseComDadosPrivados();
console.log(objeto.getDadosPrivados()); // Saída: { segredos: "Só para uso interno" }

// Quando o objeto não é mais acessível, os dados privados são automaticamente removidos.
```

3. **Conjunto de Objetos Únicos**: Os WeakSets também podem ser usados quando você precisa manter uma coleção de objetos únicos, onde a coleta automática é uma vantagem.

```javascript
const conjuntoDeObjetosUnicos = new WeakSet();
const objetoA = { id: 1 };
const objetoB = { id: 2 };

conjuntoDeObjetosUnicos.add(objetoA);
conjuntoDeObjetosUnicos.add(objetoB);
conjuntoDeObjetosUnicos.add(objetoA); // Tentar adicionar novamente o mesmo objeto será ignorado.

console.log(conjuntoDeObjetosUnicos.has(objetoA)); // Saída: true
```

Os WeakSets são especialmente úteis quando a privacidade de dados, a economia de memória e a eliminação automática de objetos não utilizados são considerações importantes em sua aplicação. Eles são adequados para cenários em que você precisa associar dados a objetos, mas deseja que esses dados sejam automaticamente liberados quando os objetos não são mais necessários.
