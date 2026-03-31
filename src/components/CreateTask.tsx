import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { closeAction } from "../redux/slices/taskSlice";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useState } from "react";

const CreateTask = () => {
  const open = useSelector((state) => state.taskSlice.open);

  const [AddNewTaskArr,setAddNewTaskArr] = useState([])
  const [commentArray,setcommentArray] = useState([])
    

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [comment,setComment] = useState("")
  const [subTask,setSubTask] = useState("")
  const [date,setDate] = useState("")

    const newTask = {
    title:title,
    description:description,
    subTask:subTask,
    date:date,
  }

  const dispatch = useDispatch();

  const handleCloseAction = () => {
    dispatch(closeAction());
  };

  const handleTaskSubmit = () => {
    setAddNewTaskArr((prev) => [...prev,newTask])
    setTitle("")
    setDescription("")
    setSubTask("")
    setDate("")
  }
  const handleCreateComment = () => {
    setcommentArray((prev) => [...prev,comment])
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            sx={{ width: "500px" }}
            placeholder="Add a Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            sx={{ width: "500px" }}
            placeholder="Add a SubTask"
            value={subTask}
            onChange={(e) => setSubTask(e.target.value)}
          />
          
          <TextField type="date" onChange={(e) => setDate(e.target.value)}/>
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
          
          {commentArray.map((item) => {
            return (
              <>
                <p>{item}</p>
              </>
            );
          })}
        </Box>
      </Dialog>
      {
      AddNewTaskArr.map((item) => {
        return (
          <p>
            {item.title}
            {item.description}
            {item.subTask}
            {item.date}
          </p>
        );
      })}
    </>
  );
};

export default CreateTask;
