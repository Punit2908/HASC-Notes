let arr = [1,2,3,4,5,6,7,8,9]
//aisa data structure jisme multiple elements honge

//data structure types
//array
//object
//set
//map

//ul li*10
//ul.map(el = >{}) el=li
arr.forEach(el => {
  console.log(el*4)
})

let arr2 = arr.map(rashi =>{ return rashi*2})
document.write(`${arr2} <br>`)
document.write(arr)

//function tasks
let num = parseInt(prompt("Enter a number: "))
function isPrime(num){
  if(num == 1){
    return false
  }
  for(let i = 2; i<num; i++){
    if(num%i == 0){
      return false
    }
  }
  return true
}

function generatePrime(num){
  console.log("Prime numbers between 1 and "+num+" are: ")
  for(let i = 1; i<=num; i++){
    if(isPrime(i)){
      console.log(i)
    }
  }
}

generatePrime(num)