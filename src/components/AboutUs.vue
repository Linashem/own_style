<template>
  <div id="about" class="about_block">
    <div class="about_img">
      <!-- <img src="" alt="" class="about_img" /> -->
    </div>
    <div class="about_text">
      <h2 class="title">Lorem, ipsum dolor.</h2>
      <p class="desc">Lorem ipsum dolor sit amet.</p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ullam, consequatur incidunt
        laudantium maiores assumenda, exercitationem debitis libero, eos voluptatum alias temporibus
        laborum quod vero omnis. A iste dolorum quae eos, natus, consectetur reprehenderit magni,
        distinctio soluta obcaecati laborum rem.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.about_block {
  display: flex;
  max-width: 1200px;
  margin: 100px 0;
}
.about_img {
  height: 600px;
  width: 100%;
  background: gray;
}
.about_text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 40px;
  width: 100%;
}
@media (max-width: 600px) {
  .about_block {
    flex-direction: column;
  }
  .about_img {
    height: 400px;
  }
}
</style>
