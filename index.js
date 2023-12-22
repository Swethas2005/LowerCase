let toLowerCase = char => char.toLowerCase();

let upperCase = "MASAISCHOOL";
let convertWord = "";

for (let i = 0; i < upperCase.length; i++) {
    convertWord += toLowerCase(upperCase[i]);
}

console.log(convertWord);

let str = ["MA", "SA", "I", "SCH", "OOL"];
let convertArray = [];

for (let i = 0; i < str.length; i++) {
    let convertString = "";
    for (let j = 0; j < str[i].length; j++) {
        convertString += toLowerCase(str[i][j]);
    }
    convertArray.push(convertString);
}

console.log(convertArray);