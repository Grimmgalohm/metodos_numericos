<template>
    <v-container style="text-align: center;">
        <v-row>
            <v-col cols="12">
                <h1>SEL - Método de Gauss-Jordan</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-textarea v-model="textoMatriz" placeholder="Ingresa los elementos de la matriz separados con espacio entre si y con salto de linea las filas"></v-textarea>
            </v-col>
            <v-col cols="4">
                <v-row>
                    <v-col cols="12" class="cntr">
                        <v-btn @click="gaussJordan()">Calcular</v-btn>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" class="cntr">
                        <span v-if="error">
                            {{ error }}
                        </span>
                        <span v-else></span>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="4">
                <h3>Matriz resultado</h3>
                <div class="matriz">
                    <div v-for="(fila, i) in resultMatrix" :key="i" class="fila">
                        <span v-for="(columna, j) in fila" :key="j" class="columna">
                        {{ columna }}
                        </span>
                    </div>
                </div>
            </v-col>
        </v-row>
        <v-row v-if="toggle">
            <v-col cols="4"></v-col>
            <v-col cols="4"></v-col>
            <v-col cols="4"></v-col>
        </v-row>
        <v-row v-else>
            <no-data-view/>
        </v-row>
    </v-container>
</template>

<script>
import NoDataView from '../layouts/NoDataView.vue';

export default{
    components:{
        NoDataView
    },
    data(){
        return{
            augmentedMatrix: [
                [4, 4, 1, 1],
                [9, 8, 2, 2],
                [1, 0, 2, 3]
            ],
            textoMatriz: "",
            resultMatrix:[],
            error:null,
            toggle: false
        }
    },
    methods:{
        visited(){
            this.toggle = true
        },
        procesarMatriz(){
            try {
                this.error = null; // Reinicia errores
                const filas = this.textoMatriz.trim().split("\n");
                const matriz = filas.map(fila =>
                    fila.trim().split(/\s+/).map(Number)
                );

                // Verifica si hay valores no numéricos
                if (matriz.some(fila => fila.some(isNaN))) {
                    this.error = "La matriz contiene valores no numéricos.";
                }

                this.augmentedMatrix = matriz; // Guarda la matriz procesada
            } catch (e) {
                this.error = e.message; // Muestra el error
                this.matriz = null; // Reinicia la matriz
            }
        },
        gaussJordan() {
            this.procesarMatriz();

            const matrix = this.augmentedMatrix;

            const rows = matrix.length;
            const cols = matrix[0].length;

            for (let i = 0; i < rows; i++) {
                // Hacer el pivote 1 dividiendo toda la fila por el elemento principal
                let pivot = matrix[i][i];
                if (pivot === 0) {
                    this.error = "El sistema no tiene solución única.";
                }
                for (let j = 0; j < cols; j++) {
                    matrix[i][j] /= pivot;
                }
                // Eliminar las demás entradas en la columna del pivote
                for (let k = 0; k < rows; k++) {
                    if (k !== i) {
                        let factor = matrix[k][i];
                        for (let j = 0; j < cols; j++) {
                            matrix[k][j] -= factor * matrix[i][j];
                        }
                    }
                }
            }
            return this.resultMatrix = matrix;
        }
    }
}
</script>

<style>
.matriz {
  display: flex;
  flex-direction: column;
}
.fila {
  display: flex;
}
.columna {
  padding: 5px;
  border: 1px solid black;
  min-width: 30px;
  text-align: center;
}
.cntr{
    display: flex;
    justify-content: center
}
</style>