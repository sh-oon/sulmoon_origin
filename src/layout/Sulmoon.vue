<template>
  <div class="content mt-4 drop-shadow-lg relative flex flex-col gap-y-2 items-end">
    <form class="sulmoon gap-4 flex flex-col">
      <label for="name">
        <span class="block w-3/12 text-sm">이름</span>
        <input type="text" id="name" class="placeholder:text-sm" placeholder="이름을 입력해주세요" v-model="param.name">
      </label>
      <label for="nickname">
        <span class="block w-3/12 text-sm">단톡방 닉네임</span>
        <input type="text" id="nickname" class="placeholder:text-sm" placeholder="오픈채팅방 닉네임을 입력해주세요"
               v-model="param.nickname">
      </label>
      <label for="phone">
        <span class="block w-3/12 text-sm">전화번호</span>
        <input type="text" id="phone" inputmode="numeric" class="placeholder:text-sm"
               placeholder="'-'없이 입력해주세요 ex) 01012341234" v-model="param.phone">
      </label>
      <label for="email">
        <div class="w-3/12 flex flex-col">
          <span class="block text-sm">이메일</span>
          <span class="text-[10px]">* gmail 아이디만 입력해주세요.</span>
        </div>
        <input type="text" id="email" class="placeholder:text-sm email !w-1/3" placeholder="ID" v-model="param.email">
        <span>@gmail.com</span>
      </label>
      <div class="flex items-center gap-x-2">
        <span class="block w-3/12 text-sm">참여장소</span>
        <div class="w-9/12 flex flex-col">
          <div class="flex gap-4">
            <label>
              <span class="block text-sm">온라인</span>
              <input type="checkbox" value="online" name="location" id="online" v-model="param.location.online">
            </label>
            <label>
              <span class="block text-sm">오프라인</span>
              <input type="checkbox" value="offline" name="location" id="offline" v-model="param.location.offline">
            </label>
          </div>
          <span class="text-[9px]"> * 동시선택 가능합니다</span>
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
  location: {
    online: false,
    offline: false,
  }
})

// 요기다 짜세용
const submit = () => {
  let data = {
    name: param.name,
    nickname: param.nickname,
    phone: param.phone,
    email: `${param.email}@gmail.com`,
    location: param.location
  }

  console.log(data)
}
</script>

<style scoped>

label {
  @apply flex items-center gap-1
}

input[type="text"] {
  @apply p-2 w-9/12 rounded-xl
}
</style>