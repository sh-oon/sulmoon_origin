import {reactive, ref, watch} from "vue";
const startCarousel = ref(0)
// Teleport modal
const modalShow = {
  // 이용약관 동의서
  NoU: ref(false),
  ToS: ref(false),
}

// modal setter
const setModal = (modalName, bool) => {
  modalShow[modalName].value = bool
}
const openModal = (name) => setModal(`${name}`, true)
const hideModal = (name) => setModal(`${name}`, false)

export {
  modalShow,
  setModal,
  openModal,
  hideModal,
  startCarousel,
}
