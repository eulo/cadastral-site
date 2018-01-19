<template>
  <div class="scrollable-parent">
    <div class="scrollable">
      <div class="scrollable-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.scrollable-parent {
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
}
.scrollable {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.scrollable-content {
  right: -14px;
  padding-right: 14px;
  position: absolute;
  overflow: scroll;
  overflow-x: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
