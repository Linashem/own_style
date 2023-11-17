<template>
  <div class="baner">
    <div class="baner_text">
      <h2>Школа шитья</h2>
      <h1 class="baner_title">Свой Стиль</h1>
    </div>
    <div class="baner_arrow">
      <a href="#about">
        <svg
          role="presentation"
          class="t-cover__arrow-svg"
          style="fill: #e6e6e6"
          x="0px"
          y="0px"
          width="38.417px"
          height="18.592px"
          viewBox="0 0 38.417 18.592"
        >
          <g>
            <path
              d="M19.208,18.592c-0.241,0-0.483-0.087-0.673-0.261L0.327,1.74c-0.408-0.372-0.438-1.004-0.066-1.413c0.372-0.409,1.004-0.439,1.413-0.066L19.208,16.24L36.743,0.261c0.411-0.372,1.042-0.342,1.413,0.066c0.372,0.408,0.343,1.041-0.065,1.413L19.881,18.332C19.691,18.505,19.449,18.592,19.208,18.592z"
            ></path>
          </g>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.baner {
  position: relative;
  background-image: url('./baner.jpg');
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
.baner_arrow {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  animation-name: arrow-bottom;
  animation-duration: 1800ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate-reverse;
  z-index: 10;
}

@keyframes arrow-bottom {
  0% {
    top: 90%;
  }
  100% {
    top: 91%;
  }
}

@media (max-width: 670px) {
  .baner_title {
    font-size: 40px;
    font-weight: 500;
  }
}
@media (max-width: 558px) {
  .baner_text {
    width: 280px;
  }
}
</style>
