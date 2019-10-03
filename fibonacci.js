function fib(n) {
    let fibArr = [];
    let i = 0;
    let j = 1;
    fibArr.push(i);
    fibArr.push(j);
    while (fibArr.length <= n) {
        fibArr.push (fibArr[i] + fibArr[j]);
        i++;
        j++;
    }
    console.log (fibArr);
}
fib(15);