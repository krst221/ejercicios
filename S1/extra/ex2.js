const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
let j = 0;
for (let i = 0; i < foodSchedule.length ; i++){ 
    if(!foodSchedule[i].isVegan){
        foodSchedule.splice(i, 1, fruits[j]);
            j++;
    }
}
console.log(foodSchedule);