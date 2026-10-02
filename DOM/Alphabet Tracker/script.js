
let result = document.querySelector('.result');
let vowels = document.querySelector('#vowels');
let consonants = document.querySelector('#consonants');
let uppercase = document.querySelector('#uppercase');
let lowercase = document.querySelector('#lowercase');
let capitalize = document.querySelector('#capitalize');
let reverse = document.querySelector('#reverse');

vowels.addEventListener('click', function() {
    let input = document.querySelector('input').value;
    let inputArr = input.split('');

    let out= inputArr.filter(function(el) {
        if(el == "a" || el == "e" || el == "i" || el == "o" || el == "u" || el == "A" || el == "E" || el == "I" || el == "O" || el == "U") {
            return el;
        }
    })

    result.innerHTML = `<p>${out}</p>`;

});

consonants.addEventListener('click', function() {
    let input = document.querySelector('input').value;
    let inputArr = input.split('');

    let out= inputArr.filter(function(el) {
        if(el != "a" && el != "e" && el != "i" && el != "o" && el != "u" && el != "A" && el != "E" && el != "I" && el != "O" && el != "U") {
            return el;
        }
    })

    result.innerHTML = `<p>${out}</p>`;

});

uppercase.addEventListener('click', function() {
    let input = document.querySelector('input').value;
    let output = input.toUpperCase();

    result.innerHTML = `<p>${output}</p>`;
});

lowercase.addEventListener('click', function() {
    let input = document.querySelector('input').value;
    let output = input.toLowerCase();

    result.innerHTML = `<p>${output}</p>`;
});

capitalize.addEventListener('click', function() {
    let input = document.querySelector('input').value;
    let output = capitalise(input);

    result.innerHTML = `<p>${output}</p>`;
});
    

function capitalise(input) {
    let output = input[0].toUpperCase()
    for(let i = 1; i < input.length; i++) {
        if(input[i-1]==" "){
            output += input[i].toUpperCase();
        }else{
            output += input[i].toLowerCase();
        }
    }
    return output;
}

reverse.addEventListener("click",e=>{
    let input = document.querySelector('input').value;
    let output = input.split('').reverse().join('');
    result.innerHTML = `<p>${output}</p>`;
})