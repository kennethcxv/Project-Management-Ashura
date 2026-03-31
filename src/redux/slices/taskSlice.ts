import { createSlice } from '@reduxjs/toolkit'

// We need to make it so that when the user clicks on the button a dialog box opens. 

// We need to show it on screen we do this by on button click it goes to a new array

const initialState = {
    open:false,
    addNewTaskArr:[],
    commentArray:[],
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
    addTaskAction:(state,action) => {
      state.addNewTaskArr.push(action.payload)
    },
    deleteAction:(state,action) => {
      state.addNewTaskArr = state.addNewTaskArr.filter((task) => {
        return task.id !== action.payload
      })
    },
    addCommentAction:(state,action) => {
      state.commentArray.push(action.payload)
    },
  }
});

export const {openAction,closeAction,deleteAction,addTaskAction,addCommentAction} = taskSlice.actions
export default taskSlice.reducer;