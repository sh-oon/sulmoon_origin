<script setup>
import 'normalize.css'
import NoU from '@/components/NoU.vue'
</script>

<template>
  <router-view></router-view>
  <div v-show="false">
    <NoU></NoU>
  </div>
</template>

<style>
@font-face {
  font-family: 'NanumSquareRound';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

html {
  font-family: 'NanumSquareRound';
}
</style>
