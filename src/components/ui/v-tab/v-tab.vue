<template>
	<div :class="['tab', 'rounded-3xl', 'px-4', 'py-1', 'cursor-pointer', 'font-semibold', 'transition', {'tab--active':calcStore.activeTab.id === id}, {'tab--dark-mode':calcStore.isDarkMode}]">
		<slot></slot>
	</div>
</template>

<script>
import { useCalcStore } from '@/stores/calcStore';
export default {
	 name:'v-tab',
	 props:{
		id:{
			type:Number,
			required:true,
			default:()=>{}
		}
	 },
	 setup(){
		const calcStore = useCalcStore()
		return{
			calcStore
		}
	 }
}
</script>

<style lang='scss' src='./style.scss' scoped/>