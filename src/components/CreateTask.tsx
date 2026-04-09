import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { closeAction, addTaskAction,addCommentAction } from "../redux/slices/taskSlice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import type {Tasks} from "../pages/Tasks";
 
const CreateTask = () => {
  const open = useSelector((state) => state.taskSlice.open);
  const addNewTaskArr = useSelector((state) => state.taskSlice.addNewTaskArr)
  const commentArray = useSelector((state) => state.taskSlice.commentArray)

  const [comment,setComment] = useState("")
  const [priority,setPriority] = useState("")

  const [tasks,setTasks] = useState({
    id:uuidv4,
    title:"",
    description:"",
    subTask:"",
    date:"",
    priority:""
  })

  const [formErrors,setFormErrors] = useState<Tasks>({})

  const dispatch = useDispatch();

  const handleCloseAction = () => {
    dispatch(closeAction());
    setFormErrors({})
  };

  const handleTaskSubmit = () => {
    if(tasks.title === ""){
      setFormErrors({...formErrors,title:"Please enter a title"})
    }
    if(tasks.description.length < 10){
      setFormErrors({...formErrors,description:"Please enter a description"})
    }


  dispatch(addTaskAction(tasks))

  }
  const handleCreateComment = () => {
    dispatch(addCommentAction(comment))
    setComment("")
  }

  return (
    <>
      <Dialog open={open}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <DialogTitle>Add a task</DialogTitle>
          <CloseOutlinedIcon sx={{ mr: 2 }} onClick={handleCloseAction} />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            p: 2,
          }}
        >
          <TextField
            sx={{ width: "500px", justifyContent: "center" }}
            placeholder="Add a title"
            value={tasks.title}
            onChange={(e) => setTasks({...tasks,title:e.target.value})}
          />
          {
            formErrors.title && <p className="text-red-700">{formErrors.title}</p> 
          }

          <TextField
            sx={{ width: "500px" }}
            placeholder="Add a Description"
            value={tasks.description}
            onChange={(e) => setTasks({...tasks,description:e.target.value})}
          />
          {
            formErrors.description && <p className="text-red-700">{formErrors.description}</p>
          }
          <TextField
            sx={{ width: "500px" }}
            placeholder="Add a SubTask"
            value={tasks.subTask}
            onChange={(e) => setTasks({...tasks,subTask:e.target.value})}
          />
          <TextField type="date" value={tasks.date} onChange={(e) => setTasks({...tasks,date:e.target.value})} />
          <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Priority</InputLabel>
          <Select id="demo-simple-select-label" labelId="demo-simple-select-label" label ="priority" value={tasks.priority} onChange={(e) => setTasks({...tasks,priority:e.target.value})}>          
            <MenuItem value="priority 1">Priority 1</MenuItem>
            <MenuItem value="priority 2">Priority 2</MenuItem>
            <MenuItem value="priority 3">Priority 3</MenuItem>
          </Select>
          </FormControl>
          <Stack direction="row" sx={{cursor:"pointer"}}>
            <Chip label="Not Started"/>
            <Chip label="In Progress"/>
            <Chip label="Blocked"/>
            <Chip label="On Hold"/>
            <Chip label="Completed"/>
            <Chip label="Cancelled"/>
          </Stack>

          <Button type="submit" onClick={() => handleTaskSubmit()} variant="contained">
            Create Task
          </Button>

          <DialogTitle>Activity</DialogTitle>
          
          <TextField
            sx={{ width: "500px" }}
            placeholder="Add a Comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <Button variant="contained" onClick={() => handleCreateComment()}>
            Comment
          </Button>
          
          {commentArray.map((item,i) => {
            return (
              <div key={i}>
                <p>{item}</p>
              </div>
            );
          })}
        </Box>
      </Dialog>
      {
      addNewTaskArr.map((item) => {
        return (
          <div key={item.id}>
          </div>
        );
      })}
    </>
  );
};

export default CreateTask;
