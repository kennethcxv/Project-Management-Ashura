import { createSlice } from '@reduxjs/toolkit'

// We need to make it so that when the user clicks on the button a dialog box opens. 

const initialState = {
    open:false
}

const createTask = createSlice({
  name: "CreateTask",
  initialState,
  reducers: {
    openAction:(state) => {
        state.open = true
        console.log(state.open)
    },
    closeAction:(state) => {
        state.open = false
        console.log(state.open)
    }
  }
});

export const {openAction,closeAction} = createTask.actions

export default createTask.reducer