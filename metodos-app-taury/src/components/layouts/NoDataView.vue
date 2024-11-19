<template>
    <v-container>
        <v-row></v-row>
        <v-row>
            <v-col cols="4"></v-col>
            <v-col cols="4">
                <img :src="image" class="no-data-img">
            </v-col>
            <v-col cols="4"></v-col>
        </v-row>
        <v-row></v-row>
    </v-container>
</template>

<script>
import image from '/src/assets/logo.png';
export default{
    data(){
        return{
            image: image
        }
    }
}
</script>

<style>
.no-data-img{
    width: 100%;
}
</style>