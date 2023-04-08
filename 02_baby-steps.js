const arr = process.argv;
arr.splice(0, 2);
const sum = arr.reduce((sum1, elem) => {
    return sum1 + Number(elem);
}, 0);

console.log(sum);