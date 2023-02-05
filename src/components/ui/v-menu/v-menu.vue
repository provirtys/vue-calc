<template>
	<Transition name="menu">
		<div v-if="calcStore.isOpen" class="menu absolute z-10 top-0 bottom-0 left-0 right-0 rounded-3xl bg-white border-[1px] border-black">
			<slot></slot>
			<div class="menu-close w-[40px] h-[40px] cursor-pointer absolute top-2 right-2" @click="calcStore.isOpen = false">
				<svg  viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g data-name="Layer 2"><g data-name="close"><rect width="24" height="24" transform="rotate(180 12 12)" opacity="0"/><path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"/></g></g></svg>
			</div>
		</div>
	</Transition>

</template>

<script>

import { useCalcStore } from '@/stores/calcStore';
export default {
	name: 'v-menu',
	setup(){
		const calcStore = useCalcStore()

		return{
			calcStore
		}
	}
}
</script>



<style lang='scss' src='./style.scss' scoped/>