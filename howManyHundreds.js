function howManyHundreds(num){
  let result;
  let div;
  if(num%100===0){
    result=num/100;
  } 
  else if(num>1000){
      result=Math.trunc(num/100);
    }
  else {
    
    div=num/100;
    result=Math.trunc(div%10);

}
 
  //console.log(div);
  return result;
}

console.log(howManyHundreds(1234), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
//console.log(12.34%10);