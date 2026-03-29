import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import TextField from "@mui/material/TextField"
import { useSelector } from "react-redux"

const CreateTask = () => {

    const open = useSelector((state) => state.CreateTask.open)
    
    return (
    <>
        <Dialog open={open}>
            <DialogTitle>Add Title</DialogTitle>
            <TextField label="Title"/>
        </Dialog>
    </>
  )
}

export default CreateTask