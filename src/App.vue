<template>
  <Suspense>
    <ApiAmocrm />
  </Suspense>
</template>

<script>
import ApiAmocrm from './components/ApiAmocrm.vue';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'App',
  components: {
    ApiAmocrm
  }
})
</script>

<style>
html {
  background: #ececec;
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 34px;
  padding-left: 17px;
  padding-right: 17px;
}
</style>