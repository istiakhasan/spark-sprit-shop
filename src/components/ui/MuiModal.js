"use client"
import Modal from 'react-modal';
import {Button} from "@mui/material";
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border:'none',
    maxWidth:"100%",
    width:"700px",
    overflow:"visible"
  },
};

export default function MuiModal({children,modalIsOpen,setIsOpen}) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        // onRequestClose={()=> setIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
             <Button  
                size={"small"}
                onClick={()=> setIsOpen(false)}
                sx={{  fontSize: "12px",minWidth:"10px",width:"20px",height:"20px" }}
                variant="contained" 
                color="error" 
                className="d-flex align-items-center justify-content-center ms-auto "

              >
                x
              </Button>

              {children}

         </Modal>
    </div>
  );
}
