const numbersList = [];

function sum(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function father(a, b, func){
    numbersList.push(func(a,b));
}

father(2,5,sum);
father(10,4,substract);
father(10,10,sum);
father(10,9,substract);
console.log(numbersList);