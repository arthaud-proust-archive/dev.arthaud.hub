import { createSlice } from '@reduxjs/toolkit'

export const popupSlice = createSlice({
    name: 'popup',
    initialState: {
        value: {
            isPopupOpen: false,
            popupData: ['',[]]
        },
    },
    reducers: {
        open: (state, action) => {
            state.value = {
                isPopupOpen: true,
                popupData: action.payload || state.value.popupData
            }
        },
        close: (state)=>{
            state.value = {...state.value, isPopupOpen:false}
        },
        clear: (state)=>{
            state.value = {
                isPopupOpen: false,
                popupData: ['',[]]
            }
        }
    },
})

// Action creators are generated for each case reducer function
export const { open, close, clear } = popupSlice.actions

export default popupSlice.reducer