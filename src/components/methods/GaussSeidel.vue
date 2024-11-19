<template>
    <v-container>
        <v-row>
            <v-col cols="4">
                <h3>Matriz</h3>
                <div class="matriz">
                    <div v-for="(fila, i) in initialMatrix" :key="i" class="fila">
                        <span v-for="(columna, j) in fila" :key="j" class="columna">
                        {{ columna }}
                        </span>
                    </div>
                </div>
            </v-col>
            <v-col cols="4">
                <v-row>
                    <v-col cols="12" class="cntr">
                        <v-btn @click="gaussSeidel(10), visited()">Calcular</v-btn>
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
                <h3>Matriz diagonal dominante</h3>
                <div class="matriz">
                    <div v-for="(fila, i) in diagonalDominante" :key="i" class="fila">
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
        <v-row>
            <v-col>
                <v-data-table :items="resultMatrix" v-if="toggle"></v-data-table>
                <no-data-view v-else />
            </v-col>
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
            initialMatrix: [
                [11, -3, -2],
                [5, -2, -8],
                [4, -7, 2]
            ],
            diagonalDominante:[
                [11, -3, -2],
                [4, -7, 2],
                [5, -2, -8]
            ],
            resultMatrix:[],
            error:null,
            toggle: false
        }
    },
    methods:{
        visited(){
            this.toggle = true
        },
        gaussSeidel(n) {
            this.error = "No diagonal dominante"; // Asegúrate de validar que la matriz sea diagonal dominante antes de usar Gauss-Seidel.
            let iteracion = 0;
            let x = 0, y = 0, z = 0; // Valores iniciales

            const resultados = [];

            // Definimos las funciones para las ecuaciones de Gauss-Seidel
            const f_x = (y, z) => (3 - y - z) / 10;
            const f_y = (x, z) => (15 - 2 * x - z) / 10;
            const f_z = (x, y) => (27 - x - 2 * y) / 10;

            // Almacenamos la iteración inicial
            resultados.push({
                n: iteracion,
                xn: parseFloat(x.toFixed(4)),
                yn: parseFloat(y.toFixed(4)),
                zn: parseFloat(z.toFixed(4))
            });

            // Bucle para iterar el método de Gauss-Seidel
            for (let i = 0; i < n; i++) {
                const xn = f_x(y, z); // Calcular x con los valores actuales de y y z
                const yn = f_y(xn, z); // Usar el nuevo valor de x para calcular y
                const zn = f_z(xn, yn); // Usar los nuevos valores de x y y para calcular z

                x = xn;
                y = yn;
                z = zn;

                resultados.push({
                    n: i + 1,
                    xn: parseFloat(x.toFixed(4)),
                    yn: parseFloat(y.toFixed(4)),
                    zn: parseFloat(z.toFixed(4))
                });

                iteracion++;
            }

            // Retornamos los resultados de las iteraciones
            return this.resultMatrix = resultados;
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
  /* border: 1px solid black; */
  min-width: 30px;
  text-align: center;
}
.cntr{
    display: flex;
    justify-content: center
}
</style>