// Store is related to configuration for redux and it acts as a store for your redux state management

import { configureStore } from '@reduxjs/toolkit'
import CreateTaskReducer from "../slices/createTask"

export const store = configureStore({
  reducer: {
    "CreateTask": CreateTaskReducer,
  },
})

