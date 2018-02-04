function rest(roomsInput = [], guestsInput = []) {

  let rooms = new Map();
  let orphantGuests = [];
  let teaHouse = [];

  for (let i = 0; i < roomsInput.length; i++) {
    let roomNumber = roomsInput[i].number;
    let roomType = roomsInput[i].type;

    if (roomType === 'double-bedded') {
      rooms.set(roomNumber, {
        roomType: 'double-bedded',
        freeBeds: 2,
        guests: []
      })
    } else {
      rooms.set(roomNumber, {
        roomType: 'triple',
        freeBeds: 3,
        guests: []

      })
    }
  }

  for (let i = 0; i < guestsInput.length; i++) {

    let firstGuest = guestsInput[i].first;
    let secondGuest = guestsInput[i].second;

    if (firstGuest.gender != secondGuest.gender) {
      for (const [key, value] of rooms) {

        if (value.freeBeds === 2 && value.roomType === 'double-bedded') {

          value.guests.push(firstGuest);
          value.guests.push(secondGuest);
          value.freeBeds = 0;
          break;

        } else {
          orphantGuests.push(firstGuest);
          orphantGuests.push(secondGuest);
          break;
        }
      }

    } else if (firstGuest.gender == secondGuest.gender) {
      for (const [key, value] of rooms) {

        if (value.freeBeds > 0 && value.roomType === 'triple') {

          if (value.guests.length === 1 && value.guests[0].gender === firstGuest.gender) {
            value.guests.push(firstGuest);
            value.guests.push(secondGuest);
            value.freeBeds = 0;
            break;

          } else if (value.guests.length === 2 && value.guests[0].gender === firstGuest.gender) {
            value.guests.push(firstGuest);
            value.freeBeds = 0;

            orphantGuests.push(secondGuest);
            break;

          } else if (value.guests.length === 0) {

            value.guests.push(firstGuest);
            value.guests.push(secondGuest);
            value.freeBeds = 1;
            break;

          }
        }
      }
    }
  }

  for (const guest of orphantGuests) {

    for (const [key, value] of rooms) {

      if (value.roomType === 'triple' &&
        value.freeBeds != 0 &&
        value.guests[0].gender === guest.gender) {

        value.guests.push(guest);
        value.freeBeds=value.freeBeds-1;
        break;
      } else {
        teaHouse.push(guest);
        break;
      }

    }

  }


  rooms = new Map([...rooms].sort((a, b) => {
    return a[0].localeCompare(b[0]);

  }))

  for (const [key, value] of rooms) {
    console.log(`Room number: ${key}`);

    value.guests.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });

    for (const guest of value.guests) {

      console.log(`--Guest Name: ${guest.name}`);
      console.log(`--Guest Age: ${guest.age}`);
    }
    console.log(`Empty beds in the room: ${value.freeBeds}`);
  }

  console.log(`Guests moved to the tea house: ${teaHouse.length}`);
}

rest([{
    number: '206',
    type: 'double-bedded'
  },
  {
    number: '311',
    type: 'triple'
  },

], [{
    first: {
      name: 'Tanya Popova',
      gender: 'female',
      age: 24
    },
    second: {
      name: 'Miglena Yovcheva',
      gender: 'female',
      age: 23
    }
  },
  {
    first: {
      name: 'Katerina Stefanova',
      gender: 'female',
      age: 23
    },
    second: {
      name: 'Angel Nachev',
      gender: 'male',
      age: 22
    }
  },
  {
    first: {
      name: 'Tatyana Germanova',
      gender: 'female',
      age: 23
    },
    second: {
      name: 'Boryana Baeva',
      gender: 'female',
      age: 22
    }
  }
]);

rest([{
    number: '101A',
    type: 'double-bedded'
  },
  {
    number: '104',
    type: 'triple'
  },
  {
    number: '101B',
    type: 'double-bedded'
  },
  {
    number: '102',
    type: 'triple'
  }
], [{
    first: {
      name: 'Sushi & Chicken',
      gender: 'female',
      age: 15
    },
    second: {
      name: 'Salisa Debelisa',
      gender: 'female',
      age: 25
    }
  },
  {
    first: {
      name: 'Daenerys Targaryen',
      gender: 'female',
      age: 20
    },
    second: {
      name: 'Jeko Snejev',
      gender: 'male',
      age: 18
    }
  },
  {
    first: {
      name: 'Pesho Goshov',
      gender: 'male',
      age: 20
    },
    second: {
      name: 'Gosho Peshov',
      gender: 'male',
      age: 18
    }
  },
  {
    first: {
      name: 'Conor McGregor',
      gender: 'male',
      age: 29
    },
    second: {
      name: 'Floyd Mayweather',
      gender: 'male',
      age: 40
    }
  }
]);