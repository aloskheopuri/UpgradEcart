import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useState} from 'react';
import { Alert,AlertTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


export default function DeleateProduct({ isOpen, closeModal }) {


  const [alert,setAlert]=useState('')
   const navigate=useNavigate();
  const handledeleate = () => {

    setAlert('product Deleated succesfully');
    closeModal();
    setTimeout(() => {
      navigate('/adminpage');
    
    }, 3000);
    
    };
    const handlecancel=()=>{
        closeModal();
    }



  return (
    <div>
   
      <Modal
       open={isOpen}
       onClose={closeModal}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Confirm Deletion of the Product !</h2>
          <p id="parent-modal-description">
            Are You sure you want to delete the product?
          </p>
          <Button variant="contained" onClick={handledeleate}>OK</Button>
          <Button onClick={handlecancel} style={{marginLeft:'10px'}} variant="outlined">CANCEL</Button>
        </Box>
      </Modal>

<div style={{position:'absolute',
right:'0',top:'0'}}>
{alert && (
<Alert severity="success">
<AlertTitle>Success</AlertTitle>
{alert}
</Alert>
)}
</div>
    </div>
  );
}