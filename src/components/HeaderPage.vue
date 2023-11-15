<template>
  <header class="header">
    <nav class="header_nav">
      <ul class="header_list">
        <li class="header_item">О нас</li>
        <li class="header_item">Курсы</li>
        <li class="header_item">Работы учениц</li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.header {
  width: 100%;
  color: white;
  display: flex;
  text-align: center;
  justify-content: center;
  &_nav {
    width: 1200px;
    display: flex;
    text-align: center;
  }
  &_list {
    display: flex;
    list-style: none;
    gap: 40px;
    margin-top: 50px;
    padding-left: 30px;
  }
}
</style>
