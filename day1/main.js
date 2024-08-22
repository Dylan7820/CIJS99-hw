// ** Bài 1
// const tinhBinhPhuong = (number) =>{
//     return number * number;
// }
// console.log(tinhBinhPhuong(4))
// ** Bài 2
const findTextInString = (stringText, wordText) =>{
    
    const stringArr = stringText.split(" ");
    console.log(stringArr.includes(wordText));
};

findTextInString("hello word", "word");
// **Bài 3
let array = ["Một", "Hai", "Ba"];
addPrefix = (array, prelex) => {
  let add = [];
  for (let i = 0; i < array.length; i++) {
    add.push(`${prelex}: ${array[i]}`);
  }
  console.log(add);
};

addPrefix(array, "Number"); // ['Number: Một', 'Number: Hai', 'Number: Ba']


// ** Bài 4
const series = [2, 3, 4];
doubleNumber = (series)=> {
  let result = [];
  for (let i = 0; i < series.length; i++) {
    let a = series[i]*2;
    
    result.push(a)
  }
  console.log(result);
}

doubleNumber(series) 


// ** Bài 5

const arry = [1, 2, 3, 4, 5,6, 7];
filterNumber = (arry)=> {
  let result = [];
  for (let i = 0; i < arry.length; i++) {
    if (arry[i] % 2 !== 0) {
      result.push(arry[i])
    }
    
  }
  console.log(result);
}

filterNumber(arry) 