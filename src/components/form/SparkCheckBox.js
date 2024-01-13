"use client";
import { FormControl, OutlinedInput, InputAdornment, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export default function SparkFormCheckbox({
  name,
  value,
  validation,
  label,
  required,
  boxLabel
}) {
  const { control, formState: { errors } } = useFormContext();

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
      <Controller
        name={name}
        defaultValue={value || false}
        control={control}
        render={({ field }) => (
        <FormControlLabel
          className="ac_input_filter"
          control={<Checkbox size="small" />}
          label={<small className="text-secondary">{boxLabel}</small>} 
          {...field}
          value={value ? value : field.value}
          checked={value ? value : field.value}
        />

        )}
      />
    </>
  );
}
