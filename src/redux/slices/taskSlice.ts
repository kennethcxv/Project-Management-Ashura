import { createSlice } from '@reduxjs/toolkit'

// We need to make it so that when the user clicks on the button a dialog box opens. 

// We need to show it on screen we do this by on button click it goes to a new array

const initialState = {
    open:false,
}

const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    openAction:(state) => {
        state.open = true
        console.log(state.open)
    },
    closeAction:(state) => {
        state.open = false
        console.log(state.open)
    },
  }
});

export const {openAction,closeAction} = taskSlice.actions
export default taskSlice.reducer;