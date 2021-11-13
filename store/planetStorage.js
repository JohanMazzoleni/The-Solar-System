export const state = () => ({
    planetIndex: 0,
    color: 'DEF4FC',
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
    menuOpen: 0,
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
    },
    setMenu(state, data)
    {
        state.menuOpen = data;
    },
    setPlanetPosition(state, pos)
    {
        state.position = pos;
    }
}