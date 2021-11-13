export const state = () => ({
    planetIndex: 0
})

export const mutations = {
    set(state, planet) {
        state.planetIndex = planet;
    },
}