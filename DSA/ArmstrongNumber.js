function ArmstrongNumber(num){
    let str = num+""
    let digit = str.length
    let temp = num, sum = 0
    while(num>0){
        let rem = num%10;
        sum+=(rem*rem*rem);
        num = Math.floor(num/10)
    }
    console.log(sum)
    if(sum == temp){
        return true;
    }
    return false;
}

console.log(ArmstrongNumber(153))