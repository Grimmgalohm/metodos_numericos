<template>
    <v-container>
        <v-row>
            <v-col cols="2">
                <main-menu class="menu-wrap"/>
            </v-col>
            <v-col cols="10">
                <component class="component-wrap" :is="selectedTab"></component>
            </v-col>
        </v-row>   
    </v-container>
</template>


<script>
import MainMenu from '../UI/MainMenu.vue';
import MetodosIntroduccion from '../methods/MetodosIntroduccion.vue';
import FalsaPosi from '../methods/FalsaPosi.vue';
import MetodoNewton from '../methods/MetodoNewton.vue';
import MetodoSecante from '../methods/MetodoSecante.vue';
import GaussJordan from '../methods/GaussJordan.vue';
import MetodoJacobi from '../methods/MetodoJacobi.vue';
import GaussSeidel from '../methods/GaussSeidel.vue';
import MetodoDolittle from '../methods/MetodoDolittle.vue';
import MetodoCholesky from '../methods/MetodoCholesky.vue';
import MetodoPotencia from '../methods/MetodoPotencia.vue';
import PotenciaInversa from '../methods/PotenciaInversa.vue';

export default{
    components:{
        MainMenu,
        MetodosIntroduccion,
        FalsaPosi,
        MetodoNewton,
        MetodoSecante,
        GaussJordan,
        MetodoJacobi,
        GaussSeidel,
        MetodoDolittle,
        MetodoCholesky,
        MetodoPotencia,
        PotenciaInversa
    },
    data(){
        return{
            selectedTab: 'metodos-introduccion',
            items:[
                {
                    name:"Falsa Posición",
                    tag:"falsa-posi"
                },
                {name:"Newton",tag:"metodo-newton"},
                {name:"Secante",tag:"metodo-secante"},
                {name:"Gauss-Jordan",tag:"gauss-jordan"},
                {name:"Jacobi",tag:"metodo-jacobi"},
                {name:"Gauss-Seidel",tag:"gauss-seidel"},
                {name:"Dolittle",tag:"metodo-dolittle"},
                {name:"Cholesky",tag:"metodo-cholesky"},
                {name:"Potencia",tag:"metodo-potencia"},
                {name:"Potencia inversa",tag:"potencia-inversa"}
            ]
        }
    },
    provide(){
        return{
            menuItems: this.items,
            selectedTabIs: this.selectedTabIs
        }
    },
    methods:{
        selectedTabIs(tag){
            this.selectedTab = tag
            console.log(this.selectedTab)
        }
    }
}
</script>

<style>
.container{
    background-color: black;
}
</style>