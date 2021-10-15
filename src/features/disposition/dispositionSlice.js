import { createSlice } from '@reduxjs/toolkit'

export const dispositionSlice = createSlice({
    name: 'disposition',
    initialState: {
        value: [
            // ['Demo', [
            //     'pendulum',
            //     'collision',
            //     'cb',
            //     'pattern',
            // ]],
            // ['Outils', [
            //     'physique',
            //     'draw',
            //     'share',
            //     'preview',
            //     'hub'
            // ]],

            // ['Réalisations professionelles', [
            //     'lubbockphotos',
            //     'rachelbourgeois',
            // ]],

            // ['Jeux', [
            //     'snake'
            // ]],
            // 'bordeauxphoto',
            // 'yota',
            // 'quoted',
            // 'arthaud'
        ]
    },
    reducers: {
        set: (state, action) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { set } = dispositionSlice.actions

export default dispositionSlice.reducer