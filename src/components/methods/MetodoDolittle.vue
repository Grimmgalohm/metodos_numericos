<template>
    <v-container id="app">
        <v-row>
            <v-col cols="12">
                <h1>Factorización LU - Método de Doolittle</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <p>Sistema de ecuaciones:</p>
                <ul>
                    <li>4x + 2y + 2z = 3</li>
                    <li>2x + 2y       = 2</li>
                    <li>2x       + 4z = 1</li>
                </ul>
            </v-col>
            <v-col cols="4">
                <v-btn @click="factorizarLU">Calcular Factorización LU</v-btn>
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
    components:{
      NoDataView
    },
    data() {
      return {
        steps: [],
      };
    },
    methods: {
      factorizarLU() {
        // Matriz A y vector b
        const A = [
          [4, 2, 2],
          [2, 2, 0],
          [2, 0, 4]
        ];
        const b = [3, 2, 1];
  
        // Inicializar L y U
        const n = A.length;
        const L = Array.from({ length: n }, () => Array(n).fill(0));
        const U = Array.from({ length: n }, () => Array(n).fill(0));
  
        // Paso 1: Factorización LU
        for (let i = 0; i < n; i++) {
          for (let j = i; j < n; j++) {
            U[i][j] = A[i][j];
            for (let k = 0; k < i; k++) {
              U[i][j] -= L[i][k] * U[k][j];
            }
          }
  
          for (let j = i; j < n; j++) {
            if (i === j) {
              L[j][i] = 1;
            } else {
              L[j][i] = A[j][i];
              for (let k = 0; k < i; k++) {
                L[j][i] -= L[j][k] * U[k][i];
              }
              L[j][i] /= U[i][i];
            }
          }
        }
  
        // Paso 2: Sustitución hacia adelante (resolver Ly = b)
        const y = Array(n).fill(0);
        for (let i = 0; i < n; i++) {
          y[i] = b[i];
          for (let j = 0; j < i; j++) {
            y[i] -= L[i][j] * y[j];
          }
        }
  
        // Paso 3: Sustitución hacia atrás (resolver Ux = y)
        const x = Array(n).fill(0);
        for (let i = n - 1; i >= 0; i--) {
          x[i] = y[i];
          for (let j = i + 1; j < n; j++) {
            x[i] -= U[i][j] * x[j];
          }
          x[i] /= U[i][i];
        }
  
        // Registrar los pasos
        this.steps = [
          `Matriz L: ${JSON.stringify(L)}`,
          `Matriz U: ${JSON.stringify(U)}`,
          `Vector y (Ly = b): ${JSON.stringify(y)}`,
          `Solución final (Ux = y): ${JSON.stringify(x)}`
        ];
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
  #app ul li{
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
  