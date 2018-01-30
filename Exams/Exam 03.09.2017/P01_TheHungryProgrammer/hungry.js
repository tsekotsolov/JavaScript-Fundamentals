function hungry(meals = [], commands = []) {

  let eatenMeals = 0;

  for (let i = 0; i < commands.length; i++) {



    let currentCommand = commands[i].split(' ');


    if (currentCommand[0] === 'Serve') {

      if (meals.length != 0) {
        console.log(`${meals[meals.length-1]} served!`);
      }


      meals.pop();
    } else if (currentCommand[0] === "Eat") {

      if (meals.length != 0) {
        console.log(`${meals[0]} eaten`);
        meals.shift();
        eatenMeals++;
      }



    } else if (currentCommand[0] === "Add") {

      if (currentCommand[1] != undefined) {
        meals.unshift(currentCommand[1]);
      }


    } else if (currentCommand[0] === "Shift") {

      let firstIndex = currentCommand[1];
      let secondIndex = currentCommand[2];

      if (meals[firstIndex] != undefined && meals[secondIndex] != undefined) {
        let temp = meals[firstIndex];

        meals[firstIndex] = meals[secondIndex];
        meals[secondIndex] = temp;
      }

    } else if (currentCommand[0] === "Consume") {

      let firstIndex = currentCommand[1];
      let secondIndex = currentCommand[2];

      if (meals[firstIndex] != undefined && meals[secondIndex] != undefined) {
        meals.splice(firstIndex, secondIndex - firstIndex + 1);
        console.log("Burp!");

        eatenMeals += secondIndex - firstIndex + 1;
      }

    } else if (currentCommand[0] === "End") {
      break;
    }

  }

  if (meals.length != 0) {
    console.log(`Meals left: ${meals.join(', ')}`);
  } else {
    console.log("The food is gone");
  }

  console.log(`Meals eaten: ${eatenMeals}`);

}

// hungry(['chicken', 'steak', 'eggs'],
// ['Serve',
// 'Eat',
// 'End',
// 'Consume 0 1'])

// hungry(['fries', 'fish', 'beer', 'chicken',
// 'beer', 'eggs'],
// ['Add spaghetti',
// 'Shift 0 1',
// 'Consume 1 4',
// 'End']);

// hungry(['carrots', 'apple', 'beet'], ['Consume 0 2',
//   'End',
// ]);

// hungry(['soup', 'spaghetti', 'eggs'], [
//   'Consume 0 2',
//   'Eat',
//   'Eat',
//   'Shift 0 1',
//   'End',
//   'Eat'
// ])

// hungry(['bacon', 'veggies', 'chicken'],
// ['Add',
// 'End'])

hungry(
  [], [
    'Serve',
    'Eat',
    'Consume 0 0',
    'Add chicken',
    'Add rice',
    'Eat',
    'End'
  ]
);