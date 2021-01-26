<template>
    <base-layout>
        <health-menu></health-menu>
        <graph-result></graph-result>
    </base-layout>
</template>
<script>
import GraphResult from '../Health/GraphGLU.vue'
import HealthMenu from '../Health/HealthMenu.vue'
export default {
  components: { 
      HealthMenu,
      GraphResult
   },
  
}
</script>