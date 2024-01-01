import { FormControl, Rating, TextField } from "@mui/material";
import { useFormContext, Controller } from "react-hook-form";

export default function SparkFormRating({
  name,
  type,
  value,
  placeholder,
  label,
  required,
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
        defaultValue={value || 0}
        control={control}
        render={({ field }) => (
            <Rating 
              size="small"
              placeholder={placeholder}
              {...field}
              value={value ? value : Number(field.value)}
            />

        )}
      />
    </>
  );
}
