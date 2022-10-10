function swap(array, obj1, obj2) {
    let temp = array[obj1];
    array[obj1] = array[obj2];
    array[obj2] = temp;
    console.log(array);
}

swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 0, 3);
swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 3, 3);
swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 3, 0);
swap(['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'], 2, 1);