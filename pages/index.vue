<script>
import data from "../assets/data.json";

export default {
	data() {
		return {
			planetState: 0,
			planetIndex: this.$store.state.planetStorage.planetIndex,
			planetColor: this.$store.state.planetStorage.color,
			planet: data,
			unsubscribe: null,
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
		});
	},
	beforeUnmount() {
		var ctx = this;
		ctx.unsubscribe();
	},
};
</script>

<template>
	<div>
		<Header></Header>
		<main>
			<section class="planet">
				<div class="menu-mobile">
					<ul>
						<li
							:class="{ active: planetState == 0 }"
							v-on:click="planetState = 0"
						>
							OVERVIEW
						</li>
						<li
							:class="{ active: planetState == 1 }"
							v-on:click="planetState = 1"
						>
							STRUCTURE
						</li>
						<li
							:class="{ active: planetState == 2 }"
							v-on:click="planetState = 2"
						>
							SURFACE
						</li>
					</ul>
				</div>
				<div class="image" v-if="planetState == 0">
					<img
						:src="planet[planetIndex].images['planet']"
						:alt="planet[planetIndex].name"
					/>
				</div>
				<div class="image" v-if="planetState == 1">
					<img
						:src="planet[planetIndex].images['internal']"
						:alt="planet[planetIndex].name"
					/>
				</div>
				<div class="image" v-if="planetState == 2">
					<img
						:src="planet[planetIndex].images['planet']"
						:alt="planet[planetIndex].name"
					/>
					<div class="sub-image">
						<img
							:src="planet[planetIndex].images['geology']"
							:alt="planet[planetIndex].name + ' Geology'"
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

					<div class="menu">
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
		</main>
	</div>
</template>