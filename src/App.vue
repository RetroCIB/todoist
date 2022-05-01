<template>
  <div id="app">
      <app-header/>
      <app-main/>
  </div>
</template>

<script>
import AppMain from "@/components/AppMain";
import AppHeader from "@/components/AppHeader";

export default {
    components: {AppHeader, AppMain}
}
</script>


<style lang="scss">
</style>