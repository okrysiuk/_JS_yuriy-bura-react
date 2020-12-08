// Spread operator

const arr1 = [1, 2, 3];
const arr2 = [4, 8, 6];

const res = Math.max(...arr1, ...arr2);

console.log(res);

// ...arr spread operator

const shallowCopy = [...arr1];

console.log(shallowCopy);

//shallowCopy делает поверхносную копию массива
