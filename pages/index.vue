<script>
import data from "../assets/data.json";

export default {
	data() {
		return {
			planetState: 0,
			planetIndex: this.$store.state.planetStorage.planetIndex,
			planetColor: this.$store.state.planetStorage.color,
			planetSize: this.$store.state.planetStorage.size,
			planetPosition: this.$store.state.planetStorage.position,
			planet: data,
			menuOpen: this.$store.state.planetStorage.menuOpen,
			test: "red",
			unsubscribe: null,
			state: [
				{
					name: "OVERVIEW",
				},
				{
					name: "STRUCTURE",
				},
				{
					name: "SURFACE",
				},
			],
		};
	},
	mounted() {
		var ctx = this;

		ctx.unsubscribe = this.$store.subscribe((mutation, state) => {
			if (mutation.type === "planetStorage/setPlanet") {
				ctx.planetIndex = state.planetStorage.planetIndex;
				ctx.planetState = 0;
			}

			if (mutation.type === "planetStorage/setPlanetColor") {
				ctx.planetColor = state.planetStorage.color;
			}

			if (mutation.type === "planetStorage/setPlanetSize") {
				ctx.planetSize = state.planetStorage.size;
			}

			if (mutation.type === "planetStorage/setMenu") {
				ctx.menuOpen = state.planetStorage.menuOpen;
			}

			if (mutation.type === "planetStorage/setPlanetPosition") {
				ctx.planetPosition = state.planetStorage.position;
			}
		});
	},
	beforeUnmount() {
		var ctx = this;
		ctx.unsubscribe();
	},
};
</script>

<template>
	<div
		:style="
			'--planetPrimaryColor: #' +
			planetColor.primary +
			';--planetSecondaryColor: #' +
			planetColor.secondary
		"
	>
		<Header></Header>
		<main v-if="!menuOpen">
			<section class="planet">
				<div class="menu-mobile">
					<ul>
						<li
							v-for="(value, index) in state"
							:key="index"
							v-on:click="planetState = index"
						>
							<span v-if="planetState == index" class="active">{{
								value.name
							}}</span>
							<span v-else>{{ value.name }}</span>
						</li>
					</ul>
				</div>
				<div
					class="image"
					:style="
						'--planetSizeMobile: ' +
						planetSize.mobile +
						'px;--planetSizeTablet: ' +
						planetSize.tablet +
						'px;--planetSizeDesktop:' +
						planetSize.desktop +
						'px;'
					"
				>
					<img
						:src="planet[planetIndex].images['planet']"
						:alt="planet[planetIndex].name"
						v-if="planetState == 0"
					/>
					<img
						:src="planet[planetIndex].images['internal']"
						:alt="planet[planetIndex].name"
						v-if="planetState == 1"
					/>
					<img
						:src="planet[planetIndex].images['planet']"
						:alt="planet[planetIndex].name"
						v-if="planetState == 2"
					/>
					<div class="sub-image" v-if="planetState == 2">
						<img
							:src="planet[planetIndex].images['geology']"
							:alt="planet[planetIndex].name + ' Geology'"
							:style="
								'--planetPositionMobile: ' +
								planetPosition.mobile +
								'px;--planetPositionTablet: ' +
								planetPosition.tablet +
								'px;--planetPositionDesktop: ' +
								planetPosition.desktop +
								'px;'
							"
						/>
					</div>
				</div>
				<div class="detail">
					<div class="information">
						<h2>{{ planet[planetIndex].name.toUpperCase() }}</h2>
						<p class="description" v-if="planetState == 0">
							{{ planet[planetIndex].overview.content }}
						</p>
						<p class="description" v-if="planetState == 1">
							{{ planet[planetIndex].structure.content }}
						</p>
						<p class="description" v-if="planetState == 2">
							{{ planet[planetIndex].geology.content }}
						</p>
						<p class="source">
							Source:
							<a
								class="source-link"
								:href="planet[planetIndex].overview.source"
								v-if="planetState == 0"
								><span class="underline"> Wikipedia</span>
								<img
									:src="
										require('@/assets/images/icon-source.svg')
									"
							/></a>
							<a
								class="source-link"
								:href="planet[planetIndex].structure.source"
								v-if="planetState == 1"
								><span class="underline"> Wikipedia</span>
								<img
									:src="
										require('@/assets/images/icon-source.svg')
									"
							/></a>
							<a
								class="source-link"
								:href="planet[planetIndex].geology.source"
								v-if="planetState == 2"
								><span class="underline"> Wikipedia</span>
								<img
									:src="
										require('@/assets/images/icon-source.svg')
									"
							/></a>
						</p>
					</div>

					<div class="menu" :style="'--planetColor: #' + planetColor">
						<div
							:class="{
								card: 1,
								active: planetState == 0,
								'not-active': planetState != 0,
							}"
							v-on:click="planetState = 0"
						>
							<div class="number">01</div>
							<div class="name">OVERVIEW</div>
						</div>
						<div
							:class="{
								card: 1,
								active: planetState == 1,
								'not-active': planetState != 1,
							}"
							v-on:click="planetState = 1"
						>
							<div class="number">02</div>
							<div class="name">Internal Structure</div>
						</div>
						<div
							:class="{
								card: 1,
								active: planetState == 2,
								'not-active': planetState != 2,
							}"
							v-on:click="planetState = 2"
						>
							<div class="number">03</div>
							<div class="name">Surface Geology</div>
						</div>
					</div>
				</div>
			</section>
			<div class="about">
				<div class="card">
					<div class="title">ROTATION TIME</div>
					<div class="data">{{ planet[planetIndex].rotation }}</div>
				</div>
				<div class="card">
					<div class="title">REVOLUTION TIME</div>
					<div class="data">{{ planet[planetIndex].revolution }}</div>
				</div>
				<div class="card">
					<div class="title">RADIUS</div>
					<div class="data">{{ planet[planetIndex].radius }}</div>
				</div>
				<div class="card">
					<div class="title">AVERAGE TEMP.</div>
					<div class="data">
						{{ planet[planetIndex].temperature }}
					</div>
				</div>
			</div>
		</main>
	</div>
</template>