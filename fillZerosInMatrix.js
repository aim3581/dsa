let make_zeroes = function(matrix) {
    // TODO: Write - Your - 
    const obj = {};
    for(let i=0;i<matrix.length;i++){
      const j = matrix[i].indexOf(0);
      if(j>-1){
        obj[i]=j;
      }
    }
    fillZeros(matrix,obj)
    return matrix
  };
  
  function fillZeros(matrix,obj){
    for (const i in obj) {
        matrix[i].fill(0);
        for (let index = 0; index < matrix.length; index++) {
            matrix[index][obj[i]]=0;
            
        }
    }
    
  }

  let matrix = [
    [1, 5, 45, 0, 81],
    [6, 7, 2, 82, 8],
    [20, 22, 49, 5, 5],
    [0, 23, 50, 4, 92],
    ];
console.log(matrix)
    console.log(make_zeroes(matrix))