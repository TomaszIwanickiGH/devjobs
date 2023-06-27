'use client'

import { configureStore } from '@reduxjs/toolkit'
import globalStatesReducer from './globalStates'

export default configureStore({
  reducer: {
    globalStates: globalStatesReducer,
  },
})
