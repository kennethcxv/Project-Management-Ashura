import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import AshuraLogo from "../assets/logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SortOutlinedIcon from "@mui/icons-material/SortOutlined";
import { useDispatch } from "react-redux";
import { openAction } from "../redux/slices/taskSlice";
import { Link } from "react-router";

// Lets have the logo on the left side. Then lets have a search bar, add Task, filter tasks on the right

const NavBar = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openAction());
  };
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", backgroundColor: "#fcfcfc" }}>
          <Box
            component="img"
            src={AshuraLogo}
            alt="Logo"
            sx={{ width: "auto", height: "50px", cursor: "pointer" }}
          ></Box>
          <Box sx={{ml:4, }}>
          <Link className="text-black cursor-pointer text-[18px]" to="/tasks">
            Tasks
          </Link>          
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <TextField
            label="Search Tasks"
            size="small"
            sx={{
              borderRadius: 1,
              mr: 4,
              border: 1,
              borderColor: "black",
              color: "black",
            }}
          />
          <Button
            variant="text"
            onClick={handleClick}
            sx={{ color: "black", backgroundColor: "white", mr: 4 }}
          >
            Add Task
          </Button>
          <Button
            variant="text"
            sx={{ color: "black" }}
            size="large"
            startIcon={<SortOutlinedIcon />}
          ></Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
