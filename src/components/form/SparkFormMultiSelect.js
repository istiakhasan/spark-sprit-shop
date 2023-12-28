import { useFormContext, Controller } from "react-hook-form";
import Select from 'react-select'
import { customStyles } from "./constant";
export default function SparkFormMultiSelect({
  name,
  options,
  label,
  required,
  placeholder,
  value,
  handleChange,
}) {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

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
      control={control}
      render={({ field }) =>( 
         <Select className="basic-multi-select"
         classNamePrefix="select" placeholder={placeholder} 
          isMulti
           styles={customStyles}  options={options} onChange={handleChange ? handleChange : field.onChange} {...field}/>
      )}
    />
    </>
  );
}
