function factors(num){
    for(let i=2;i<=num;i++){
        if(num%i==0){
            console.log(i)
        }
    }
}

factors(11)

function primeNumber(num){
    for(let i=2; i<Math.sqrt(num); i++){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
console.log(primeNumber(18))