<template>
    <v-container class="rb">
        <v-row>
            <v-col cols="12">
                <h1>Método de Falsa Posición (Regula Falsi)</h1>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center rb">
            <v-col cols="4" class="rb">
                <v-radio-group v-model="option">
                    <v-radio label="xe^x-x^3-3" value="1" @click="falsaPosicion(a,b,1)"></v-radio>
                    <v-radio label="x^2-e^x-3x+2" value="2" @click="falsaPosicion(a,b,2)"></v-radio>
                </v-radio-group>
            </v-col>
            <v-col cols="4" class="d-flex justify-center rb">
                <v-btn @click="visited()" :disabled="option==null">Calcular</v-btn>
            </v-col>
            <v-col cols="4" class="d-flex justify-center rb">
                <v-sheet>
                    <p>Rango de la función [
                        <span v-if="!isEditing" @click="toggleEditing" > {{ a }}</span>
                        <input
                        v-else
                        v-model="a"
                        @blur="toggleEditing"
                        @keyup.enter="toggleEditing"
                        type="number"
                        class="edit-input"
                        />
                        ,
                        <span v-if="!isEditing" @click="toggleEditing" >{{ b }}</span>
                        <input
                        v-else
                        v-model="b"
                        @blur="toggleEditing"
                        @keyup.enter="toggleEditing"
                        type="number"
                        class="edit-input"
                        />
                        ]
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

        falsaPosicion(a, b, s) {
            const f = (x) => s==1? (x * Math.exp(x) - Math.pow(x, 3)) - 3: (Math.pow(x,2)-Math.exp(x)-(3*x)+2); // Definimos la función f(x)
            const resultados = []; // Lista para almacenar las iteraciones

            let c, fc;
            let iteracion = 0;

            do {
                const fa = f(a); // Calculamos f(a)
                const fb = f(b); // Calculamos f(b)

                // Aplicamos la fórmula de la falsa posición
                c = b - (fb * (b - a)) / (fb - fa);
                fc = f(c); // Evaluamos f(c)

                // Guardamos los valores en el array de resultados
                resultados.push({
                    iteracion: ++iteracion,
                    a: parseFloat(a.toFixed(4)),
                    b: parseFloat(b.toFixed(4)),
                    c: parseFloat(c.toFixed(4)),
                    fa: parseFloat(fa.toFixed(4)),
                    fb: parseFloat(fb.toFixed(4)),
                    fc: parseFloat(fc.toFixed(4)),
                });

                // Actualizamos los valores de a o b dependiendo del signo de f(c)
                if (fa * fc < 0) {
                    b = c;
                } else {
                    a = c;
                }

            } while (Math.abs(fc) > 0.00001); // Condición de parada
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