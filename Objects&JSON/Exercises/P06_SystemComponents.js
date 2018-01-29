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
  
  register = new Map([...register].sort((x, y) =>{ 
    
    if ([...y[1]].length===[...x[1]].length) {
      
      if (x[0] > y[0]) {
        return 1
      }
      if (x[0] < y[0]) {
        return -1
      }
      return 0
    }
    return [...x[1]].length > [...y[1]].length ? -1 : 1
  }));

  for (const [component, subComponents] of register) {
    register.set(component, new Map([...subComponents].sort((x, y) => [...y[1]].length - [...x[1]].length)))
  }
  
  for (const [system, components] of register) {
    console.log(system)
    for (const [component, subComponents] of components) {
      console.log(`|||${component}`)
      for (const subComponent of subComponents) {
        console.log(`||||||${subComponent}`)
      }
    }
  }

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