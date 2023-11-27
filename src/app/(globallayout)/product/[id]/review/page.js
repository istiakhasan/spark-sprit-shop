import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  OutlinedInput,
  Rating,
  TextField,
  TextareaAutosize,
} from "@mui/material";
const LeaveReview = () => {
  return (
    <div style={{minHeight:"800px"}} className="main_body_container d-flex align-items-center justify-content-center">

     <div className="container">
     <div  className=" review_form_wraper">
        
        
        <h1 style={{ fontSize: "28px", color: "#111", fontWeight: "bold" }}>
           Write a review for Armor Air X Fear
         </h1>
         <FormControl className="mb-3">
           <p className="mb-0">Overall rating</p>
           <Rating />
         </FormControl>
         <FormControl className="w-100 mb-3">
           <label>Title of your review</label>
           <OutlinedInput
             style={{ height: "40px" }}
             placeholder="Please enter text"
           />
         </FormControl>
         <FormControl className="w-100 mb-3">
           <label>Your review</label>
           <TextField id="outlined-multiline-static" multiline rows={4} />
         </FormControl>
         <FormControlLabel className="mb-3" control={<Checkbox defaultChecked />} label={<span className="text-secondary" style={{fontSize:"14px"}}>Eos tollit ancillae ea, lorem consulatu qui ne, eu eros eirmod scaevola sea. Et nec tantas accusamus salutatus, sit commodo veritus te, erat legere fabulas has ut. Rebum laudem cum ea, ius essent fuisset ut. Viderer petentium cu his.</span>} />
         <div className="mb-4">
           <Button
             sx={{ background: "#004DDA", fontSize: "12px" }}
             className=" px-2 py-2 "
             variant="contained"
           >
             SUBMIT REVIEW
           </Button>
         </div>
           
       
        </div>
     </div>
    </div>
  );
};

export default LeaveReview;
