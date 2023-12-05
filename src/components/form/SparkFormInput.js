"use client"
import { FormControl, OutlinedInput } from "@mui/material"
import { useFormContext, Controller } from "react-hook-form"
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
  const { control,formState:{errors} } = useFormContext()
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
    <Controller
      name={name}
      defaultValue={value || ""} 
      control={control}
      render={({ field }) =>(
        <FormControl   sx={{ width: '100%',height:"40px",marginBottom:"12px" }}>
        <OutlinedInput  sx={{height:"40px",color:"#111",fontSize:"12px"}} type={type}   placeholder={placeholder} {...field} value={value?value:field.value} />
       </FormControl>
      )}
    />
    </>
  )
}