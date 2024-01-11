
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


  
  