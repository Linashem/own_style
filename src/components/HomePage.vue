<script setup lang="ts">
import HeaderPage from './HeaderPage.vue'
import BanerPage from './BanerPage.vue'
import AboutUs from './AboutUs.vue'
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

  <main>
    <AboutUs />
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  // justify-content: center;
}
.header_and_baner_block {
  position: relative;
  padding-bottom: 100vh;
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
