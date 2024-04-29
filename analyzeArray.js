const analyzeArray = function (arr) {
    const array = arr;
  
    const average = () => {
      const sum = array.reduce((a, b) => {
        return a+b;
      }, 0);
      return sum / array.length;
    };
  
    const min = () => {
      const min = array.reduce((a,b) => {
        return a>b ? b : a;
      });
  
      return min;
    };
  
    const max = () => {
      const max = array.reduce((a,b) => {
        return a>b ? a : b;
      });
  
      return max;
    };
  
    const length = array.length;
  
    return { average, min, max, length };
  };
  
  module.exports = analyzeArray;