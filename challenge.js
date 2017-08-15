const challenge = (array) => {
  let number = 0;
  while(array.length !== 0){
    number = array.shift()
    if(number + 1 !== array[0])
      break;
  }
  return number + 1;
}
