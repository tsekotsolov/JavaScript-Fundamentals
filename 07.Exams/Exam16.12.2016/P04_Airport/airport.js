function airport(input = []) {

  let planesAtAirport = new Set();
  let citiesByPlanes = new Map();
  let citiesByPassangers = new Map();

  for (const plane of input) {

    let [planeID, city, passangersCount, action] = plane.split(' ');

    if (action === 'land') {
      if (!planesAtAirport.has(planeID)) {
        planesAtAirport.add(planeID);

        if (!citiesByPlanes.has(city)) {
          citiesByPlanes.set(city, new Set())
        }
        if (!citiesByPlanes.get(city).has(planeID)) {
          citiesByPlanes.get(city).add(planeID);
        }

        if (!citiesByPassangers.has(city)) {
          citiesByPassangers.set(city, {
            Arrivals: 0,
            Departures: 0
          })
        }

        currentArrivals = citiesByPassangers.get(city).Arrivals;

        citiesByPassangers.get(city).Arrivals = currentArrivals + Number(passangersCount);

      } else {
        continue;
      }

    }
    if (action === "depart") {

      if (planesAtAirport.has(planeID)) {
        planesAtAirport.delete(planeID)

        if (!citiesByPlanes.has(city)) {
          citiesByPlanes.set(city, new Set())
        }
        if (!citiesByPlanes.get(city).has(planeID)) {
          citiesByPlanes.get(city).add(planeID);
        }

        if (!citiesByPassangers.has(city)) {
          citiesByPassangers.set(city, {
            Arrivals: 0,
            Departures: 0
          })
        }

        currentDepartures = citiesByPassangers.get(city).Departures;

        citiesByPassangers.get(city).Departures = currentDepartures + Number(passangersCount);

      }

    } else {
      continue;
    }

  }

  planesAtAirport = new Set([...planesAtAirport].sort((a, b) => {
    return a.localeCompare(b);
  }))

  let sortedCitiesByPlanes = new Map();

  for (let [key, value] of citiesByPlanes) {

    value = new Set([...value].sort((a, b) => {
      return a.localeCompare(b);
    }))
    sortedCitiesByPlanes.set(key, value)
  }

  console.log("Planes left:");
  for (const plane of planesAtAirport) {
    console.log(`- ${plane}`);
  }

  

 citiesByPassangers = new Map([...citiesByPassangers].sort((a, b) => {

       if (b[1].Arrivals===a[1].Arrivals) {
         return a[0].localeCompare(b[0]);
       }
    return b[1].Arrivals - a[1].Arrivals;
  }))

  for (const [city,passengers] of citiesByPassangers ) {
    
    console.log(city);
    console.log(`Arrivals: ${passengers.Arrivals}`);
    console.log(`Departures: ${passengers.Departures}`);
    for (const [town,planes] of sortedCitiesByPlanes) {
      if (city===town) {
          console.log("Planes:");
          for (const plane of planes) {
            console.log(`-- ${plane}`);
          }
      }
    }
  }

}

// airport(["Boeing474 Madrid 300 land",
//   "AirForceOne WashingtonDC 178 land",
//   "Airbus London 265 depart",
//   "ATR72 WashingtonDC 272 land",
//   "ATR72 Madrid 135 depart",
// ]);

airport([ "Airbus Paris 356 land",
"Airbus London 321 land", "Airbus Paris 213 depart", "Airbus Ljubljana 250 land"
]);