import Dialog from "@mui/material/Dialog"
import TextField from "@mui/material/TextField"
import { useDispatch, useSelector } from "react-redux"
import DialogTitle from "@mui/material/DialogTitle"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import { setTitleAction,closeAction, setDescriptionAction,setSubTaskAction,CreateTaskAction,setCommentAction,CreateCommentAction  } from "../redux/slices/createTask"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';


const CreateTask = () => {

    const open = useSelector((state) => state.CreateTask.open)
    const title = useSelector((state) => state.CreateTask.title)
    const description = useSelector((state) => state.CreateTask.description)
    const subTask = useSelector((state) => state.CreateTask.subTask)
    const AddNewTaskArr = useSelector((state) => state.CreateTask.AddNewTaskArr)
    const comment = useSelector((state) => state.CreateTask.comment)
    const commentArray = useSelector((state) => state.CreateTask.commentArray)

    const dispatch = useDispatch()

    const handleCreateTask = () => {
        dispatch(CreateTaskAction())
    }

    const handleCreateComment = () => {
        dispatch(CreateCommentAction())
    }

    const handleCloseAction = () => {
        dispatch(closeAction())
    }

    return (
    <>
        <Dialog open={open}>
            <Box sx={{display:"flex", justifyContent: "space-between", alignItems: "center", cursor:"pointer"}}>
            <DialogTitle >Add a task</DialogTitle>
            <CloseOutlinedIcon sx={{mr:2}}  onClick={handleCloseAction} />
            </Box>

            <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", gap:2, p:2}}>
                <TextField sx={{width:"500px",  justifyContent:"center"}}  placeholder="Add a title" value={title} onChange={(e) => dispatch(setTitleAction(e.target.value))} />
                <TextField sx={{width:"500px"}} placeholder="Add a Description" value={description} onChange={(e) => dispatch(setDescriptionAction(e.target.value))} />
                <TextField sx={{width:"500px"}} placeholder="Add a SubTask" value={subTask} onChange={(e) => dispatch(setSubTaskAction(e.target.value)) } />
                <Button  onClick={() => handleCreateTask()} variant="contained">Create Task</Button>         

                <DialogTitle>Activity</DialogTitle>

                <TextField sx={{width:"500px"}} placeholder="Add a Comment" value={comment} onChange={(e) => dispatch(setCommentAction(e.target.value))} />       
                <Button variant="contained"  onClick={() => handleCreateComment()}>Comment</Button>
                {
                    commentArray.map((item) => {
                        return(
                            <>
                                <p>{item}</p>
                            </>
                        )
                    }) 
                }
            </Box>
    
        </Dialog>
        {
            AddNewTaskArr.map((item) => {
                return(
                    <p>{item.title}{item.description}{item.subTask}</p>
                )
            })
        }
        
    </>
  )
}

export default CreateTask