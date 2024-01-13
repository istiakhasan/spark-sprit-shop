
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
  // Remove any non-numeric characters from the phone number
  const numericPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Check if the numeric phone number is valid
  if (numericPhoneNumber.length !== 11) {
    // Invalid phone number, return the original input
    return phoneNumber;
  }

  // Format the phone number as per the desired format
  const formattedPhoneNumber = `(+${numericPhoneNumber.slice(0, 3)}) ${numericPhoneNumber.slice(3)}`;

  return formattedPhoneNumber;
}





  
  