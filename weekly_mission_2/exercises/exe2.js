const explorers = [{
  name: "Explorer 1",
  exercises_completed: 10,
  rate: 99,
  city: "CDMX",
  stack: [
    "js",
    "c#"
  ],
  missions: {
    onboarding: {
      isFinished: true,
      exercisesFinished: true
    },
    frontend: {
      isFinished: true,
      exercisesFinished: true
    }
  }
},
{
  name: "Explorer 2",
  exercises_completed: 9,
  city: "Veracruz",
  rate: 50,
  stack: [
    "js"
  ],
  missions: {
    onboarding: {
      isFinished: false,
      exercisesFinished: false
    },
    frontend: {
      isFinished: false,
      exercisesFinished: false
    }
  }
},
{
  name: "Explorer 3",
  exercises_completed: 3,
  city: "Sonora",
  rate: 100,
  stack: [
    "elixir"
  ],
  missions: {
    onboarding: {
      isFinished: true,
      exercisesFinished: true
    },
    frontend: {
      isFinished: false,
      exercisesFinished: false
    }
  }
}
]

/* Imprime nombre */
console.log("1.) Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH")
explorers.forEach(element =>
  console.log("Nombre: " + element.name)
)
console.log("\n")
/*Fin de Imprime nombre */

/* Imprime de stack por explorer */
console.log("2.) Imprime el stack de cada explorer, usa FOR EACH")
explorers.forEach(element =>
  console.log(element.stack)
)
console.log("\n")
/* Fin Imprime stacks */

/* Listas con MAP */
console.log("3.) Crea una nueva lista con las listas de stacks de cada explorer, usa MAP")
const newStack = explorers.map(newElement => newElement.stack)
console.log(newStack)
console.log("\n")
/* Fin de listas con MAP */

/* Obtener lista de explorer con stack "js" usando filter */
console.log('4.) Obtén la lista de explorers que tengan en su stack "js", usa FILTER"');
const stackFilter = explorers.filter(element =>
  element.stack.includes("js")
)
console.log(stackFilter)
console.log("\n");

/* Explorers de la CDMX */
console.log("5.) Busca el primer explorer que sea de la CDMX, usa FIND");
const cityFind = explorers.find(city_explorers => city_explorers.city === "CDMX")
console.log(cityFind);
console.log("\n");

/* Suma de todos los exercises usando reduce */
console.log("6.) Obtén la suma de todos los exercises_completed, usa REDUCE");
const sumaExercises = explorers.reduce((acc, element) => acc + element.exercises_completed, 0)
console.log("La suma es: " + sumaExercises);
console.log("\n");

/* Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME */
console.log("7.) Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME");
const exercisesFinish_front = explorers.some(element =>
  element.missions.frontend.exercisesFinished == true
)
console.log(exercisesFinish_front);
console.log("\n");

/* Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY */
console.log("8.) Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.");
const exercisesFinish_onbor = explorers.every((element) =>
  typeof element.missions.onboarding.exercisesFinished === 'true'
)
console.log(exercisesFinish_onbor);