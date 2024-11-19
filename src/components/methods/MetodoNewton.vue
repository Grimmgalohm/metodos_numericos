<template>
    <v-container class="rb">
        <v-row>
            <v-col cols="12">
                <h1>Método de Newton</h1>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center rb">
            <v-col cols="4" class="rb">
                <v-radio-group v-model="option">
                    <v-radio label="f(x)=xsenx+2x^2-1 / f'(x)=xcosx+senx+4x" value="1" @click="metodoNewton(a)"></v-radio>
                    <v-radio label="f(x)x^2-e^x-3x+2 / f'(x) =2x-e^x-3" value="2" @click="metodoNewton(b)"></v-radio>
                </v-radio-group>
            </v-col>
            <v-col cols="4" class="d-flex justify-center rb">
                <v-btn @click="visited()" :disabled="option==null">Calcular</v-btn>
            </v-col>
            <v-col cols="4" class="d-flex justify-center rb">
                <v-sheet>
                    <p>Xn = [
                        <span v-if="!isEditing" @click="toggleEditing" > {{ a }}</span>
                        <input
                        v-else
                        v-model="a"
                        @blur="toggleEditing"
                        @keyup.enter="toggleEditing"
                        type="number"
                        class="edit-input"
                        /> ]
                    </p>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-data-table :items="dataTable" v-if="toggle"></v-data-table>
                <no-data-view v-else />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import NoDataView from '../layouts/NoDataView.vue';

export default {
    components:{
        NoDataView
    },
    data(){
        return{
            tablerows:this.tablerows,
            min_cols: 1,
            toggle: false,
            throw_error: null,
            dataTable: null,
            isEditing: false,
            a: 3,
            b: 3,
            option:null
        }
    },
    methods:{
        visited(){
            this.toggle = true
        },
        toggleEditing(){
            this.isEditing = !this.isEditing;
        },
        metodoNewton(x0) {
            const f = (x) => (x * Math.exp(x) - Math.pow(x, 3)) - 3; // Definimos f(x)
            const fPrime = (x) => Math.exp(x) * (x + 1) - 3 * Math.pow(x, 2); // Derivada de f(x)
            const resultados = []; // Lista para almacenar las iteraciones

            let x = x0, fx, fpx;
            let iteracion = 0;

            do {
                fx = f(x); // Calculamos f(x)
                fpx = fPrime(x); // Calculamos f'(x)

                // Guardamos los valores de la iteración
                resultados.push({
                    iteracion: ++iteracion,
                    x: parseFloat(x.toFixed(4)),
                    fx: parseFloat(fx.toFixed(4)),
                    fpx: parseFloat(fpx.toFixed(4)),
                });

                // Aplicamos la fórmula de Newton
                x = x - fx / fpx;

            } while (Math.abs(fx) > 0.0001); // Condición de parada

            return this.dataTable = resultados;
        }
    }
}
</script>

<style>
.rb{
    border-width: thick;
    border-color: red;
}
.inner-container{
    padding: 0;
    margin: 0;
}
.edit-input{
    max-width: 50px;
    background-color: #EDEDED;
}
</style>

<!--
    Metodos Una variable
    - n = numero de iteraciones
    - a, b y c (internas)
    - f(a,b,c) también internas
    - Output: Tabla con los datos

    Metodos SEL
    - Son Planos :D pero basicamente necesitamos hacer que el metodo sea medio visual
-->