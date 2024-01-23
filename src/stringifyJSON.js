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
  if (obj === null || typeof(obj) === 'function' || obj === Infinity || obj === NaN) {
    return 'null';
  }
  if (obj === '') {
    return '""';
  }
  //handle primitve values
  if (typeof(obj) === 'string') {
    resultString += '"' + obj + '"';
  }
  if (typeof(obj) === 'boolean') {
    return String(obj);
  }
  if (typeof(obj) === 'number') {
    return String(obj);
  }


  //handle arrays
  if (Array.isArray(obj)) {
    resultString += '[';

    obj.forEach(function(item, index, array) {
      if (item === undefined) {
        resultString += 'null';
      } else {
        resultString = resultString + stringifyJSON(item);
      }
      if (array.length - 1 !== index) {
        resultString += ',';
      }
    });

    resultString += ']';
  //handle objects
  } else if (typeof(obj) === 'object') {
    resultString += '{';
    var keys = Object.keys(obj);
    keys.forEach(function(key, index, array) {
      var value = obj[key];
      if (typeof(value) !== 'function' && value !== undefined) {
        resultString = resultString + '"' + String(key) + '":' + stringifyJSON(value);
        if (array.length - 1 !== index) {
          resultString += ',';
        }
      }
    });
    resultString += '}';
  }

  return resultString;

};
