<template>
  <div class="content mt-4 shadow-down relative flex flex-col gap-y-2 items-end">
    <form class="content full gap-4 flex flex-col">
      <label for="name">
        <span>이름</span>
        <input type="text" id="name" placeholder="이름을 입력해주세요" v-model="param.name">
      </label>
      <label for="nickname">
        <span>단톡방 닉네임</span>
        <input type="text" id="nickname" placeholder="오픈채팅방 닉네임을 입력해주세요" v-model="param.email">
      </label>
      <label for="phone">
        <span>전화번호</span>
        <input type="text" id="phone" placeholder="'-'없이 입력해주세요 ex) 01012341234" v-model="param.phone">
      </label>
      <label for="email">
        <span>이메일</span>
        <input type="text" id="email" placeholder="example@gmail.com" v-model="param.email">
      </label>
      <div class="flex items-center gap-x-2">
        <span class="w-3/12">참여장소</span>
        <div class="w-9/12 flex gap-4">
          <label for="online">
            <span class="full block">온라인</span>
            <input type="radio" value="online" name="location" id="online" v-model="param.location">
          </label>
          <label for="offline">
            <span class="full block">오프라인</span>
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
span {
  @apply w-3/12 block
}
input[type="text"] {
  @apply p-2
}
</style>