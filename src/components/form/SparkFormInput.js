"use client";
import { getErrorMessageByPropertyName } from "@/common/utils";
import { FormControl, OutlinedInput, InputAdornment, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export default function SparkFormInput({
  name,
  type,
  value,
  id,
  placeholder,
  validation,
  label,
  required
}) {
  const { control, formState: { errors } } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      {required ? (
        <span
          style={{
            color: "red",
          }}
        >
          *
        </span>
      ) : null}
        {label?<p style={{fontSize:"16px",color:"gray"}} className="mb-0"><small>{label}</small>
       </p>:null}
       <small style={{ color: "red",fontSize:"12px" }}>{errorMessage}</small>
      
      <Controller
        name={name}
        defaultValue={value || ""}
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <TextField
              inputProps={{ style: { fontSize: "12px", padding: "8px 12px",outline:"none" } }}
              sx={{ width: "100%", marginBottom: "12px" }}
              type={type}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              InputLabelProps={{ shrink: true }}
              focused 
              classes={{
                focused: 'custom-focused', // Apply a custom class for focused state
              }}
            />
          </FormControl>
        )}
        
      />
       
    </>
  );
}
