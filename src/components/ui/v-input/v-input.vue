<template>
	<input :class="['input', 'text-2xl', 'w-[100%]', 'border-solid', 'border-black', 'border-[1px]', 'bg-transparent', 'mb-[10px]', 'p-1', {'input--dark-mode': calcStore.isDarkMode}]"
		:value="modelValue"
		@input="updateValue"
		type="number"
		:disabled="disabled"
		/>
</template>

<script>
import { useCalcStore } from '@/stores/calcStore';
export default {
	name: 'v-input',
	props:{
		modelValue: Number,
		disabled:{
			type:Boolean,
			required:false,
			default:false
		}
	},
	setup(_,{emit}) {
		const calcStore = useCalcStore()

		const updateValue = e => {
			emit('update:modelValue', +e.target.value)
		}
		return {
			calcStore,
			updateValue
		}
	}
}
</script>



<style lang='scss' src='./style.scss' scoped/>