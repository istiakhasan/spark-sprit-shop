
import  numberToWords from 'number-to-words'
export  function formatCurrency(amount) {
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'BDT'
    });
  }

export function convertToWords(number) {
   const words = numberToWords.toWords(number);
    return words + ' TK only';
}



export function formatPhoneNumber(phoneNumber) {
  const numericPhoneNumber = phoneNumber.replace(/\D/g, '');
  if (numericPhoneNumber.length !== 11) {
    return phoneNumber;
  }
  const formattedPhoneNumber = `(+${numericPhoneNumber.slice(0, 3)}) ${numericPhoneNumber.slice(3)}`;

  return formattedPhoneNumber;
}



export const countryJson=(setter)=>{
  fetch('https://restcountries.com/v3.1/all')
  .then(res=>res.json())
  .then(data=>{
    const newData=data?.map(item=>{
      return {
        label:item?.name?.common, 
        value:item?.area
      }
    })
    setter(newData)
  })
  .catch(err=>{
    console.log(err)
  })
}


export const getErrorMessageByPropertyName = (obj, propertyPath) => {
  const properties = propertyPath.split(".")
  let value = obj;

  for (let prop of properties) {
      if (value[prop]) {
         value = value[prop]
      }
      else {
          return undefined;
      }
  }
  return value.message;
}





  
  