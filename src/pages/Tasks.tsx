import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';

const Tasks = () => {
  return (
    <>
    <Box>
        <Box sx={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", mx:17,mt:6,height:"40px",width:"auto"}}>
            <Box sx={{display:"flex", mr:2, justifyContent:"space-between", backgroundColor:"rgba(105, 168, 246)", borderRadius:1, color:"white"}}>
                <Typography sx={{  pl:1, display:"flex", alignItems:"center",height:"40px"}}>BACKLOG</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1}}>
                    <AddOutlinedIcon sx={{cursor:"pointer"}}/>
                    <MoreVertOutlinedIcon sx={{cursor:"pointer", mr:1}}/>
                </Box>
            </Box>
                        <Box sx={{display:"flex", mr:2, justifyContent:"space-between", backgroundColor:"rgba(105, 168, 246)", borderRadius:1, color:"white"}}>
                <Typography sx={{  pl:1, display:"flex", alignItems:"center",height:"40px"}}>IN PROGRESS</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1}}>
                    <AddOutlinedIcon sx={{cursor:"pointer"}}/>
                    <MoreVertOutlinedIcon sx={{cursor:"pointer", mr:1}}/>
                </Box>
            </Box>
                        <Box sx={{display:"flex", mr:2, justifyContent:"space-between", backgroundColor:"rgba(105, 168, 246)", borderRadius:1, color:"white"}}>
                <Typography sx={{  pl:1, display:"flex", alignItems:"center",height:"40px"}}>IN REVIEW</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1}}>
                    <AddOutlinedIcon sx={{cursor:"pointer"}}/>
                    <MoreVertOutlinedIcon sx={{cursor:"pointer", mr:1}}/>
                </Box>
            </Box>
                        <Box sx={{display:"flex", mr:2, justifyContent:"space-between", backgroundColor:"rgba(105, 168, 246)", borderRadius:1, color:"white"}}>
                <Typography sx={{  pl:1, display:"flex", alignItems:"center",height:"40px"}}>COMPLETE</Typography>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1}}>
                    <AddOutlinedIcon sx={{cursor:"pointer"}}/>
                    <MoreVertOutlinedIcon sx={{cursor:"pointer", mr:1}}/>
                </Box>
            </Box>
        </Box>
    </Box>
    </>
  )
}

export default Tasks