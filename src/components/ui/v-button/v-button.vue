<template>
	<button :class="['button', `button--${variant}`, {'button--dark-mode': calcStore.isDarkMode}]">
		<slot></slot>
	</button>
</template>

<script>
import { useCalcStore } from '@/stores/calcStore';
export default {
	 name:'v-button',
	 props:{
		variant:{
			type:String,
			required:false,
			default:'primary',
			validator(val){
				return ['primary', 'action', 'control'].includes(val)
			}
		},
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