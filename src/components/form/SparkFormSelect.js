import { useFormContext, Controller } from "react-hook-form";
import Select from 'react-select'
import { customStyles } from "./constant";
import { getErrorMessageByPropertyName } from "@/common/utils";
export default function SparkFormSelect({
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
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
    {required ? (
        <span
          style={{
            color: "red",
          }}SS
        >
          *
        </span>
      ) : null}
       {label?<p style={{fontSize:"16px",color:"gray"}} className="mb-0"><small>{label}</small>
       </p>:null}
       {/* {errorMessage ?<small style={{ color: "red",fontSize:"12px" }}>{errorMessage}</small>:<br />} */}
       <small style={{ color: "red",fontSize:"12px" }}>{errorMessage}</small>
    <Controller
      name={name}
      control={control}
      render={({ field }) =>( 
         <Select placeholder={placeholder}
          // components={{ DropdownIndicator: ()=>null }}
           styles={customStyles}  options={options} onChange={handleChange ? handleChange : field.onChange} {...field}/>
      )}
    />
    </>
  );
}
