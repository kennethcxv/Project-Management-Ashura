import { createSlice } from '@reduxjs/toolkit'

// We need to make it so that when the user clicks on the button a dialog box opens. 

// We need to show it on screen we do this by on button click it goes to a new array

const initialState = {
    open:false,
    title:"",
    description:"",
    subTask:"",
    AddNewTaskArr:[],
    comment:"",
    commentArray:[],
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
    },
    setTitleAction:(state,action) => {
      state.title = action.payload
    },
    setDescriptionAction:(state,action) => {
      state.description = action.payload
    },
    setSubTaskAction:(state,action) => {
      state.subTask = action.payload
    },
    CreateTaskAction:(state) => {
      const newTask = {
        title:state.title,
        description:state.description,
        subTask:state.subTask
      }
      state.AddNewTaskArr.push(newTask)
      console.log(newTask)
    },
    setCommentAction:(state,action) => {
      state.comment = action.payload
    },
    CreateCommentAction:(state) => {
      console.log("createCommentAction")
      state.commentArray.push(state.comment)
    },
  }
});

export const {openAction,closeAction,CreateTaskAction,setTitleAction,setDescriptionAction,setSubTaskAction,setCommentAction,CreateCommentAction} = createTask.actions

export default createTask.reducer