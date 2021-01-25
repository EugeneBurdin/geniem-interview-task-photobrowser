import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'

export const loadPhotos = createAsyncThunk(
  'photos/loadPhotos',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos')
      const data = await response.json()
      return data.slice(0, 50)
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
)

const photosSlice = createSlice({
  name: 'photos',
  initialState: {
    photos: [],
    loading: 'idle',
  },
  reducers: {},
  extraReducers: {
    [loadPhotos.pending]: (state) => {
      state.photos = []
      state.loading = 'loading'
    },
    [loadPhotos.fulfilled]: (state, action) => {
      state.photos = action.payload
      state.loading = 'loaded'
    },
    [loadPhotos.rejected]: (state, action) => {
      state.loading = 'error'
      state.error = action.payload.error
    },
  },
})

export const selectPhotos = createSelector(
  (state) => ({
    photos: state.photos.photos,
    error: state.photos.error,
  }),
  (state) => state
)

export default photosSlice.reducer