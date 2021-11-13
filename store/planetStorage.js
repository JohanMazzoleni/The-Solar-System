export const state = () => ({
    planetIndex: 0,
    color: 'DEF4FC'
})

export const mutations = {
    setPlanet(state, planet) {
        state.planetIndex = planet;
    },
    setPlanetColor(state, color) {
        state.color = color;
    },
}