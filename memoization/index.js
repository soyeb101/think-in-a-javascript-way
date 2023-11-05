// memoization in js

function add(x) {
    return 10 + x; 
}
// higher order function
const memo = (func) => {
    let cache = {};

    return function(x){
        console.log(cache);
        if(cache[x]){
            console.log("result from cache");
            return cache[x];
        } else {
            console.log("calculating result");
            const result = func(x);
            cache[x] = result;
            return result;
        }
    }
}

const calculate = memo(add);


console.log(calculate(10));
console.log(calculate(10));