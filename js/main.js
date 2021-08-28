const array = [2, 4, 7, 5, 4, 3, 8];

const result = array.filter(function (value, index, array) {
  return array.indexOf(value)===index;
})

console.log(result);


function leepYear(year) {
  if ((year % 4 === 0 && year % 100 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

const Year = 2020;
if (leepYear(Year)) {
  console.log(Year + "はうるう年です。");
} else {
  console.log(Year + "はうるう年ではありません。");
}

const YEAR = 2021;
if (leepYear(YEAR)) {
  console.log(YEAR + "はうるう年です。");
} else {
  console.log(YEAR + "はうるう年ではありません。");
}