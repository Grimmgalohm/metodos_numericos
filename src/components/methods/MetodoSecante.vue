<template>
    <v-container class="rb">
        <v-row>
            <v-col cols="12">
                <h1>Método de la secante</h1>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center rb">
            <v-col cols="4" class="rb">
                <v-radio-group v-model="option">
                    <v-radio label="xe^x-x^3-3" value="1" @click="metodoSecante(a,b,1)"></v-radio>
                    <v-radio label="x^2-e^x-3x+2" value="2" @click="metodoSecante(a,b,2)"></v-radio>
                </v-radio-group>
            </v-col>
            <v-col cols="4" class="d-flex justify-center rb">
                <v-btn @click="visited()" :disabled="option==null">Calcular</v-btn>
            </v-col>
            <v-col cols="4" class="d-flex justify-center rb">
                <v-sheet>
                    <p>Define X1 =
                        <span v-if="!isEditing" @click="toggleEditing" > {{ a }}</span>
                        <input
                        v-else
                        v-model="a"
                        @blur="toggleEditing"
                        @keyup.enter="toggleEditing"
                        type="number"
                        class="edit-input"
                        />
                        , x2 =
                        <span v-if="!isEditing" @click="toggleEditing" >{{ b }}</span>
                        <input
                        v-else
                        v-model="b"
                        @blur="toggleEditing"
                        @keyup.enter="toggleEditing"
                        type="number"
                        class="edit-input"
                        />
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
            a: 0,
            b: 1,
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
        metodoSecante(x0, x1, s) {
            const f = (x) => s==1? (x * Math.exp(x) - Math.pow(x, 3)) - 3: (Math.pow(x,2)-Math.exp(x)-(3*x)+2); // Definimos la función f(x)
            const resultados = []; // Lista para almacenar las iteraciones

            let xPrev = x0, xCurr = x1, xNext, fxPrev, fxCurr;
            let iteracion = 0;

            do {
                fxPrev = f(xPrev); // Calculamos f(xPrev)
                fxCurr = f(xCurr); // Calculamos f(xCurr)

                // Aplicamos la fórmula de la secante
                xNext = xCurr - (fxCurr * (xCurr - xPrev)) / (fxCurr - fxPrev);

                // Guardamos los valores de la iteración
                resultados.push({
                    iteracion: ++iteracion,
                    Xn: parseFloat(xPrev.toFixed(4)),
                    //xCurr: parseFloat(xCurr.toFixed(4)),
                    //xNext: parseFloat(xNext.toFixed(4)),
                    f_Xn: parseFloat(fxPrev.toFixed(4)),
                    //fxCurr: parseFloat(fxCurr.toFixed(4)),
                });

                // Actualizamos los valores
                xPrev = xCurr;
                xCurr = xNext;

            } while (Math.abs(fxCurr) > 0.00001); // Condición de parada

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