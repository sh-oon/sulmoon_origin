<template>
  <div class="content mt-4 shadow-down relative flex flex-col gap-y-2 items-end">
    <form class="sulmoon gap-4 flex flex-col">
      <label for="name">
        <span class="block w-3/12 text-sm">이름</span>
        <input type="text" id="name" class="placeholder:text-sm" placeholder="이름을 입력해주세요" v-model="param.name">
      </label>
      <label for="nickname">
        <span class="block w-3/12 text-sm">단톡방 닉네임</span>
        <input type="text" id="nickname" class="placeholder:text-sm" placeholder="오픈채팅방 닉네임을 입력해주세요" v-model="param.email">
      </label>
      <label for="phone">
        <span class="block w-3/12 text-sm">전화번호</span>
        <input type="text" id="phone" class="placeholder:text-sm" placeholder="'-'없이 입력해주세요 ex) 01012341234" v-model="param.phone">
      </label>
      <label for="email">
        <div class="w-3/12 flex flex-col">
          <span class="block text-sm">이메일</span>
          <span class="text-[10px]">* gmail로 입력해주세요</span>
        </div>
        <input type="text" id="email" class="placeholder:text-sm" placeholder="example@gmail.com" v-model="param.email">
      </label>
      <div class="flex items-center gap-x-2">
        <span class="block w-3/12 text-sm">참여장소</span>
        <div class="w-9/12 flex gap-4">
          <label for="online">
            <span class="block text-sm">온라인</span>
            <input type="radio" value="online" name="location" id="online" v-model="param.location">
          </label>
          <label for="offline">
            <span class="block text-sm">오프라인</span>
            <input type="radio" value="offline" name="location" id="offline" v-model="param.location">
          </label>
        </div>
      </div>
    </form>
    <button class="content !w-20" @click="submit">제출</button>
  </div>
</template>

<script setup>

import {reactive} from "vue";

const param = reactive({
  name: null,
  nickname: null,
  phone: null,
  email: null,
  location: null
})

// 요기다 짜세용
const submit = () => {
  console.log(param)
}
</script>

<style scoped>
.full {
  width: 100% !important;
}

label {
  @apply flex items-center gap-1
}
input[type="text"] {
  @apply p-2 w-9/12
}

</style>