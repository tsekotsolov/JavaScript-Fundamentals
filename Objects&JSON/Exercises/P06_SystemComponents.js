function sysComponents(input = []) {

  let register = new Map();

  for (const line of input) {

    let [name, component, subComponent] = line.split(' | ');

    if (!register.has(name)) {
      register.set(name, new Map());
    }

    if (!register.get(name).has(component)) {
      register.get(name).set(component, new Set())
    }
    register.get(name).get(component).add(subComponent);

  }
  console.log(register);

}

sysComponents(
  [
    `SULS | Main Site | Home Page`,
    `SULS | Main Site | Login Page`,
    `SULS | Main Site | Register Page`,
    `SULS | Judge Site | Login Page`,
    `SULS | Judge Site | Submittion Page`,
    `Lambda | CoreA | A23`,
    `SULS | Digital Site | Login Page`,
    `Lambda | CoreB | B24`,
    `Lambda | CoreA | A24`,
    `Lambda | CoreA | A25`,
    `Lambda | CoreC | C4`,
    `Indice | Session | Default Storage`,
    `Indice | Session | Default Security`,
  ])