<template>
	<div class="history">
		{{calcStore.history}}
	</div>
</template>

<script>

import { ref } from 'vue';
import { useCalcStore } from '@/stores/calcStore';

export default {
	 name:'v-history',
	 setup(){
		const calcStore = useCalcStore()
		
		return {
			calcStore
		}
	 }
}
</script>

<style lang='scss' src='./style.scss' scoped/>