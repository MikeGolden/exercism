//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (seq,dig) => {
  if(dig>seq.length) throw new Error('Span must be smaller than string length');
  if(/\D/.test(seq)) throw new Error('Digits input must only contain digits');
    if(dig<=0) throw new Error('Span must be greater than zero');
     
  const numbers = []
  for (let i = 0; i <= (seq.length-dig); i++) {
    numbers.push(seq.slice(i,i+dig))
  }
  const products = numbers.map(num=>
    num.split("").reduce((total,d)=>{
    return total*parseInt(d)},1)
  )
  return Math.max(...products)
};