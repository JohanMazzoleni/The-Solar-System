<script>
export default {
	data() {
		return {
			openMobileMenu: 0,
			planet: [
				{
					name: "MERCURY",
					color: "DEF4FC",
				},
				{
					name: "VENUS",
					color: "F7CC7F",
				},
				{
					name: "EARTH",
					color: "545BFE",
				},
				{
					name: "MARS",
					color: "FF6A45",
				},
				{
					name: "JUPITER",
					color: "ECAD7A",
				},
				{
					name: "SATURN",
					color: "FCCB6B",
				},
				{
					name: "URANUS",
					color: "65F0D5",
				},
				{
					name: "NEPTUNE",
					color: "497EFA",
				},
			],
		};
	},
	methods: {
		updatePlanet(planet) {
			var ctx = this;
			ctx.openMobileMenu = 0;
			ctx.$store.commit("planetStorage/set", planet);
		},
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
					<a
						href="javascript:void(1)"
						v-on:click="updatePlanet(index)"
						>{{ value.name }}</a
					>
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
								<a
									v-on:click="updatePlanet(index)"
									href="javascript:void(1)"
									>{{ value.name }}</a
								>
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