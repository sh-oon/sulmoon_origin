<template>
  <div class="modal">
    <span class="close" @click="hideAll">&times;</span>
    <div class="modal-content z-50">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import {modalShow, setModal} from "@/store/modal-store.js";
import paper from 'paper'
import {paperCheck} from "@/custom/EventController.js";

export default {
  setup() {
    const hideAll = () => {
      let {designPaper} = paperCheck();
      designPaper.activate();
      Object.keys(modalShow).forEach(key => modalShow[key].value = false);
    }

    return {hideAll};
  }
};
</script>

<style>
.modal {
  @apply fixed z-[999] left-0 top-0 w-full h-[100%+1px] bg-[rgba(0,0,0,0.7)];
}

.close {
  @apply fixed p-[10px] text-gray-300 right-0 text-[28px] font-bold z-50 cursor-pointer;
}
</style>
