<template>
  <div class="baner"></div>
  <div class="baner_text">
    <h2>Школа шитья</h2>
    <h1 class="baner_title">Свой Стиль</h1>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.baner {
  position: relative;
  background-image: url('baner.jpg');
  min-height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
}
.baner_text {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  z-index: 4;
  color: white;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
}
.baner_title {
  font-size: 50px;
  font-weight: 600;
}
.baner::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: -webkit-linear-gradient(top, rgba(0, 0, 0, 0.8), rgba(8, 29, 31, 0.7));
  z-index: 2;
}
@media (max-width: 670px) {
  .baner_title {
    font-size: 40px;
    font-weight: 500;
  }
}
@media (max-width: 558px) {
  .baner_text {
    width: 280px ;
  }
}
// @media (max-width: 558px) {
//   .baner_text {
//     width: 280px ;
//   }
// }
</style>
