export const modifyDataForSelect=(array)=>{
    const data = array?.map(item => {
      return {
        label: item?.name,
        value: item?._id
      }
    })
    return data
  }