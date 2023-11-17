<template>
  <header class="header">
    <nav class="header_nav">
      <div class="header_line">
        <button @click="isActiveHandler" class="header_burger">
          <span class="burger_item"></span>
          <span class="burger_item"></span>
          <span class="burger_item"></span>
        </button>
       <!-- <button> {{ isActive? 'x':'o' }} </button> -->
        <ul :class="{ active: isActive }">
          <li class="header_item"><a href="">О нас</a></li>
          <li class="header_item"><a href="">Курсы</a></li>
          <li class="header_item"><a href=""> Работы учениц</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';



let isActive = ref(false);


const isActiveHandler = () => {
  isActive.value = !isActive.value;
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  color: white;
  display: flex;
  text-align: center;
  justify-content: center;
  &_nav {
    position: relative;
    width: 1200px;
    display: flex;
    text-align: center;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 40px;
    margin-top: 50px;
    padding-left: 30px;
  }
}
.header_burger {
  display: none;
}
@media (max-width: 670px) {
  .header_burger {
    position: absolute;
    top: 23px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    border: none;
    background-color: black;
    .burger_item {
      width: 28px;
      height: 3px;
      background-color: white;
    }
  }
  .header_burger:hover {
    opacity: 0.6;
    transition: ease 0.5s;
  }
  .header_nav {
    justify-content: center;
    width: 100%;
    ul {
      display: none;
    }
    .header_line {
      height: 65px;
      width: 100%;
      background-color: black;
    }
    .active {
      display: flex;
      flex-direction: column;
      padding: 50px;
      background-color: black;
      width: 100%;
    }
  }
}
</style>
