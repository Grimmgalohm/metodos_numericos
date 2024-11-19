<template>
  <v-app>
    <v-main>
      <main-container/>
    </v-main>
  </v-app>
</template>

<script>
import MainContainer from './components/MainContainer.vue';

export default {
  name: 'App',

  components: {
    MainContainer,
  },

  data: () => ({
    //
  }),
}
</script>
