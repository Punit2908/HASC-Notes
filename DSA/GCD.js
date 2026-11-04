function GCD(a,b){
    while(b>0){
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}


// console.log(GCD(4,3))

var isHappy = function(n) {
    let sum = 0
    let temp = n
    while(sum!=temp){ 
       sum = 0
        while(n>0){
            let digit = n%10;
            sum = sum+(digit*digit)
            n = Math.floor(n/10)
        }
        // console.log(sum)
        n = sum
        if(sum == 1){
            return true
        }
        if(sum == temp || sum == 4){
            return false
        }
    }

};
console.log(isHappy(102))