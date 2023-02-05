<template>
	<div class="buttons">
		<v-button v-for="button in buttons"
			@click="button.onClick"
			:variant="button.variant"
			>
		{{ button.label }}
		</v-button>
	</div>
</template>

<script>
import { ref } from 'vue'
import VButton from '../ui/v-button/v-button.vue';
import { useCalcStore } from '@/stores/calcStore';
export default {
	name: 'v-buttons',
	components: { VButton },
	setup() {
		const calcStore = useCalcStore()
		const buttons = ref([
			{
				label: 'AC',
				variant: 'control',
				onClick: () => calcStore.onClickReset()
			},
			{
				label: '<=',
				variant: 'control',
				onClick: () => calcStore.onClickBack()
			},
			{
				label: '%',
				variant: 'action',
				onClick: () => calcStore.onClickPrecent()
			},
			{
				label: '/',
				variant: 'action',
				onClick: () => calcStore.onClickAction('/')
			},
			{
				label: '7',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('7')
			},
			{
				label: '8',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('8')
			},
			{
				label: '9',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('9')
			},
			{
				label: 'X',
				variant: 'action',
				onClick: () => calcStore.onClickAction('*')
			},
			{
				label: '4',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('4')
			},
			{
				label: '5',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('5')
			},
			{
				label: '6',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('6')
			},
			{
				label: '—',
				variant: 'action',
				onClick: () => calcStore.onClickAction('-')
			},
			{
				label: '1',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('1')
			},
			{
				label: '2',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('2')
			},
			{
				label: '3',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('3')
			},
			{
				label: '+',
				variant: 'action',
				onClick: () => calcStore.onClickAction('+')
			},
			{
				label: '±',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('-1')
			},
			{
				label: '0',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('0')
			},
			{
				label: '.',
				variant: 'primary',
				onClick: () => calcStore.onClickSymbol('.')
			},
			{
				label: '=',
				variant: 'action',
				onClick: () => calcStore.onClickEqual()
			},
		])

		return {
			buttons,
		}
	}
}
</script>



<style lang='scss' src='./style.scss' scoped/>