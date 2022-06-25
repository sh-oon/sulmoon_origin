<template>
  <Header/>
  <div class="w-full h-screen bg-gradient-to-r from-indigo-300 to-purple-300 bg-opacity-5 flex flex-col items-center">
    <Notice/>
    <Sulmoon/>
<!--    <Footer/>-->
  </div>
</template>

<script setup>
import Header from '@/layout/Header.vue'
import Notice from '@/layout/Notice.vue'
import Sulmoon from "@/layout/Sulmoon.vue";
</script>

<style scoped>

</style>