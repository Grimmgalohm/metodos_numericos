<template>
    <v-container>
        <v-tabs 
            v-model="tab"
            align-tabs="center"
            color="deep-purple-accent-4"
            >
            <v-tab :value="1">Portada</v-tab>
            <v-tab :value="2">¿Qué son los métodos numéricos?</v-tab>
            <v-tab :value="3">About</v-tab>
        </v-tabs>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item :value="1">
                <v-row>
                    <v-col cols="4"></v-col>
                    <v-col cols="4"></v-col>
                    <v-col cols="4"></v-col>
                </v-row>
                <v-row>
                    <v-col cols="3" style="text-align: end;"><img :src="acatlan" style="width: 100px; height: 110px; margin-top: 20px;"></v-col>
                    <v-col cols="6">
                        <v-row>
                            <v-col cols="12" class="mt-3">
                                <h2>Universidad Nacional Autónoma de México</h2>
                                <br>
                                <h2>Facultad de Estudios Superiores Acatlán</h2>
                                <br>
                                <h3>Licenciatura en Matemáticas Aplicadas y Computación</h3>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                                <br>
                                <br>
                                <ul>
                                    <li>Axel :v</li>
                                    <li>Guzmán Bautista Miguel Adolfo</li>
                                    <li>Luna Limón César Rodrigo</li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="3" style="text-align:start;"><img :src="unam" style="width: 100px; height: 110px; margin-top: 20px;"></v-col>
                </v-row>
            </v-tabs-window-item>
            <v-tabs-window-item :value="2">
                <v-container style="text-align: justify;">
                    <v-row>
                    <v-col cols="12">
                        <v-card>
                        <v-card-title>
                            Métodos Numéricos: Explicación y Uso Profesional
                        </v-card-title>
                        <v-card-subtitle>
                            Introducción a los métodos y su aplicación en diversas áreas profesionales.
                        </v-card-subtitle>
                        <v-card-text>
                            <v-row>
                            <v-col cols="12">
                                <h3>¿Qué son los Métodos Numéricos?</h3>
                                <p>
                                Los <strong>métodos numéricos</strong> son técnicas matemáticas utilizadas para obtener soluciones aproximadas a problemas matemáticos que no pueden resolverse de manera exacta o analítica. Estos métodos se aplican a ecuaciones algebraicas, diferenciales, integrales, entre otras, que no tienen solución directa o requieren una gran cantidad de recursos computacionales para obtener resultados precisos.
                                </p>
                                <p>
                                Los métodos numéricos se caracterizan por ser iterativos, lo que significa que se aproximan a la solución verdadera mediante repetidas aproximaciones sucesivas. Estos métodos son fundamentales cuando se trabaja con sistemas complejos o grandes cantidades de datos.
                                </p>
                            </v-col>
                            <v-col cols="12">
                                <h3>Uso de los Métodos Numéricos en el Ámbito Profesional</h3>
                                <p>
                                Los métodos numéricos tienen una amplia gama de aplicaciones profesionales en diversas disciplinas. Algunos ejemplos de su uso incluyen:
                                </p>
                                <v-list>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Ingeniería</v-list-item-title>
                                    <v-list-item-subtitle>
                                        Se utilizan para modelar sistemas físicos, realizar simulaciones de procesos industriales, y en el diseño de estructuras mediante el análisis de tensiones y deformaciones.
                                    </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Ciencias de la Computación</v-list-item-title>
                                    <v-list-item-subtitle>
                                        Son fundamentales en la optimización de algoritmos, la computación gráfica, el análisis de datos, y el procesamiento de imágenes.
                                    </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Finanzas</v-list-item-title>
                                    <v-list-item-subtitle>
                                        Se utilizan en la valoración de activos financieros, la gestión de riesgos y la predicción de movimientos de mercado mediante modelos matemáticos.
                                    </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                <v-list-item>
                                    <v-list-item-content>
                                    <v-list-item-title>Ciencias Físicas y Químicas</v-list-item-title>
                                    <v-list-item-subtitle>
                                        En la simulación de fenómenos naturales, como la predicción del clima, el estudio de reacciones químicas, y la dinámica de fluidos.
                                    </v-list-item-subtitle>
                                    </v-list-item-content>
                                </v-list-item>
                                </v-list>
                                <p>
                                Los profesionales en estos campos utilizan herramientas basadas en métodos numéricos para obtener resultados prácticos y eficaces ante problemas complejos, especialmente cuando no es posible obtener una solución exacta.
                                </p>
                            </v-col>
                            </v-row>
                        </v-card-text>
                        </v-card>
                    </v-col>
                    </v-row>
                </v-container>
            </v-tabs-window-item>
            <v-tabs-window-item :value="3" style="display:grid; place-items: center;height: 45vh;">
                2024
            </v-tabs-window-item>
        </v-tabs-window>
    </v-container>
</template>

<script>
import acalogo from '/src/assets/logo.png';
import unamlogo from '/src/assets/unam.png';
export default{
    data(){
        return{
            tab:null,
            acatlan: acalogo,
            unam: unamlogo
        }
    }
}
</script>

<style scoped>
.v-card-title {
  font-weight: bold;
}
</style>