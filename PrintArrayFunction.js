'use strict';
var names = ['kakada', 'buntha', 'bunrith', 'sreyka', 'lina', 'nalin'];
var display = document.getElementById('result');
var nameLists = sortFunction(names);
//using for loop to print array value
function printArrayByForLoop(val){
  for(let counter = 0; counter < val.length; counter++){
  }
  return val;
};
//using map ES6 JavaScript to print array object
function printArrayByMap(val){
  val.map(function(val){
  })
  return val;
};
//using forEach to print array object
function printArrayByForEach(val){
  val.forEach(function(val){
  })
  return val;
}
//using sort method to create sorting function
function sortFunction(val){
  return val.sort();
};
//power function
function power(base, exponent){
  let result = 1;
  let counter;
  for (counter = 0; counter < exponent; counter++){
    result *= base;
  }
  return result;
};

function landscape(){
  var result = "";
  var flat = function(size){
    for (var count = 0; count < size; count++){
      result += " _ ";
      }
    };
  var mountain = function(size){
    result += "/";
    for(var count = 0; count < size; count++){
      result += " ' ";
      }
      result += "\\";
    };
    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(1);
    return result;
  };

//displaying result
function displayResult(){
  result.innerHTML = landscape();
}
window.onload = displayResult;
