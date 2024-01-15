export const modifyDataForSelect=(array)=>{
    const data = array?.map(item => {
      return {
        label: item?.name,
        value: item?._id
      }
    })
    return data
  }

  
  export const uploadImageToImagebb = async (formData) => {
    try {
      const apiKey = 'ee3fd83f55e650edf800161db386836a';
      const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
      const res = await fetch(url, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if(data?.status_code===400){
        throw new Error('Image is empty');
      }
      return data?.data?.url
    } catch (error) {

      throw error?.message
    }
  };