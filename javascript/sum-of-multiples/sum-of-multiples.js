//
// This is only a SKELETON file for the 'Sum Of Multiples' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const sum = (magicalItem,level) => {
    let sum=0; 
  const set=[];
    for(var i =0; i<magicalItem.length; i++){
     for(var j=1; j< level;j++){
       var value=magicalItem[i]*j;
       if (value>=level) {
         break;
       }else {
         // sum+=value;
         set.push(value);
       }
     }
    }
      var final=[...new Set(set)];
      final.map((each)=>sum+=each)
      return sum;
    };