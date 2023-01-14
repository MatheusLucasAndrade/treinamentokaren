/*
    ATIVIDADE KAREN.

    1 - Um array simples                []
      - Um array bidimensional
      - Um array tridimensional
      (Console.log de cada array criado)

    2 - Um objeto simples               {}
      - Um Objeto de objeto
      - Um Objeto de Objeto com Array

    3 - Crie um sistema simples que verifica se o valor da variável
        é igual a 10, se verdadeiro, some 40 há essa mesma variável
        output: 50;

      - Crie um sistema simples que verifica se 3 valores de variáveis
        são IDÊNTICAS, se verdadeiro retornar: output: "São idênticas"

      - Crie um sistema simples que verifica se pelo menos 1 valor de variáveis
        são IDÊNTICAS, se verdadeiro retornar: output: "Condição verdadeira"

      - Crie um sistema que NEGUE o valor de um interruptor de tomada
*/

// 1 - let array = [1, 3, 5, 7, 9];

// console.log(array[0]);

// a - let arrayBi = [1, 3, 5, [6, 2, 5], 7, [8], 9];

// console.log(arrayBi[3][0], arrayBi[1]);

// b - let arrayTri = [2, 3, [2, 3, 4, [1]]];

// console.log(arrayTri[2][3][0]);

// c - let mia = {
//   gato: true,
//   especie: "felino",
//   idade: 15,
// };

// console.log(mia.idade);

// 2 -let setup = {
//   cpu: {
//     placaMae: "asrock",
//   },
//   monitor: "noc",
//   mesa: {
//     decoracoes: 10,
//   },
// };

// console.log(setup.cpu.placaMae);

// a - let setup2 = {
//   cpu2: {
//     componentes: ["placa mae", "RAM", "pato", "ventoinha"],
//   },
//   monitor2: {
//     modelo: "noc",
//     caracteristica: {
//       altura: 50,
//       largura: 70,
//       polegadas: 30,
//     },
//   },
// };

// console.log(
//   setup2.cpu2.componentes[1],
//   setup2.monitor2.caracteristica.polegadas
// );

// 3 - let validacao = 10;

// if (validacao === 10) {
//   console.log(validacao + 40);
// } else {
//   console.log("Tente novamente");
// }

// a - let karen = ["Baiana", 22, "mulher"];

// if (karen[0] === "Baiana" && karen[1] === 22 && karen[2] !== "homem") {
//   console.log("São idênticas");
// } else {
//   console.log("Não são idênticas");
// }

// b - let matheus = "humano";

// if (matheus !== "humano" || matheus === "animal" || matheus === "cachorro") {
//   console.log("OK");
// } else {
//   console.log("NOK");
// }

// c - const interruptor = false;

// if (!interruptor) {
//   console.log("TA AQUI");
// }

// ! = "DO CONTRA"
