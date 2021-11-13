export const state = () => ({
    planetIndex: 2,
    color: {
        primary: '545BFE',
        secondary: '6D2ED5',
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