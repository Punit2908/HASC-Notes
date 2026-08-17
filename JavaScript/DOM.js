// console.log(document.querySelector(".two"));
// console.log(d);

let div = document.getElementById("first")

// div.innerText = "Hello this text is changed with js"


function changehtml(){
    div.innerHTML = "<h1>Helo</h1><p>This is a paragraph</p>"
    
    div.classList.add("third")
}

const input = document.querySelector("#username");
const output = document.querySelector(".output");

input.addEventListener("input",()=>{
    output.innerText = input.value;
})

const len = document.getElementById("length");
const bth = document.getElementById("breadth");

function area(){
    output.innerText = `The area of rectange is ${len.value*bth.value}`
}
document.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        console.log("Enter pressed");
    }    
})

const h1 = document.createElement("h1")
h1.innerText = "This element is created with dom"
const two = document.getElementsByClassName("two").item(0)
two.append(h1)
// document.body.appendChild(h1)
// two.remove()