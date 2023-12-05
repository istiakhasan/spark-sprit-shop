import { useFormContext, Controller } from "react-hook-form";
import Select from 'react-select'
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
  const customStyles = {
    // Style for the container that holds the entire Select component
    container: (provided, state) => ({
      ...provided,
      width: "100%",
      marginBottom:"12px"
    }),
  
    // Style for the control (main input) of the Select component
    control: (provided, state) => ({
      ...provided,
      border: '1px solid #ccc',
      fontSize:"12px"
    }),
  
    // Style for the individual options in the dropdown
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? '#007bff' : 'white',
      color: state.isSelected ? 'white' : 'black',
      fontSize:"12px"
    }),
  };
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
      control={control}
      render={({ field }) =>( 
         <Select placeholder={placeholder} components={{ DropdownIndicator: ()=>null }} styles={customStyles}  options={options} onChange={handleChange ? handleChange : field.onChange} {...field}/>
      )}
    />
    </>
  );
}
