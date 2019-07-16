// task 0;
function getNumbers(arg) {
  const result = [];
  for (let i = 0; i < arg.length; i++) {
    if (parseInt(arg[i], 10)) {
      result.push(parseInt(arg[i]));
    }
  }
  return result;
}
// task 1;
function findTypes() {
  const types = {};
  for (let i = 0; i < arguments.length; i++) {
    const itemType = typeof arguments[i];
    if (types[itemType] === undefined) {
      types[itemType] = 0;
    }
    types[itemType]++;
  }
  return types;
}
// task 2;
function executeforEach(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}
// task 3;
function mapArray(arr,func) {
  const result = [];
  executeforEach(arr, function(element){
    result.push(func(element));
  });
  return result;
}
//task 4;  
function filterArray(arr, func) {
  const result = [];
  executeforEach(arr, function(element){
    if (func(element)) {
      result.push(element);
    }
  });
  return result;
}
// task 5;
function showFormattedDate(arg) {
  const time = arg;
  const opt = {
    timezone: 'UTC',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }
  const result = time.toLocaleString('en-US', opt);
  const message = 'Date: '
  return message + result.replace(/,/g,'');
}
// task 6;
function canConvertToDate(dateString) {
  return !isNaN(new Date(dateString).getTime());
}
// task 7;
function daysBetween() {
  const day1 = arguments[0];
  const day2 = arguments[1];
  const differenceTime = Math.abs(day2.getTime() - day1.getTime());
  const milliseconds = 1000;
  const seconds = 60;
  const minutes = 60;
  const hours = 24;
  const differenceDays = Math.ceil(differenceTime / (milliseconds * seconds * minutes * hours)); 
  return differenceDays;
}
// task 8;
const data8 = [
  {
    '_id': '5b5e3168c6bf40f2c1235cd6',
    'index': 0,
    ' birthday ': '2016-03-18T00:00:00',
    'eyeColor': 'green',
    'name': 'Stein',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e3168e328c0d72e4f27d8',
    'index': 1,
    ' birthday ': '1991-02-11T00:00:00',
    'eyeColor': 'blue',
    'name': 'Cortez',
    'favoriteFruit': 'strawberry'
  },
  {
    '_id': '5b5e3168cc79132b631c666a',
    'index': 2,
    ' birthday ': '1984-04-17T00:00:00',
    'eyeColor': 'blue',
    'name': 'Suzette',
    'favoriteFruit': 'apple'
  },
  {
    '_id': '5b5e31682093adcc6cd0dde5',
    'index': 3,
    ' birthday ': '1994-04-17T00:00:00',
    'eyeColor': 'green',
    'name': 'George',
    'favoriteFruit': 'banana'
  }
];
function getAmountOfAdultPeople(data) {
 const today = new Date();
 const age = 18;
 const daysInYear = 365;
 let persons = 0;
 executeforEach(data, function(item) {
  if (daysBetween(new Date(item[' birthday ']), today) / daysInYear > age) {
    persons = persons + 1;
    }
  })
  return persons;
}
// task 9;
function keys(obj) {
  const arr = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      arr.push(prop);
    }
  }
  return arr;
}
// task 10;
function values(objData) {
  const resultArr = [];
  for (let key in objData) {
    if (objData.hasOwnProperty(key)) {
      resultArr.push(objData[key]);
    }
  }
  return resultArr;
}
