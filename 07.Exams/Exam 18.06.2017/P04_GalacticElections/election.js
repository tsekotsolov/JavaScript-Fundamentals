function election(input = []) {

  let resultsByGalaxy = new Map();

  for (const line of input) {

    if (!resultsByGalaxy.has(line.system)) {
      resultsByGalaxy.set(line.system, new Map());
    }

    if (!resultsByGalaxy.get(line.system).has(line.candidate)) {
      resultsByGalaxy.get(line.system).set(line.candidate, 0);
    }
    let currentVotes = resultsByGalaxy.get(line.system).get(line.candidate);

    resultsByGalaxy.get(line.system).set(line.candidate, line.votes = currentVotes + line.votes)
  }

  let sortedBallot = new Map()

  for (let [key, value] of resultsByGalaxy) {
    value = new Map([...value].sort((a, b) => {
      return b[1] - a[1];
    }))

    sortedBallot.set(key, value);
  }

  console.log(resultsByGalaxy);
  console.log(sortedBallot);

}

election([{
    system: 'Theta',
    candidate: 'Flying Shrimp',
    votes: 10
  },
  {
    system: 'Sigma',
    candidate: 'Space Cow',
    votes: 200
  },
  {
    system: 'Sigma',
    candidate: 'Flying Shrimp',
    votes: 120
  },
  {
    system: 'Tau',
    candidate: 'Space Cow',
    votes: 15
  },
  {
    system: 'Sigma',
    candidate: 'Space Cow',
    votes: 60
  },
  {
    system: 'Tau',
    candidate: 'Flying Shrimp',
    votes: 150
  }
])