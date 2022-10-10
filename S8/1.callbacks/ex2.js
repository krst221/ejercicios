const userAnswers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, func){
    userAnswers.push(func(description));
}
father('pepe', confirmExample);
father('pepe', confirmExample);
father('papo', promptExample);
father('papo', promptExample);
console.log(userAnswers);