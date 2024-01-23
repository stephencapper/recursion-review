// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
// use document.body, element.childNodes, and element.classList
//input: DOM of html page with elements
//output: array of all the child elements with classname
//constraints: none
//edgecases:
var getElementsByClassName = function(className, child) {
  // your code here
  var resultArray = [];
  //define body with html elements inside
  if (child === undefined) {
    child = document.body;
  }
  //check if current element has className and add to result array if so
  var currClassList = child.classList;
  if (currClassList.contains(className)) {
    resultArray.push(child);
  }
  //iterate through child elements
  console.log(child);
  var currChildNodes = child.childNodes;
  console.log(currChildNodes);
    //recursively call on each childNodes

  //return result array of children with className
};
