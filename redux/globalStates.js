'use client'

import { createSlice } from '@reduxjs/toolkit'

export const globalStatesSlice = createSlice({
  name: 'globalStates',
  initialState: {
    colors: {
      primary: 'bg-white',
      marker: 'bg-lightGray',
      body: 'bg-veryLightGray',
    },
    filter: '',
  },
  reducers: {
    setColors: (state, action) => {
      state.colors = action.payload
    },
    setFilter: (state, action) => {
      console.log(state.filter)
    },
  },
})

export const { setColors, setFilter } = globalStatesSlice.actions

export default globalStatesSlice.reducer
