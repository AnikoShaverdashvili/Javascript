//1
let cars = ["audi", "bmw", "lexus", "volkswagen", "porsche"];

for (var i = 1; i < 5; i++) {
    console.log(cars[i]);
}


//2

let names = ['aniko', 'ana', 'ani', 'anamaria', 'anastasia'];
for (var x = 0; x < names.length; x++) {
    if (names[x].length > 3) {
        console.log(names[x]);
    }
}

//3

let number = [3, 4, 6, 7, 6, 3, 2, 6, 4, 4643, 7];
for (var y = 0; y < number.length; y++) {
    if (number[y] % 2 == 0) {
        console.log(number[y]);
    }
}

let numbers = [4, 342, 545, 3224, 43534, 23];
console.log('კენტი რიცხვები: ');
for (var y = 0; y < numbers.length; y++) {
    if (numbers[y] % 2 == 1) {
        console.log(numbers[y]);
    }
}

//4

let numbers = [15, 67, 100, 5, 7, [80, 500]];
console.log(numbers[5][1]);


//5

var person = {
    firstname: "john",
    lastname: "doe",
    age: 50,
    eyecolor: "blue"
};

console.log(person.eyecolor);


//6

let elements = ['aniko', 67, ['ana', 12]];
for (var k = 0; k < elements.length; k++) {
    console.log(elements[k])
}

//7

let names = ['sandro', 'luka', 'saba', 'irakli', 'Nika'];
if (names.length == 5 && names[names.length - 1] == 'Nika') {
    console.log("მასივის რაოდენობა: 5 და ბოლო ელემენტია ნიკა");
}

if (names.length == 7 || names[0] == 'sandro') {
    console.log("მასივის რაოდენობა: 7 და პირველი ელემენტია სანდრო");
}


//8
console.log(6 === "6");
//===-ით შემოწმებისას ამოწმებს ცვლადების ტიპებსაც, რადგანაც განსხვავებული ტიპებია აბრუნებს false-ს
