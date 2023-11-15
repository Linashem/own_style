<script setup lang="ts">
import HeaderPage from './HeaderPage.vue'
import BanerPage from './BanerPage.vue'
</script>

<template>
  <div class="header_and_baner_block">
    <div class="header_block">
      <HeaderPage />
    </div>
    <div class="baner_block">
      <BanerPage />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header_and_baner_block {
  position: relative;
  .header_block {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    width: 100%;
  }
  .baner_block {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
