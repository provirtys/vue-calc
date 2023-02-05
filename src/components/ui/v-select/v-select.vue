<template>
	<div ref="listRef" :class="['select', {'select--dark-mode': calcStore.isDarkMode}]">
		<div class="select__placeholder"
			@click="toggleSelect">
			{{ modelValue.label ? modelValue.label : placeholder }}
		</div>
		<Transition name="select">
			<ul class="select__list"
				v-if="isOpen">
				<li :class="['select__list-item', {'select__list-item--selected':option.id === modelValue.id}]"
					v-for="option in options"
					@click="onSelect(option)">{{ option.label }}</li>
			</ul>
		</Transition>
		<div :class="['select__arrow', { 'select__arrow-reverse': isOpen }]" @click="toggleSelect">
			<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M17.6499 12L12.2499 16.5L6.84998 12" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				<path d="M17.6499 7L12.2499 11.5L6.84998 7" stroke="#333333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
		</div>
	</div>
</template>

<script>

import { ref, computed } from 'vue';
import { useCalcStore } from '@/stores/calcStore';
import useClickOutside from '@/hooks/useClickOutside';
export default {
	name: 'v-select',
	emits: ['update:modelValue'],
	props: {
		options: {
			type: Array,
			required: true,
			default: () => [],
		},
		placeholder: {
			type: String,
			required: false,
			default: 'Выберите опцию'
		},
		modelValue: {
			type: Object,
			required: false,
			default: () => { }
		}
	},
	setup(props, { emit }) {

		const isOpen = ref(false)
		const calcStore = useCalcStore()
		const listRef = ref(null)

		const closeSelect = () => {
			isOpen.value = false
		}

		useClickOutside(listRef, closeSelect)

		const toggleSelect = () => {
			isOpen.value = !isOpen.value
		}

		const onSelect = (option) => {
			emit('update:modelValue', option)
			isOpen.value = false
		}

		return {
			isOpen,
			toggleSelect,
			onSelect,
			calcStore,
			listRef
		}
	}
}
</script>

<style lang='scss' src='./style.scss' scoped/>