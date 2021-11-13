export const state = () => ({
    planetIndex: 0,
    color: 'DEF4FC',
    size: {
        mobile: 111,
        tablet: 184,
        desktop: 290,
    },
})

export const mutations = {
    setPlanet(state, planet) {
        state.planetIndex = planet;
    },
    setPlanetColor(state, color) {
        state.color = color;
    },
    setPlanetSize(state, size)
    {
        state.size = size;
    }
}