// Ejercicio 1 -> over

const over = () => {
    // Añadir una clase sobre logo estilo: background-color: darkred;
    document.querySelector('logo').classList.add('background-red');
  };
  // Ejercicio 1 -> out
  
  const out = () => {
    // Eliminar la clase añadida sobre logo estilo: background-color: darkred;
    document.querySelector('logo').classList.remove('background-red');
  };
  
  // Ejercicio 3 -> onkeyup
  
  const toUpperInput = (input) => input.value = input.value.toUppercase();
    // Transforma el input a mayusculas
  
  
  // Ejercicio 4 -> OnClick
  
  // Listado de personajes
  const myFinder = ["Wolverine", "Storm", "IronMan", "Hulk"];
  
  const searchMarvel = () => {
    // Recupera el valor del Input
    const inputFinder = document.getElementById("input-finder").value;
    // Crea un elemento div y un elemento p
    const div$$ = document.createElement('div');
    const p$$ = document.createElement('p');
    // Recorre los elementos de tu listado
    myFinder.forEach((element) => {
      
      // Si el elemento coincide el del input
      if (inputFinder === element) {
        // Añade al P el mensaje -> 'Lo hemos encontrado' + inputFinder
      } else {
        // Añade al P el mensaje -> 'No hemos encontrado' + inputFinder
      }
    });
    // Añade el p en el div
    // Usa querySelector para recuperar el body
    // Añade el div sobre el body
  };