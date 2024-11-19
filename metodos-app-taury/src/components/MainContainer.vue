<template>
  <v-container class="main-wrap">
    <v-row>
      <v-col cols="12">
        <the-header/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <data-viewer/>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <the-footer/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TheHeader from './layouts/TheHeader.vue';
import DataViewer from './layouts/DataViewer.vue';
import TheFooter from './layouts/TheFooter.vue';

export default {
  components:{
    TheHeader,
    DataViewer,
    TheFooter
  },
  data(){
    return{
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-wrap{
  width: 75vw;
  max-width: 76vw;
}
</style>
