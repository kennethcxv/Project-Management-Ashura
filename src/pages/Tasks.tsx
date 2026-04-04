import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { useDispatch, useSelector } from "react-redux";
import PersonIcon from "@mui/icons-material/Person";
import { openAction } from "../redux/slices/taskSlice";
import KebabMenu from "../components/KebabMenu";

const Tasks = () => {
  const dispatch = useDispatch();

  const addNewTaskArr = useSelector((state) => state.taskSlice.addNewTaskArr);

  const handleClick = () => {
    dispatch(openAction());
  };

  return (
    <Box sx={{ backgroundColor: "#f2f3f5", minHeight: "100vh", py: 4 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          mx: 17,
          mt: 6,
          height: "40px",
          width: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            mr: 2,
            justifyContent: "space-between",
            backgroundColor: "rgba(105, 168, 246)",
            borderRadius: 1,
            color: "white",
          }}
        >
          <Typography
            sx={{
              pl: 1,
              display: "flex",
              alignItems: "center",
              height: "40px",
            }}
          >
            BACKLOG
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AddOutlinedIcon onClick={handleClick} sx={{ cursor: "pointer" }} />
            <MoreVertOutlinedIcon sx={{ cursor: "pointer", mr: 1 }} />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            mr: 2,
            justifyContent: "space-between",
            backgroundColor: "rgba(105, 168, 246)",
            borderRadius: 1,
            color: "white",
          }}
        >
          <Typography
            sx={{
              pl: 1,
              display: "flex",
              alignItems: "center",
              height: "40px",
            }}
          >
            IN PROGRESS
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AddOutlinedIcon  sx={{ cursor: "pointer" }} />
            <MoreVertOutlinedIcon sx={{ cursor: "pointer", mr: 1 }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            mr: 2,
            justifyContent: "space-between",
            backgroundColor: "rgba(105, 168, 246)",
            borderRadius: 1,
            color: "white",
          }}
        >
          <Typography
            sx={{
              pl: 1,
              display: "flex",
              alignItems: "center",
              height: "40px",
            }}
          >
            IN REVIEW
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AddOutlinedIcon sx={{ cursor: "pointer" }} />
            <MoreVertOutlinedIcon sx={{ cursor: "pointer", mr: 1 }} />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            mr: 2,
            justifyContent: "space-between",
            backgroundColor: "rgba(105, 168, 246)",
            borderRadius: 1,
            color: "white",
          }}
        >
          <Typography
            sx={{
              pl: 1,
              display: "flex",
              alignItems: "center",
              height: "40px",
            }}
          >
            COMPLETE
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <AddOutlinedIcon sx={{ cursor: "pointer" }} />
            <MoreVertOutlinedIcon sx={{ cursor: "pointer", mr: 1 }} />
          </Box>
        </Box>
        <Box>
          {addNewTaskArr.map((item) => {
            return (
              <div key={item.id}>
                <Box
                  sx={{
                    mt: 1,
                    width: "94%",
                    borderRadius: 1,
                    backgroundColor: "white",
                    height: "auto",
                    cursor: "pointer",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <PersonIcon
                        sx={{
                          border: 1,
                          borderColor: "gray",
                          borderRadius: "50%",
                          ml: 1,
                          mt: 1,
                          mb: 1,
                          height: "30px",
                          width: "30px",
                        }}
                      />
                      <Typography sx={{ ml: 1, fontSize: 19 }}>
                        {item.title}
                      </Typography>
                    </Box>

                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <KebabMenu taskId = {item.id}/>
                    </Box>
                  </Box>
                  <Box sx={{ ml: 1 }}>
                    <Typography>{item.priority}</Typography>
                  </Box>
                </Box>
              </div>
            );
          })}
          <Box
            onClick={handleClick}
            sx={{
              mt: 1,
              width: "94%",
              cursor: "pointer",
              borderRadius: 1,
              backgroundColor: "lightgrey",
              color: "grey",
              height: "35px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ ml: 2 }}>Add Task</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Tasks;
