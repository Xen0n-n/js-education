function findAverage(array) {
    if (array.length === 0){
      return 0;    
    } else {
    let avg = 0;
    array.forEach((number) => {
      avg += number;
    })
    return avg / array.length;
  }
}

console.log(findAverage([]))
