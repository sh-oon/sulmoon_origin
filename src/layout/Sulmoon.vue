<template>
  <div
    class="content mt-4 drop-shadow-lg relative flex flex-col gap-y-2 items-end"
  >
    <form class="sulmoon gap-4 flex flex-col">
      <label for="name">
        <span class="block w-3/12 text-sm">이름</span>
        <input
          type="text"
          id="name"
          class="placeholder:text-sm"
          placeholder="이름을 입력해주세요"
          v-model="param.name"
          @change="searchChangeFunc"
        />
      </label>
      <label for="nickname">
        <span class="block w-3/12 text-sm">단톡방 닉네임</span>
        <input
          type="text"
          id="nickname"
          class="placeholder:text-sm"
          placeholder="오픈채팅방 닉네임을 입력해주세요"
          v-model="param.nickname"
          @change="searchChangeFunc"
        />
      </label>
      <label for="phone">
        <span class="block w-3/12 text-sm">전화번호</span>
        <input
          type="text"
          id="phone"
          inputmode="numeric"
          class="placeholder:text-sm"
          placeholder="'-'없이 입력해주세요 ex) 01012341234"
          v-model="param.phone"
          @change="searchChangeFunc"
        />
      </label>
      <label for="email">
        <div class="w-3/12 flex flex-col">
          <span class="block text-sm">이메일</span>
          <span class="text-[10px]">* gmail 아이디만 입력해주세요.</span>
        </div>
        <input
          type="text"
          id="email"
          class="placeholder:text-sm email !w-1/3"
          placeholder="ID"
          v-model="param.email"
          @change="searchChangeFunc"
        />
        <span>@gmail.com</span>
      </label>
      <div class="flex items-center gap-x-2">
        <span class="block w-3/12 text-sm">참여장소</span>
        <div class="w-9/12 flex flex-col">
          <div class="flex gap-4">
            <label>
              <span class="block text-sm">온라인</span>
              <input
                type="checkbox"
                value="online"
                name="location"
                id="online"
                v-model="param.location.online"
                @change="searchChangeFunc"
              />
            </label>
            <label>
              <span class="block text-sm">오프라인</span>
              <input
                type="checkbox"
                value="offline"
                name="location"
                id="offline"
                v-model="param.location.offline"
                @change="searchChangeFunc"
              />
            </label>
          </div>
          <span class="text-[9px]"> * 동시선택 가능합니다</span>
        </div>
      </div>
    </form>
    <button
      class="content !w-20"
      :class="{ disabled: submit }"
      :disabled="submit"
      @click="handleSubmit"
    >
      제출
    </button>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { throttle } from "lodash";
import axios from "axios";
import Swal from "sweetalert2";

const param = reactive({
  name: null,
  nickname: null,
  phone: null,
  email: null,
  location: {
    online: false,
    offline: false,
  },
});
const submit = ref(null);

const searchChangeFunc = () => {
  const disabled = (() => {
    if (param.name === "") return true;
    if (param.nickname === "") return true;
    if (param.phone === "") return true;
    if (param.email === "") return true;
    if (!param.location.online && !param.location.offline) return true;
    return false;
  })();
  submit.value.disabled = disabled;
};

const handleSubmit = throttle(async () => {
  submit.value.disabled = true;
  const deadLine = new Date("2022-07-6T23:59:59").valueOf();
  const today = new Date();
  if (deadLine < today.valueOf()) {
    await Swal.fire("신청기간이 지났습니다.");
    return;
  }
  const data = {
    sheet_name: "신청서",
    timeStamp: today.toLocaleString(),
    name: param.name,
    nickname: param.nickname,
    phone: param.phone,
    email: `${param.email}@gmail.com`,
    online: param.location.online ? "✓" : "",
    offline: param.location.offline ? "✓" : "",
  };
  try {
    console.log("test");
    console.lo;
    await axios.get(
      "https://script.google.com/macros/s/AKfycbyVl3fRUlQ5WeJQ-EwXie7Hcuxel_9QF5pTDsvAFpcQSvPnyhsT5i_ZM-XfYVqsI9HE0Q/exec",
      {
        params: data,
      }
    );
    Swal.fire({
      title: `신청완료!`,
      text: "문의사항은 컨퍼런스 운영진에게 문의주세요.",
      icon: "success",
    }).then(() => {
      searchChangeFunc();
    });
  } catch (e) {
    console.error(e);
    Swal.fire({
      title: `신청이 되지 않았습니다.\n지속된다면 컨퍼런스 운영진에게 연락주세요.`,
      icon: "error",
    }).then(() => {
      searchChangeFunc();
    });
  }
}, 100);
</script>

<style scoped>
label {
  @apply flex items-center gap-1;
}

input[type="text"] {
  @apply p-2 w-9/12 rounded-xl;
}

.disabled {
  @apply text-[#888888] bg-gray-300;
}
</style>
