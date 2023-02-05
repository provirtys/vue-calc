<template>
	<div
		class="app relative bg-white shadow-2xl max-w-[340px] rounded-3xl px-5 py-7 transition-colors duration-500 overflow-hidden"
		:class="[{ 'dark-mode': calcStore.isDarkMode }]">
		<v-header class="mb-10" />
		<div class="tabs-content relative">
			<Transition name="tabs">
				<div class="calculator"
					v-if="calcStore.activeTab.id === 1">
					<v-history/>
					<v-display class="mb-10" />
					<v-buttons />
				</div>
				<div class="converter h-[485px] w-[300px]"
					v-else>
					<div :class="['converter__side', { 'converter__side--dark-mode': calcStore.isDarkMode }]">
						<ul class="converter__list">
							<li class="converter__item"
								v-for="converter in calcStore.converters"
								@click="onClickConverter(converter)">{{ converter.label }}
								<svg :class="{ 'arrow-reverse': converter.id === calcStore.activeConverter.id }"
									width="30px"
									height="30px"
									viewBox="0 0 24 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd"
										clip-rule="evenodd"
										d="M8.96967 17.5303C8.67678 17.2374 8.67678 16.7626 8.96967 16.4697L13.4393 12L8.96967 7.53033C8.67678 7.23744 8.67678 6.76256 8.96967 6.46967C9.26256 6.17678 9.73744 6.17678 10.0303 6.46967L15.0303 11.4697C15.171 11.6103 15.25 11.8011 15.25 12C15.25 12.1989 15.171 12.3897 15.0303 12.5303L10.0303 17.5303C9.73744 17.8232 9.26256 17.8232 8.96967 17.5303Z"
										:fill="!calcStore.isDarkMode ? '#363853' : '#fff'" />
								</svg>
							</li>
						</ul>
					</div>
					<Transition name="converter-content">
						<div class="converter__content"
							v-if="calcStore.activeConverter">
							<div class="converter__from mb-[20px]">
								<p class="mb-[10px]">Из</p>
								<v-select v-model="selectedFrom"
									:options="calcStore.activeConverter.list" />
								<v-input v-model="calcStore.activeConverter.valueFrom" />
							</div>
							<div class="converter__to">
								<p class="mb-[10px]">в</p>
								<v-select v-model="selectedTo"
									:options="calcStore.activeConverter.list" />
								<v-input v-model="calcStore.activeConverter.valueTo"
									disabled />
							</div>
						</div>
					</Transition>
				</div>
			</Transition>
		</div>
	</div>
</template>

<script>

import VButtons from './components/v-buttons/v-buttons.vue';
import VDisplay from './components/ui/v-display/v-display.vue'
import VHeader from './components/v-header/v-header.vue';
import { useCalcStore } from './stores/calcStore';
import VSelect from './components/ui/v-select/v-select.vue';
import { ref, watch } from 'vue';
import VInput from './components/ui/v-input/v-input.vue'
import VHistory from './components/v-history/v-history.vue';

export default {
	name: 'App',
	components: {
		VButtons,
		VDisplay,
		VHeader,
		VSelect,
		VInput,
		VHistory
	},
	setup() {
		const calcStore = useCalcStore()

		const selectedFrom = ref({})
		const selectedTo = ref({})

		const onClickConverter = (conv) => {
			selectedFrom.value = {}
			selectedTo.value = {}
			calcStore.onClickConverter(conv)
		}

		watch([() => calcStore.activeConverter.valueFrom, selectedFrom, selectedTo], ([value, from, to]) => {
			if (value && from && to) {
				calcStore.activeConverter.valueTo = value / from.multiplier * to.multiplier
			}
		}, { deep: true })

		return {
			calcStore,
			selectedFrom,
			selectedTo,
			onClickConverter
		}
	}
}
</script>

<style lang="scss">
#app {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
	overflow: hidden;
}

.app.dark-mode {
	background-color: #1d3250;
	color: #fff;
}

.converter {

	display: flex;

	&__side {
		display: inline-block;
		border-right: 2px black solid;
		height: 100%;
		padding: 10px 10px 10px 10px;
		font-size: 20px;
		transition: border-right .5s;

		&--dark-mode {
			border-right: 2px #fff solid;
		}
	}

	&__content {
		padding: 10px;
		width: 100%;
	}

	.converter__item {
		cursor: pointer;
		padding: 10px 0;
		display: flex;
		align-items: center;
		justify-content: space-between;

		& svg,
		path {
			transition: 0.5s all;
		}

		.arrow-reverse {
			transform: rotate(180deg);
		}
	}
}

.tabs-enter-active,
.tabs-leave-active {
	transition: all 0.5s ease-out;
}

.tabs-enter-from {
	position: absolute;
}

.tabs-enter-to {
	position: absolute;
	top: 0%;
}

.tabs-enter-from,
.tabs-leave-to {
	opacity: 0;
	transform: translateX(300px);
}

.converter__item:not(:last-child) {
	border-bottom: 1px solid gray;
}

.converter-content-enter-active,
.converter-content-leave-active {
	transition: all 0.3s ease-out;
}

.converter-content-enter-from,
.converter-content-leave-to {
	opacity: 0;
	transform: translateX(-5px);
}
</style>
