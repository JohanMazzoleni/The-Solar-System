<script>
export default {
	data() {
		return {
			openMobileMenu: 0,
			planet: {
				mercury: {
					name: "MERCURY",
					color: "DEF4FC",
				},
				venus: {
					name: "VENUS",
					color: "F7CC7F",
				},
				earth: {
					name: "EARTH",
					color: "545BFE",
				},
				mars: {
					name: "MARS",
					color: "FF6A45",
				},
				jupiter: {
					name: "JUPITER",
					color: "ECAD7A",
				},
				saturn: {
					name: "SATURN",
					color: "FCCB6B",
				},
				uranus: {
					name: "URANUS",
					color: "65F0D5",
				},
				neptune: {
					name: "NEPTUNE",
					color: "497EFA"
				}
			},
		};
	},
};
</script>

<template>
	<header class="header">
		<div class="logo">
			<h1>THE PLANETS</h1>
		</div>
		<nav>
			<ul class="desktop-nav">
				<li v-for="(value, index) in planet" :key="index">
					<NuxtLink :to="'/' + index">{{
						value.name
					}}</NuxtLink>
				</li>
			</ul>
			<div
				class="mobile-nav"
				title="Navigation"
				v-on:click="openMobileMenu = !openMobileMenu"
			>
				<img
					:src="require('@/assets/images/icon-hamburger.svg')"
					alt="Navigation"
				/>
			</div>
			<div class="mobile-tab" v-if="openMobileMenu">
				<ul>
					<li v-for="(value, index) in planet" :key="index">
						<div class="left">
							<div
								class="planet"
								:style="'background: #' + value.color"
							></div>
							<div class="name">
								<NuxtLink :to="'/' + index">{{
									value.name
								}}</NuxtLink>
							</div>
						</div>
						<div
							class="right"
							:title="'Redirection vers ' + value.name"
						>
							<img
								:src="
									require('@/assets/images/icon-chevron.svg')
								"
							/>
						</div>
					</li>
				</ul>
			</div>
		</nav>
	</header>
</template>