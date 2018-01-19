<template>
  <div class='container'>
    <doc-sidebar :sections="sections"></doc-sidebar>
    <doc-content :sections="sections"></doc-content>
  </div>
</template>

<script>
import DocSidebar from './DocSidebar.vue'
import DocContent from './DocContent.vue'
import sections from '../store/sections'

export default {
  components: {
    DocSidebar,
    DocContent
  },

  data: function () {
    return { sections }
  }
}
</script>

<style scoped>
.container {
  flex: 1 0 auto;
  position: relative;
}
</style>
