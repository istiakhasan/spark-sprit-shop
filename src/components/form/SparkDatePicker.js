"use client";
import { FormControl, OutlinedInput, InputAdornment, TextField } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useFormContext, Controller } from "react-hook-form";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
export default function SparkDatePicker({
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
      {label ? <p style={{ fontSize: "16px", color: "gray" }} className="mb-0"><small>{label}</small>
      </p> : null}
      <Controller
        name={name}
        defaultValue={value || ""}
        control={control}
        render={({ field }) => (
          <FormControl fullWidth>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker value={value ? value : field.value} {...field} slotProps={{ textField: {inputProps:{style:{ fontSize: "12px", padding: "12px",outline:"none",border:"none" }},error:false} }} />
            </LocalizationProvider>
          </FormControl>
        )}
      />
    </>
  );
}
