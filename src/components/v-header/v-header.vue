<template>
	<div v-bind="$attrs" :class="['header', {'header--dark-mode':calcStore.isDarkMode}]">
		<div class="header__menu" @click="calcStore.isOpen = true">
			<svg version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				x="0px"
				y="0px"
				viewBox="0 0 502.001 502.001"
				style="enable-background:new 0 0 502.001 502.001;"
				xml:space="preserve">
				<g>
					<g>
						<g>
							<path style="fill:#fff;"
								d="M445.317,133.126H56.683C30.901,133.126,10,112.225,10,86.443S30.901,39.76,56.683,39.76h388.634
				C471.099,39.76,492,60.661,492,86.443S471.099,133.126,445.317,133.126z" />
							<path
								d="M445.317,143.126H56.683C25.428,143.126,0,117.698,0,86.443S25.428,29.76,56.683,29.76h388.635
				C476.572,29.76,502,55.188,502,86.443S476.572,143.126,445.317,143.126z M56.683,49.76C36.456,49.76,20,66.216,20,86.443
				s16.456,36.683,36.683,36.683h388.635c20.227,0,36.683-16.456,36.683-36.683S465.544,49.76,445.317,49.76H56.683z" />
						</g>
					</g>
					<g>
						<g>
							<path style="fill:#fff;"
								d="M445.317,297.684H56.683C30.901,297.684,10,276.783,10,251s20.901-46.683,46.683-46.683h388.634
				C471.099,204.317,492,225.218,492,251S471.099,297.684,445.317,297.684z" />
							<path
								d="M445.317,307.684H56.683C25.428,307.684,0,282.255,0,251s25.428-56.683,56.683-56.683h388.635
				C476.572,194.317,502,219.745,502,251S476.572,307.684,445.317,307.684z M56.683,214.317C36.456,214.317,20,230.773,20,251
				s16.456,36.683,36.683,36.683h388.635C465.544,287.684,482,271.227,482,251s-16.456-36.683-36.683-36.683H56.683z" />
						</g>
					</g>
					<g>
						<g>
							<path style="fill:#fff;"
								d="M445.317,462.24H56.683C30.901,462.24,10,441.339,10,415.557
				c0-25.782,20.901-46.683,46.683-46.683h388.634c25.782,0,46.683,20.901,46.683,46.683S471.099,462.24,445.317,462.24z" />
							<path d="M445.317,472.24H56.683C25.428,472.24,0,446.813,0,415.557s25.428-56.683,56.683-56.683h388.635
				c31.255,0,56.683,25.428,56.683,56.683C502,446.813,476.572,472.24,445.317,472.24z M56.683,378.874
				C36.456,378.874,20,395.33,20,415.557s16.456,36.683,36.683,36.683h388.635c20.227,0,36.683-16.456,36.683-36.683
				s-16.456-36.683-36.683-36.683L56.683,378.874L56.683,378.874z" />
						</g>
					</g>
					<g>
						<path d="M230.576,87.106H57.85c-5.523,0-10-4.477-10-10s4.477-10,10-10h172.726c5.523,0,10,4.477,10,10
			S236.099,87.106,230.576,87.106z" />
					</g>
					<g>
						<path d="M297.099,87.106h-19.84c-5.523,0-10-4.477-10-10s4.477-10,10-10h19.84c5.523,0,10,4.477,10,10
			S302.622,87.106,297.099,87.106z" />
					</g>
				</g>
			</svg>
		</div>
		<div class="header__tabs">
			<v-tab class="header__tab" v-for="tab in calcStore.tabs" :id="tab.id" @click="calcStore.activeTab = tab" >{{tab.label}}</v-tab>
		</div>
		<div class="header__mode cursor-pointer select-none"
			@click="calcStore.isDarkMode = !calcStore.isDarkMode">
			<svg
				:class="['transition', 'duration-500', { 'scale-100': calcStore.isDarkMode }, { 'scale-0': !calcStore.isDarkMode }, { 'rotate-180': calcStore.isDarkMode }, { 'rotate-360': !calcStore.isDarkMode }]"
				width="24px"
				height="24px"
				viewBox="0 0 24 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#a)"
					stroke="#eee"
					stroke-width="2"
					stroke-miterlimit="10">
					<path
						d="M5 12H1M23 12h-4M7.05 7.05 4.222 4.222M19.778 19.778 16.95 16.95M7.05 16.95l-2.828 2.828M19.778 4.222 16.95 7.05"
						stroke-linecap="round" />
					<path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
						fill="#fff"
						fill-opacity=".16" />
					<path d="M12 19v4M12 1v4"
						stroke-linecap="round" />
				</g>
				<defs>
					<clipPath id="a">
						<path fill="#fff"
							d="M0 0h24v24H0z" />
					</clipPath>
				</defs>
			</svg>
			<svg
				:class="['transition', 'duration-500', { 'scale-100': !calcStore.isDarkMode }, { 'scale-0': calcStore.isDarkMode }, { 'rotate-180': calcStore.isDarkMode }, { 'rotate-360': !calcStore.isDarkMode }]"
				width="35px"
				height="35px"
				viewBox="0 0 35 35"
				data-name="Layer 2"
				id="Layer_2"
				xmlns="http://www.w3.org/2000/svg">
				<path
					d="M18.44,34.68a18.22,18.22,0,0,1-2.94-.24,18.18,18.18,0,0,1-15-20.86A18.06,18.06,0,0,1,9.59.63,2.42,2.42,0,0,1,12.2.79a2.39,2.39,0,0,1,1,2.41L11.9,3.1l1.23.22A15.66,15.66,0,0,0,23.34,21h0a15.82,15.82,0,0,0,8.47.53A2.44,2.44,0,0,1,34.47,25,18.18,18.18,0,0,1,18.44,34.68ZM10.67,2.89a15.67,15.67,0,0,0-5,22.77A15.66,15.66,0,0,0,32.18,24a18.49,18.49,0,0,1-9.65-.64A18.18,18.18,0,0,1,10.67,2.89Z" />
			</svg>
		</div>
	</div>
	<v-menu></v-menu>
</template>

<script>

import { useCalcStore } from '../../stores/calcStore'
import VTab from '../ui/v-tab/v-tab.vue';
import VMenu from '../ui/v-menu/v-menu.vue';

export default {
	name: 'v-header',
	components: { VTab, VMenu },
	setup() {
		const calcStore = useCalcStore()

		return {
			calcStore
		}
	}
}
</script>





<style lang='scss' src='./style.scss' scoped/>