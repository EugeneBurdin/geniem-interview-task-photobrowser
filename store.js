import { configureStore } from '@reduxjs/toolkit'

import photosReducer from './lib/slices/photosSlice'

export default configureStore({
    reducer: {
        photos: photosReducer,
    },
    devTools: true,
})
