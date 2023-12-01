// N1 შექმენით პროგრამა, რომელიც ნებისმიერი 10 ელემენტისგან
//  შემდგარი მასივიდან გამოიტანს ყოველ მესამე ელემენტს ეკრანზე.
//   შეასრულეთ ეს დავალება ციკლების მეშვეობით.

let arrayofNumbers = ["1", "2", "3", "4", "5", "6", "7","8","9","10"]

for (let three = 0; three < arrayofNumbers.length; three++) {
if (three === 2) {
    console.log ("ნაპოვნია მესამე რიცხვი : ", arrayofNumbers[three])
    break
}

}


let arrayofSymbols = ["`","!","#","$","A%","^","&","*","(","-"]
let mesame = 0
while (mesame < arrayofSymbols.length -1) {
    mesame = mesame +1 
    if (mesame === 2) {
        console.log("ნაპოვნია მესამე სიმბოლო : ", arrayofSymbols[mesame]);
        break
    }
}

// N2 შექმენით, პროგრამა, რომელიც 10-დან 1-მდე რიცხვებს გამოიტანს. 
// მაგ. 10,9,8,7,6,5,4,3,2,1, შეასრულეთ ეს დავალება ციკლების მეშვეობით.
   
    let numbers = [1,2,3,4,5,6,7,8,9,10]


for (let count = numbers.length-1; count >= 0; count --) {
console.log(numbers[count]);
    
}

let count = numbers.length - 1;

while (count >= 0) {
    console.log(numbers[count])
    count--
}

// N3 მოცემული მასივიდან
// let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
// ამოიღეთ 'Bob' სახელი ყველგან სადაც ის შეგხვდებათ და დაბრუნეთ მასივი 'Bob'-სახელის გარეშე. შედეგი ესეთი უნდა იყოს:
//  ['John', 'Nick', 'Mary', 'Sue', 'Ann'] შეასრულეთ ეს დავალება ციკლების მეშვეობით, ასევე კარგი იქნება თუ იგივე დავალებას ციკლური ოპერაციების გამოყენების გარეშეც შეასრულებთ.


let names = ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']

for (i = names.length-1; i >= 0; i--) {
    if (names[i] === 'Bob') {
        names.splice (i,1)
    }
}
console.log(names);




let saxelebi =  ['John', 'Nick', 'Bob', 'Mary', 'Bob', 'Sue', 'Ann', 'Bob', 'Bob']
let saxelebiLoop = saxelebi.length -1
    while (saxelebiLoop >= 0) {
if (saxelebi[saxelebiLoop] === 'Bob') {
    saxelebi.splice (saxelebiLoop,1)
}
saxelebiLoop --  //if-ის გარეთ რატომ ჭირდება ჩაწერა ვერ მივდვი , იფში როცა ეწერა 1 ბობს არ შლიდა


}
console.log(saxelebi);


// N4ციკლური ოპერაციების მეშვეობით შექმენით ფუნქცია, რომელიც დაიანგარიშებს კონკრეტული რიცხვის ხარისხს,
//  მაგ. შექმენით ფუნქცია სახელით: numberPower(number, power) და პარამეტრებით: number, power, მაგ. თუ
//   რიცხვია 5 და ხარისხი 3, მაშინ თქვენმა ფუნქციამ უნდა დააბრუნოს 5*5*5 ანუ 125.

// let number = prompt("შეიყვანე რიცხვი")
// let power = prompt ("შეიყვანე ხარისხი")
// let numberPower = (number, power, ) => {

// if (number && power) {
//     return number ** power//ეს მგონი არ გვისწავლია სანამ არ დავგუგლე ვეწვალე კაიხანი :დ
// }
// else {
//     return "Invalid input. Please enter valid numbers."
// }

// }

// document.write(number + " ხარისში " + power + " არის " + (numberPower (number,power)))


// N5 შექმენით ფუნქცია, რომელიც 1-დან 100-მდე რიცხვებში დაიანგარიშებს თუ რომელი
//  რიცხვები იყოფა 3-ზე უნაშთოდ, და იმ რიცხვების ადგილას რომლებიც იყოფა 
//  3-ზე უნაშთოდ გამოიტანს, Fizz, ასევე იგივე ფუნქციის მიხედვით გამოიანგარიშეთ თუ
//   რიცხვი 5-ზე იყოფა უნაშთოდ და გამოიტანეთ Buzz, ხოლო თუ რიცხვი იყოფა 3-ზეც
//    და 5-ზეც უნაშთოდ გამოიტანეთ FizzBuzz.

// let numbers100 =
function FizzBuzz () {
for (count100 = 1 ; count100 <= 100; count100 ++){
    // console.log(count100);
    if (count100 % 3 == 0 && count100 % 5 == 0){
        console.log (count100,"FizzBuzz")
    }
    else if (count100 % 5 == 0) {
        console.log(count100,"Buzz")
    }
    else if (count100 % 3 == 0) {
        console.log(count100,"Fizz")
    } else{
console.log(count100)
}
 } }
FizzBuzz()


// N7 შექმენით ფუნქცია, რომელიც სტრიქონის პირველ ასობგერის კაპიტალიზირებას 
// მოახდენს მაგ. javascript => უნდა გახდეს: Javascript, ანუ J დიდი ასობგერით
//  უნდა ეწეროს.
let text = "javascript"
function capital(input) {
return input.replace ("j","J")
}
console.log(capital(text))

// N8 შექმენით ფუნქცია, რომელიც შეამოწმებს არის თუ არა მასზე მიწოდებული სტრიქონი ცარიელი.
//  მაგ. blankStringChecker(testString) => რომელიც დააბრუნებს this string is blank-ს
//   თუ ცარიელია/ this string is not blank-ს თუ ცარიელი არაა.


let userpass = " "  // ეს გავაკეთე მაგრამ აქ ბრჭყალებში თუ სფეისი არ დაბტოვე ვერ ხვდება რო ცარიელია , სხვა მუშაობს ყველაფერი

let checker = false

for (let letter of userpass) {
    if (letter === " "){ 
    checker = true
}
if (checker === true) {
    console.log ("this string is not blank")
}
else {
    console.log ("this string is  blank")

}
}

// N9 შექმენით ფუნქცია, რომელიც მასზე მიწოდებულ სტრიქონს გადააქცევს მასივად.
//  მაგ. stringToArray(testString) =>  თუ მივაწვდით სტრიქონს “Hello, World” => 
// გამოიტანს მის ვერსიას მასივში.   [“Hello”, “World”]

let testString = "blablabla vashli marwyvi"


let stringToArray = () => {
return testString.split (" ")
    }


let stringToArrayResult = stringToArray(testString)
console.log(stringToArrayResult)


// N10 შექმენით ერთგვარი ემაილის დამცველი ფუნქცია, რომლის ფუნქციონალი მდგომარეობს
//  შემდგომში: მომხმარებელი გაწვდის ემაილს წერტილით გამოყოფილ თავისი სახელით 
//  და გვარით, beqa.beqauri@gmail.com, თქვენი ფუნქცია კი გამოიტანს მის დაცულ ვერსიას 
//  ამ ფორმით:  beqa……..@gmail.com. წერტილების ოდენობა უნდა ემთხვეოდეს გვარის სიგრძეს.



let saxeli = "beqa."
let gvari = "beqauri"
let gmail = "@gmail.com"

let mail = saxeli + gvari.replaceAll(gvari, " . ") + gmail


// ვერ ვაკეთებ იმდენივე წერტილი რო გამომიტანოს რამდენიც გვაარშიაა
console.log(result); 

console.log(mail)



