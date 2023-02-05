<template>
	<input class="display text-6xl text-end w-[100%] outline-none cursor-default bg-transparent"
		v-model="calcStore.result"
		readonly
		/>
</template>

<script>
import { useCalcStore } from '@/stores/calcStore';
export default {
	name: 'v-display',
	setup() {
		const calcStore = useCalcStore()
		return {
			calcStore
		}
	}
}
</script>



<style lang='scss' src='./style.scss' scoped/>