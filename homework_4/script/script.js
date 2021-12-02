function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
for(var i = 0; i < 100; i++){
    if(isPrime(i)) console.log(i);
}


function factorial(x) {
    if (x == 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}
console.log(factorial(3))


function degree(a, b) {
    if(b <= 0) return 1
    let degree = a
    for(let i = 1; i < b; i++){
        degree *= a
    }
    return degree
}
console.log(degree(2, 12))