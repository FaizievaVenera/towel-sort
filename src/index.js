
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = []
  if (arguments.length === 0 || matrix.length===0){
  return arr; 
  }else{ 
  matrix.forEach((el,i)=>{
    (i===0 || i%2===0)? arr = arr.concat(matrix[i]): arr = arr.concat(matrix[i].reverse())
  })
  return arr
}
  
}
