function election(input = []) {

  let ballot = new Map();
  let candidates = new Map();

  for (const line of input) {
    if (!candidates.has(line.candidate)) {
      candidates.set(line.candidate, new Map());
    }
    if (!ballot.has(line.system)) {
      ballot.set(line.system, new Map());
    }
    if (!ballot.get(line.system).has(line.candidate)) {
      ballot.get(line.system).set(line.candidate, 0);
    }
    let currentVotes = ballot.get(line.system).get(line.candidate);

    ballot.get(line.system).set(line.candidate, line.votes = currentVotes + line.votes)
  }

  let sortedBallot = new Map()

  for (let [key, value] of ballot) {
    value = new Map([...value].sort((a, b) => {
      return b[1] - a[1];
    }))

    sortedBallot.set(key, value);
  }

  let sortedReducedBallot = new Map();
  let totalVotes = 0;

  for (let [key, value] of sortedBallot) {
    let votesPerSystem = 0
    for (const vote of value) {

      votesPerSystem += vote[1];
    }
    totalVotes += votesPerSystem;
    sortedReducedBallot.set(key, new Map());
    sortedReducedBallot.get(key).set([...value][0][0], votesPerSystem);
  }

  for (const [sys, winner] of sortedReducedBallot) {

    let candidate = [...winner][0][0];
    let vote = [...winner][0][1];
    let system = sys;

    if (!candidates.get(candidate).has(system)) {
      candidates.get(candidate).set(system, 0);
    }

    cuurentVote = candidates.get(candidate).get(system)
    candidates.get(candidate).set(system, vote = cuurentVote + vote);
  }

  let sortedCandidates = new Map();

  for (let [key, value] of candidates) {

    value = new Map([...value].sort((a, b) => {
      return b[1] - a[1];
    }))

    sortedCandidates.set(key, value);
  }

  let winners = new Map();

  for (let [key, value] of sortedCandidates) {
    let votesPerSystem = 0
    for (const vote of value) {

      votesPerSystem += vote[1];
    }
    winners.set(key, votesPerSystem);
  }

  winners = new Map([...winners].sort((a, b) => {
    return b[1] - a[1]
  }))

  if ([...winners][0][1] > totalVotes / 2 && [...winners][0][1] != totalVotes) {
    console.log(`${[...winners][0][0]} wins with ${[...winners][0][1]} votes`);

    console.log(`Runner up: ${[...winners][1][0]}`);

    for (const candidate of sortedCandidates) {
      if (candidate[0] === [...winners][1][0]) {

        for (const system of candidate[1]) {
          console.log(`${system[0]}: ${system[1]}`);
        }
      }
    }
  } else if ([...winners][0][1] === totalVotes) {

    console.log(`${[...winners][0][0]} wins with ${[...winners][0][1]} votes`);
    console.log(`${[...winners][0][0]} wins unopposed! `);
  } else {
    console.log(`Runoff between ${[...winners][0][0]} with ${Math.floor([...winners][0][1]/totalVotes *100)}% and ${[...winners][1][0]} with ${Math.floor([...winners][1][1]/totalVotes *100)}%`);
  }

}
// election([{
//     system: 'Theta',
//     candidate: 'Flying Shrimp',
//     votes: 10
//   },
//   {
//     system: 'Sigma',
//     candidate: 'Space Cow',
//     votes: 200
//   },
//   {
//     system: 'Sigma',
//     candidate: 'Flying Shrimp',
//     votes: 120
//   },
//   {
//     system: 'Tau',
//     candidate: 'Space Cow',
//     votes: 15
//   },
//   {
//     system: 'Sigma',
//     candidate: 'Space Cow',
//     votes: 60
//   },
//   {
//     system: 'Tau',
//     candidate: 'Flying Shrimp',
//     votes: 150
//   }
// ])

// election(
//   [ { system: 'Theta', candidate: 'Kim Jong Andromeda', votes: 10 },
//   { system: 'Tau',   candidate: 'Kim Jong Andromeda', votes: 200 },
//   { system: 'Tau',   candidate: 'Flying Shrimp',      votes: 150 } ]
// );

election([{
    system: 'Tau',
    candidate: 'Flying Shrimp',
    votes: 150
  },
  {
    system: 'Tau',
    candidate: 'Space Cow',
    votes: 100
  },
  {
    system: 'Theta',
    candidate: 'Space Cow',
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
    votes: 75
  },
  {
    system: 'Omicron',
    candidate: 'Flying Shrimp',
    votes: 50
  },
  {
    system: 'Omicron',
    candidate: 'Octocat',
    votes: 75
  }
]);