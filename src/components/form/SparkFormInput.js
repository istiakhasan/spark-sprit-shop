"use client";
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
        render={({ field }) => (
          <FormControl fullWidth>
            <TextField
              inputProps={{ style: { fontSize: "12px", padding: "12px",outline:"none" } }}
              sx={{ width: "100%", marginBottom: "12px" }}
              variant="outlined"
              type={type}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              InputLabelProps={{ shrink: true }}
              

            />
          </FormControl>
        )}
      />
    </>
  );
}
