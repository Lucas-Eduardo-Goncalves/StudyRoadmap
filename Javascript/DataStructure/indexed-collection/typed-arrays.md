# Typed Arrays

Typed Arrays (ou Arrays Tipados) em Javascript são uma forma de trabalhar com dados binários de maneira mais eficiente do que os arrays regulares, que são mais adequados para armazenar dados de texto e números. As Arrays Tipados são usadas para manipular dados binários, como imagens, áudio, vídeo e outros tipos de dados que são armazenados de forma binária.

Aqui estão alguns conceitos importantes relacionados às Arrays Tipados:

## Buffer de Dados Binários

Uma Array Tipada é, na verdade, uma "janela" em um buffer de dados binários. O buffer é uma área de memória onde os dados binários são armazenados. As Arrays Tipadas fornecem uma maneira estruturada de acessar e manipular esses dados binários.

## Tipos de Arrays Tipados

Em JavaScript, existem vários tipos de Arrays Tipados, cada um otimizado para armazenar um tipo específico de dado binário. Alguns dos tipos mais comuns incluem `Int8Array`, `Uint8Array`, `Int16Array`, `Uint16Array`, `Int32Array`, `Uint32Array`, `Float32Array`, `Float64Array`, entre outros.

- `Int8Array`: Armazena números inteiros de 8 bits (valores de -128 a 127).
- `Uint8Array`: Armazena números inteiros sem sinal de 8 bits (valores de 0 a 255).
- `Int16Array`: Armazena números inteiros de 16 bits (valores de -32.768 a 32.767).
- `Uint16Array`: Armazena números inteiros sem sinal de 16 bits (valores de 0 a 65.535).
- `Int32Array`: Armazena números inteiros de 32 bits.
- `Uint32Array`: Armazena números inteiros sem sinal de 32 bits.
- `Float32Array`: Armazena números de ponto flutuante de 32 bits (valores fracionários).
- `Float64Array`: Armazena números de ponto flutuante de 64 bits (valores fracionários com maior precisão).

## Criação de Arrays Tipados

Para criar uma Array Tipada, você aloca um buffer de dados binários e, em seguida, cria uma instância da Array Tipada que acessa esse buffer. Aqui está um exemplo de como criar uma `Uint8Array`:

```js
let buffer = new ArrayBuffer(16); // Aloca um buffer de 16 bytes
let uint8Array = new Uint8Array(buffer); // Cria uma Array Tipada Uint8Array
```

## Acesso e Manipulação de Dados

Uma vez que você tenha uma Array Tipada, você pode acessar e modificar os dados binários usando índices, semelhante a um array regular.

```js
uint8Array[0] = 42; // Define o primeiro byte para o valor 42
let value = uint8Array[0]; // Obtém o valor do primeiro byte
```

## Uso de Métodos e Propriedades

Arrays Tipados também possuem métodos e propriedades que podem ser usados para realizar operações em dados binários, como cópia, fatiamento, preenchimento, entre outros.

```javascript
uint8Array.copyWithin(2, 0, 4); // Copia os bytes da posição 0 a 4 para a posição 2
```

## Desempenho e Eficiência

Arrays Tipados são mais eficientes em termos de memória e desempenho em comparação com arrays regulares ao lidar com dados binários, especialmente em contextos que exigem processamento de grandes volumes de dados, como processamento de imagens ou áudios.

## Exemplo de uso

Um exemplo comum e útil de uso de Typed Arrays é no processamento de imagens, onde os dados da imagem são representados como matrizes de bytes. Vou dar um exemplo de como você pode usar um `Uint8Array` para manipular os pixels de uma imagem de forma eficiente em Javascript.

Suponha que você tenha uma imagem no formato PNG e deseja aplicar um efeito de escala de cinza a ela. Você pode carregar a imagem, converter seus dados em um `Uint8Array`, processá-los e, em seguida, exibir a imagem resultante. Aqui está um exemplo simplificado disso:

```js
// Suponha que você tenha uma imagem em HTML com o id "minha-imagem"
let imagemElement = document.getElementById("minha-imagem");

// Carregar a imagem
imagemElement.onload = function () {
  // Crie um contexto de desenho 2D
  let canvas = document.createElement("canvas");
  canvas.width = imagemElement.width;
  canvas.height = imagemElement.height;
  let ctx = canvas.getContext("2d");
  ctx.drawImage(imagemElement, 0, 0);

  // Obtenha os dados da imagem como um Uint8Array
  let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
  let data = new Uint8Array(imageData.buffer);

  // Aplicar o efeito de escala de cinza
  for (let i = 0; i < data.length; i += 4) {
    let valorCinza = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = data[i + 1] = data[i + 2] = valorCinza;
  }

  // Atualizar a imagem com os novos dados
  ctx.putImageData(new ImageData(data, canvas.width, canvas.height), 0, 0);

  // Exibir a imagem resultante
  document.body.appendChild(canvas);
};

// Defina a origem da imagem
imagemElement.src = "minha-imagem.png";
```

Neste exemplo, um Typed Array `Uint8Array` é usado para acessar os dados de pixel da imagem, manipulá-los para aplicar o efeito de escala de cinza e, em seguida, atualizar a imagem com os novos dados. Essa abordagem é eficiente e útil para processar imagens em JavaScript, pois permite acesso direto aos dados binários da imagem, o que é essencial para muitos tipos de manipulações de imagem.
