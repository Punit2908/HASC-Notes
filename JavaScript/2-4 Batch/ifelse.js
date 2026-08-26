// ifelse
let age = 19
if("a"){
    //statements
    console.log("You are eligible to vote");   
}

console.log("Hello I am outiside the if else");

// let marks = parseInt(prompt("Enter your marks in percentage"))
// //nested ifelse

// if(marks>90){
//     console.log("Grade A, very good score");
// }else if(marks>70){
//     console.log("Grade B, good score");
// }else if(marks>50){
//     console.log("Grade C, average marks");
// }else{
//     console.log("Fail");
// }


//even odd
let num = 1

if(num==0 || num==1){
    console.log("Your number doesn't qualify for the test of even and odd")
}
else if(num%2==0){
    console.log("Even number");
}else{
    console.log("Odd number")
}

//rock, paper, scissors

let computer = "rock"
let user = prompt("Enter rock, paper, scissors")

if(user == "rock"){
    console.log("draw");
}else if(user == "scissors"){
    console.log("You loose");
}else if(user == "paper"){
    console.log("You won");
}else{
    console.log("Enter a valid input");
}

let grade = parseInt(prompt("Enter your grade: "));

if(grade >= 90){
    console.log("A+, you topped the class");
}else if(grade >= 80){
    console.log("A, you did well");
}else if(grade >= 70){
    console.log("B, you can do better");
}else if(grade >= 60){
    console.log("C, you need to work harder");
}else{
    console.log("F, you failed the class");
}

if(10 == '10'){
    console.log("true ==");
}

if(10 === '10'){
    console.log("true ===");
}else{
    console.log("false ===");
}
console.log("Hello");


let num = parseInt(prompt("Enter a number: "));

//even or odd 
if(num%2 == 0){
    console.log("Even number");
}else{
    console.log("odd Number");
}


//nested if

let player1 = "Scissors"
let player2 = prompt("Enter Rock , paper or scissors")

if(player1 == "Rock"){
    if(player2=="Rock"){
        console.log("Draw");
    }else if(player2 == "Paper"){
        console.log("Player 2 won");
    }else{
        console.log("Player 2 loose");
    }
}else if(player1 == "Paper"){
     if(player2=="Rock"){
        console.log("Player 2 loose");
    }else if(player2 == "Paper"){
        console.log("Draw");
    }else{
        console.log("Player 2 won");
    }
}else{
    if(player2=="Rock"){
        console.log("Player 2 Win");
    }else if(player2 == "Paper"){
        console.log("Player 2 loose");
    }else{
        console.log("Draw");
    }
}