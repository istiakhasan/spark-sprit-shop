export  const customStyles = {
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
      backgroundColor: state.isSelected ? '#004DDA' : 'white',
      color: state.isSelected ? 'white' : 'black',
      fontSize:"12px",
      padding:"4px 12px",
      marginBottom:"2px",
      cursor:"pointer",
      ':hover': {
        backgroundColor: 'rgba(0,0,0,.2)', // Set the desired background color on hover
      },
    }),
  };