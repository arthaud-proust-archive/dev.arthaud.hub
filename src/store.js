import { configureStore } from '@reduxjs/toolkit'
import disposition, * as dispositionReducer from './features/disposition/dispositionSlice'
import applis, * as applisReducer from './features/applis/applisSlice'
import popup, * as popupReducer from './features/popup/popupSlice'

export default configureStore({
    reducer: {
        disposition,
        applis,
        popup
    },
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export {
    dispositionReducer,
    applisReducer,
    popupReducer
}