import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteAction } from '../redux/slices/taskSlice';

interface KebabMenuInterface {
  taskId: string;
}

const KebabMenu = ({taskId}: KebabMenuInterface) => {
  
  

  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleDeleteAction = () => {
    dispatch(deleteAction(taskId))  
  }

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
    <IconButton onClick={handleOpen}>
      <MoreVertIcon />
    </IconButton>


    <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
      <MenuItem>Move To</MenuItem>
      <MenuItem>Copy Link</MenuItem>
      <MenuItem>Change Status</MenuItem>
      <MenuItem onClick={handleDeleteAction}>Delete</MenuItem>
    </Menu>
    </>
  );
};
export default KebabMenu