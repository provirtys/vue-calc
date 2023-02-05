import { onMounted, onUnmounted } from "vue"

const useClickOutside = (el, handler) => {
  const listener = (e) => {
    if (!el.value || el.value.contains(e.target)) return
		handler()
  }

  onMounted(() => document.addEventListener("mousedown", listener)) 
  onUnmounted(() => document.removeEventListener("mousedown", listener)) 
}
export default useClickOutside
