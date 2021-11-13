<script>
export default {
	data() {
		return {
			openMobileMenu: 0,
			planet: [
				{
					name: "MERCURY",
					color: {
						primary: "979797",
						secondary: "419EBB",
					},
					size: {
						mobile: 111,
						tablet: 184,
						desktop: 290,
					},
					position: {
						mobile: -64,
						tablet: -95,
						desktop: -127,
					},
				},
				{
					name: "VENUS",
					color: {
						primary: "F7CC7F",
						secondary: "EDA249",
					},
					size: {
						mobile: 154,
						tablet: 253,
						desktop: 400,
					},
					position: {
						mobile: -49,
						tablet: -70,
						desktop: -70,
					},
				},
				{
					name: "EARTH",
					color: {
						primary: "545BFE",
						secondary: "6D2ED5",
					},
					size: {
						mobile: 173,
						tablet: 285,
						desktop: 450,
					},
					position: {
						mobile: -33,
						tablet: -42,
						desktop: -42,
					},
				},
				{
					name: "MARS",
					color: {
						primary: "FF6A45",
						secondary: "D14C32",
					},
					size: {
						mobile: 129,
						tablet: 213,
						desktop: 336,
					},
					position: {
						mobile: -60,
						tablet: -89,
						desktop: -104,
					},
				},
				{
					name: "JUPITER",
					color: {
						primary: "ECAD7A",
						secondary: "D83A34",
					},
					size: {
						mobile: 224,
						tablet: 369,
						desktop: 582,
					},
					position: {
						mobile: -12,
						tablet: -9,
						desktop: 20,
					},
				},
				{
					name: "SATURN",
					color: {
						primary: "FCCB6B",
						secondary: "CD5120",
					},
					size: {
						mobile: 224,
						tablet: 369,
						desktop: 582,
					},
					position: {
						mobile: 0,
						tablet: 4,
						desktop: 39,
					},
				},
				{
					name: "URANUS",
					color: {
						primary: "65F0D5",
						secondary: "1EC1A2",
					},
					size: {
						mobile: 176,
						tablet: 290,
						desktop: 458,
					},
					position: {
						mobile: -25,
						tablet: -25,
						desktop: -8,
					},
				},
				{
					name: "NEPTUNE",
					color: {
						primary: "497EFA",
						secondary: "2D68F0",
					},
					size: {
						mobile: 173,
						tablet: 285,
						desktop: 450,
					},
					position: {
						mobile: -32,
						tablet: -40,
						desktop: -40,
					},
				},
			],
		};
	},
	methods: {
		updatePlanet(planet) {
			var ctx = this;
			ctx.openMobileMenu = 0;
			ctx.$store.commit("planetStorage/setPlanet", planet);
			ctx.$store.commit(
				"planetStorage/setPlanetColor",
				ctx.planet[planet].color
			);
			ctx.$store.commit(
				"planetStorage/setPlanetSize",
				ctx.planet[planet].size
			);
			ctx.$store.commit(
				"planetStorage/setPlanetPosition",
				ctx.planet[planet].position
			);

			ctx.$store.commit("planetStorage/setMenu", 0);
		},
		updateMenu() {
			var ctx = this;
			ctx.openMobileMenu = !ctx.openMobileMenu;
			ctx.$store.commit("planetStorage/setMenu", ctx.openMobileMenu);
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
				<li
					class="underline"
					v-for="(value, index) in planet"
					:key="index"
				>
					<a
						href="javascript:void(1)"
						v-on:click="updatePlanet(index)"
						>{{ value.name }}</a
					>
				</li>
			</ul>
			<div class="mobile-nav" title="Navigation" v-on:click="updateMenu">
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
								:style="'background: #' + value.color.primary"
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