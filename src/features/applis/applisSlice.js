import { createSlice } from '@reduxjs/toolkit'

export const applisSlice = createSlice({
    name: 'applis',
    initialState: {
        value: {
            // 'preview': 'https://preview.arthaud.dev',
            // 'draw': 'https://draw.arthaud.dev',
            // 'share': 'https://share.arthaud.dev',
            // 'yota': 'https://yota.arthaud.dev',
            // 'snake': 'https://snake.arthaud.dev',
            // 'collision': 'https://collision.arthaud.dev',
            // 'pendulum': 'https://pendulum.arthaud.dev',
            // 'cb': 'https://cb.arthaud.dev',
            // 'pattern': 'https://pattern.arthaud.dev',
            // 'physique': 'https://physique.arthaud.dev',
            // 'quoted': 'https://quoted.arthaud.dev',
            // 'lubbockphotos': 'https://lubbockphotos.com',
            // 'rachelbourgeois': 'https://rachelbourgeois-psychologue.fr',
            // 'bordeauxphoto': 'https://bordeaux-photo.fr',
            // 'arthaud': 'https://arthaudproust.fr',
            // 'hub': 'https://hub.arthaud.dev'
        },
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { set } = applisSlice.actions

export default applisSlice.reducer