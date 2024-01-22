// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

//Input: primitive values, arrays, objects, functions, (symbols)
//Output: string (in JSON format)
//Constraints: don't cheat
//Edge cases: undefined, empty object, empty array, single values; functions; undefined in an array (null); undefined in an object (ommitted); infinity, NaN (both null);

var stringifyJSON = function(obj) {
  var resultString = '';
  //handle the edge cases
  if (obj === undefined) {
    return undefined;
  }
  if (obj === null || typeof(obj) === 'function' || obj === infinity || obj === NaN) {
    return null;
  }
  if (obj === '') {
    return '';
  }
  //handle primitve values
  if (typeof(obj) === 'string') {
    resultString += obj;
  }


  //handle arrays

  //handle objects

  return resultString;

};
