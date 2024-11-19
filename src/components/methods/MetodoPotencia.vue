<template>
    <v-container id="app">
      <v-row>
        <v-col cols="12">
          <h1>Métodos de Potencia y Potencia Inversa</h1>
        </v-col>
      </v-row>
  
      <v-row>
        <v-col cols="4">
          <p>Matriz A:</p>
          <pre>
            [[4, -1, 1],
             [-1, 3, -2],
             [1, -2, 3]]
          </pre>
        </v-col>
  
        <v-col cols="4">
          <v-btn @click="metodoPotencia">Método de Potencia</v-btn>
        </v-col>
  
        <v-col cols="4">
          <p>Pasos importantes:</p>
          <div v-if="steps.length">
            <ul>
              <li v-for="(step, index) in steps" :key="index">{{ step }}</li>
            </ul>
          </div>
        </v-col>
      </v-row>
  
      <v-row>
        <no-data-view/>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import NoDataView from '../layouts/NoDataView.vue';
  export default {
    components: {
      NoDataView
    },
    data() {
      return {
        steps: [],
        vectorInicial: [1, 1, 1],  // Vector inicial
        matrizA: [
          [4, -1, 1],
          [-1, 3, -2],
          [1, -2, 3]
        ],
        maxIteraciones: 10,
        tolerancia: 0.0001
      };
    },
    methods: {
      // Método de Potencia
      metodoPotencia() {
        let x = [...this.vectorInicial];
        let eigenValor = 0;
        let iter = 0;
  
        // Iteraciones
        for (iter = 0; iter < this.maxIteraciones; iter++) {
          const nuevoX = this.multiplicarMatrizVector(this.matrizA, x);
  
          // Normalizamos el nuevo vector
          const norma = this.normaVector(nuevoX);
          for (let i = 0; i < nuevoX.length; i++) {
            nuevoX[i] /= norma;
          }
  
          // Calculamos el valor propio aproximado
          const lambda = this.calcularValorPropio(x, nuevoX);
          eigenValor = lambda;
  
          // Verificamos la convergencia
          const error = this.calcularError(x, nuevoX);
          if (error < this.tolerancia) {
            break;
          }
  
          // Preparamos para la siguiente iteración
          x = [...nuevoX];
        }
  
        // Registrar los pasos
        this.steps = [
          `Vector inicial: ${JSON.stringify(this.vectorInicial)}`,
          `Valor propio aproximado: ${eigenValor.toFixed(4)}`,
          `Vector propio final: ${JSON.stringify(x)}`
        ];
      },
  
      // Método de Potencia Inversa
      metodoPotenciaInversa() {
        let x = [...this.vectorInicial];
        let eigenValor = 0;
        let iter = 0;
  
        // Iteraciones
        for (iter = 0; iter < this.maxIteraciones; iter++) {
          const nuevoX = this.multiplicarMatrizVector(this.matrizA, x);
  
          // Normalizamos el nuevo vector
          const norma = this.normaVector(nuevoX);
          for (let i = 0; i < nuevoX.length; i++) {
            nuevoX[i] /= norma;
          }
  
          // Calculamos el valor propio aproximado (inversa)
          const lambda = this.calcularValorPropio(x, nuevoX);
          eigenValor = 1 / lambda;  // Inversa del valor propio
  
          // Verificamos la convergencia
          const error = this.calcularError(x, nuevoX);
          if (error < this.tolerancia) {
            break;
          }
  
          // Preparamos para la siguiente iteración
          x = [...nuevoX];
        }
  
        // Registrar los pasos
        this.steps = [
          `Vector inicial: ${JSON.stringify(this.vectorInicial)}`,
          `Valor propio aproximado (inverso): ${eigenValor.toFixed(4)}`,
          `Vector propio final: ${JSON.stringify(x)}`
        ];
      },
  
      // Multiplicación de matriz por vector
      multiplicarMatrizVector(matriz, vector) {
        return matriz.map((row) =>
          row.reduce((sum, value, index) => sum + value * vector[index], 0)
        );
      },
  
      // Norma del vector
      normaVector(vector) {
        return Math.sqrt(vector.reduce((sum, value) => sum + value * value, 0));
      },
  
      // Calcular el valor propio
      calcularValorPropio(v1, v2) {
        return v1.reduce((sum, value, index) => sum + value * v2[index], 0);
      },
  
      // Calcular el error
      calcularError(v1, v2) {
        return v1.reduce((sum, value, index) => sum + Math.pow(value - v2[index], 2), 0);
      }
    }
  };
  </script>
  
  <style>
  #app {
    font-family: Arial, sans-serif;
    margin: 20px;
    text-align: center;
  }
  #app ul li {
    list-style: none;
    margin: none;
    padding: none;
  }
  button {
    margin: 10px 0;
    padding: 10px 15px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  </style>  