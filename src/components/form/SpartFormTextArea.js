import { FormControl, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";
import { getErrorMessageByPropertyName } from "@/common/utils";
export default function SparkFormTextArea({
  name,
  type,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
  row,
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
            <TextField 
              inputProps={{style:{color:"#111",fontSize:"12px"}}}
              sx={{ width: '100%', marginBottom: "12px" }}
              size="small"
              multiline={true}
              rows={row}
              type={type}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              focused
            />

        )}
      />
    </>
  );
}
