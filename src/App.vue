<template>
  <div id="app">
      <app-header/>
      <app-main/>

      <module-add-task/>
      <module-add-label/>

  </div>
</template>

<script>
import AppMain from "@/components/AppMain";
import AppHeader from "@/components/AppHeader";

export default {
    components: {AppHeader, AppMain},
    mounted(){
        this.$store.commit('count');
    }
}
</script>


<style lang="scss">
</style>