<template>
  <teleport to="#destination" :disabled="!modalShow.NoU.value">
    <div class="
        flex fixed h-screen w-screen xl:w-screen top-0 left-0
         bg-opacity-50 bg-[#998FA2] backdrop-blur-[3px] xl:fixed
         justify-start items-center z-40"
         @click="hideModal('NoU')"
    />

    <div class="centered flex flex-col w-full px-4 h-[36rem] overflow-hidden z-50">
      <div class="w-full h-full bg-white rounded-2xl flex flex-col items-center justify-center">
        <h2 class="text-lg font-bold">개인정보 이용제공 동의서</h2>
        <div class="p-4">
          - 이용자가 제공한 모든 정보는 다음의 목적을 위해 활용하며, 하기 목적 이외의 용도로는 사용되지 않습니다.
          <br/>
          ① 개인정보 수집 항목 및 수집·이용 목적
          가) 수집 항목 (필수항목)
          - 성명(국문), 전화번호, 이메일 주소
          나) 수집 및 이용 목적
          - 신청자 집계 및 선별의 목적
          - 신청자와의 연락 및 자격확인
          <br/>
          ② 개인정보 보유 및 이용기간
          - 수집·이용 동의일로부터 개인정보의 수집·이용목적을 달성할 때까지
          <br/>
          ③ 동의거부관리
          - 귀하께서는 본 안내에 따른 개인정보 수집, 이용에 대하여 동의를 거부하실 권리가 있습니다. 다만, 귀하가 개인정보의 수집/이용에 동의를 거부하시는 경우에 컨퍼런스 참가자 선별 과정에 있어 불이익이 발생할 수 있음을 알려드립니다.
        </div>
        <button class="w-2/5 h-12 rounded-xl text-gray-600 font-bold bg-indigo-200"
                @click="hideModal('NoU')"
        >확인</button>
      </div>
    </div>
  </teleport>
</template>

<script setup>
import {hideModal, modalShow} from "@/store/modal-store.js";

</script>
<style scoped>
body {
  height: 100%;
  overflow: hidden;
}

.centered {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.content {
  @apply text-sm
}
</style>