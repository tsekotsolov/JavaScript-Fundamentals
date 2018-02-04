function rest(roomsInput = [], guestsInput = []) {

  let rooms = new Map();
  let orphantGuests = new Set();
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

      let isAccomodated=false;
      for (const [key, value] of rooms) {

        if (value.freeBeds === 2 && value.roomType === 'double-bedded') {

          value.guests.push(firstGuest);
          value.guests.push(secondGuest);
          value.freeBeds = 0;
          isAccomodated=true;
          break;

        } 
      }
      if (!isAccomodated) {
        orphantGuests.add(firstGuest);
          orphantGuests.add(secondGuest);
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

            orphantGuests.add(secondGuest);
            break;

          } else if (value.guests.length === 0) {

            value.guests.push(firstGuest);
            value.guests.push(secondGuest);
            value.freeBeds = 1;
            break;

          }
        }
        else{
          orphantGuests.add(firstGuest);
          orphantGuests.add(secondGuest);
          break;
      };
      }
    }
  }

  for (const guest of orphantGuests) {

let isAccomodated = false;

    for (const [key, value] of rooms) {

     if (value.roomType === 'triple' 
      && value.freeBeds != 0 
      && (value.guests[0]===undefined) ) {
        value.guests.push(guest);
        value.freeBeds--;
        isAccomodated=true;
        break;
      }

      else if(value.roomType === 'triple' 
      && value.freeBeds != 0 
      && (value.guests[0].gender===guest.gender)){
        value.guests.push(guest);
        value.freeBeds--;
        isAccomodated=true;
        break;
      }

    }

    if(!isAccomodated){
      teaHouse.push(guest);
      }
   
  }


  for (const [key, value] of [...rooms].sort()) {
    console.log(`Room number: ${key}`);

    value.guests.sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });

    for (const guest of value.guests) {

      console.log(`--Guest Name: ${guest.name}`);
      console.log(`--Guest Age: ${guest.age}`);
    }
    console.log(`Empty beds in the room: ${value.freeBeds}`);
  }

  console.log(`Guests moved to the tea house: ${teaHouse.length}`);

}

// rest([{
//     number: '206',
//     type: 'double-bedded'
//   },
//   {
//     number: '311',
//     type: 'triple'
//   },

// ], [{
//     first: {
//       name: 'Tanya Popova',
//       gender: 'female',
//       age: 24
//     },
//     second: {
//       name: 'Miglena Yovcheva',
//       gender: 'female',
//       age: 23
//     }
//   },
//   {
//     first: {
//       name: 'Katerina Stefanova',
//       gender: 'female',
//       age: 23
//     },
//     second: {
//       name: 'Angel Nachev',
//       gender: 'male',
//       age: 22
//     }
//   },
//   {
//     first: {
//       name: 'Tatyana Germanova',
//       gender: 'female',
//       age: 23
//     },
//     second: {
//       name: 'Boryana Baeva',
//       gender: 'female',
//       age: 22
//     }
//   }
// ]);

// rest([{
//     number: '101A',
//     type: 'double-bedded'
//   },
//   {
//     number: '104',
//     type: 'triple'
//   },
//   {
//     number: '101B',
//     type: 'double-bedded'
//   },
//   {
//     number: '102',
//     type: 'triple'
//   }
// ], [{
//     first: {
//       name: 'Sushi & Chicken',
//       gender: 'female',
//       age: 15
//     },
//     second: {
//       name: 'Salisa Debelisa',
//       gender: 'female',
//       age: 25
//     }
//   },
//   {
//     first: {
//       name: 'Daenerys Targaryen',
//       gender: 'female',
//       age: 20
//     },
//     second: {
//       name: 'Jeko Snejev',
//       gender: 'male',
//       age: 18
//     }
//   },
//   {
//     first: {
//       name: 'Pesho Goshov',
//       gender: 'male',
//       age: 20
//     },
//     second: {
//       name: 'Gosho Peshov',
//       gender: 'male',
//       age: 18
//     }
//   },
//   {
//     first: {
//       name: 'Conor McGregor',
//       gender: 'male',
//       age: 29
//     },
//     second: {
//       name: 'Floyd Mayweather',
//       gender: 'male',
//       age: 40
//     }
//   }
// ]);


// rest(
// [{"number":"408A","type":"double-bedded"},
// {"number":"405A","type":"double-bedded"}],
// [
// {"first":{"name":"Ora Wilkerson","gender":"female","age":57},"second":{"name":"Melody Gill","gender":"female","age":53}},
// {"first":{"name":"Valerie French","gender":"female","age":68},"second":{"name":"Merle Jenkins","gender":"male","age":62}}]
// )

// rest([{"number":"428","type":"triple"},
// {"number":"161","type":"triple"},
// {"number":"242","type":"double-bedded"},
// {"number":"537","type":"triple"}],
// [
// {"first":{"name":"Nina Diaz","gender":"female","age":29},"second":{"name":"Carol Hansen","gender":"female","age":6}},
// {"first":{"name":"Georgia Thomas","gender":"female","age":38},"second":{"name":"Freddie Harmon","gender":"male","age":46}},
// {"first":{"name":"Freddie Harmon","gender":"male","age":30},"second":{"name":"Jesus Terry","gender":"male","age":64}},
// {"first":{"name":"Tracy Reid","gender":"male","age":41},"second":{"name":"Jordan Garner","gender":"male","age":16}},
// {"first":{"name":"Kara Burns","gender":"female","age":7},"second":{"name":"Marjorie Butler","gender":"female","age":28}}]);


rest([
{"number":"360","type":"double-bedded"},
{"number":"481","type":"triple"},
{"number":"668","type":"double-bedded"},
{"number":"963","type":"double-bedded"},
{"number":"190","type":"double-bedded"},
{"number":"248","type":"triple"},
{"number":"300","type":"double-bedded"},
{"number":"450","type":"double-bedded"},
{"number":"115","type":"triple"},
{"number":"709","type":"double-bedded"},
{"number":"408","type":"double-bedded"},
{"number":"961","type":"double-bedded"},
{"number":"621","type":"triple"},
{"number":"958","type":"triple"},
{"number":"690","type":"triple"},
{"number":"416","type":"triple"},
{"number":"991","type":"double-bedded"},
{"number":"195","type":"triple"},
{"number":"976","type":"double-bedded"},
{"number":"500","type":"triple"},
{"number":"901","type":"double-bedded"},
{"number":"858","type":"triple"},
{"number":"193","type":"triple"},
{"number":"313","type":"triple"},
{"number":"468","type":"double-bedded"},
{"number":"869","type":"double-bedded"}],

[
{"first":{"name":"Valerie French","gender":"female","age":69},"second":{"name":"Rodolfo Howard","gender":"male","age":28}},
{"first":{"name":"Kelly Manning","gender":"female","age":62},"second":{"name":"Micheal Townsend","gender":"male","age":43}},
{"first":{"name":"Rochelle Sandoval","gender":"female","age":22},"second":{"name":"Dave Smith","gender":"male","age":8}},
{"first":{"name":"Dave Smith","gender":"male","age":28},"second":{"name":"Javier Ortega","gender":"male","age":69}},
{"first":{"name":"Tracey Greer","gender":"female","age":38},"second":{"name":"Justin Tran","gender":"male","age":22}},
{"first":{"name":"Claudia Haynes","gender":"female","age":29},"second":{"name":"Horace Thornton","gender":"male","age":48}},
{"first":{"name":"Steven Todd","gender":"male","age":64},"second":{"name":"Marshall Cain","gender":"male","age":37}},
{"first":{"name":"Milton Fleming","gender":"male","age":20},"second":{"name":"Ronnie Floyd","gender":"male","age":41}},
{"first":{"name":"Erica Wood","gender":"female","age":9},"second":{"name":"Matthew Rodriquez","gender":"male","age":61}},
{"first":{"name":"Ora Wilkerson","gender":"female","age":5},"second":{"name":"Lynette Pena","gender":"female","age":28}},
{"first":{"name":"Raquel Johnson","gender":"female","age":9},"second":{"name":"Jim Graham","gender":"male","age":27}},
{"first":{"name":"Esther Valdez","gender":"female","age":12},"second":{"name":"Levi Boyd","gender":"male","age":19}},
{"first":{"name":"Jimmy Jimenez","gender":"male","age":33},"second":{"name":"Troy Payne","gender":"male","age":64}},
{"first":{"name":"Carol Hansen","gender":"female","age":1},"second":{"name":"Velma Chavez","gender":"female","age":29}},
{"first":{"name":"Salvatore Carroll","gender":"male","age":26},"second":{"name":"Clinton Santiago","gender":"male","age":63}},
{"first":{"name":"Katie Fisher","gender":"female","age":69},"second":{"name":"Erin Moreno","gender":"female","age":33}},
{"first":{"name":"Tyrone Hogan","gender":"male","age":59},"second":{"name":"Jim Graham","gender":"male","age":6}},
{"first":{"name":"Julian Phelps","gender":"male","age":51},"second":{"name":"Micheal Townsend","gender":"male","age":44}},
{"first":{"name":"Esther Valdez","gender":"female","age":66},"second":{"name":"Jimmy Jimenez","gender":"male","age":69}},
{"first":{"name":"Jeanette Steele","gender":"female","age":16},"second":{"name":"Sergio Ferguson","gender":"male","age":55}},
{"first":{"name":"Alejandro Lane","gender":"male","age":55},"second":{"name":"Jesus Terry","gender":"male","age":31}},
{"first":{"name":"Lee Rogers","gender":"female","age":62},"second":{"name":"Doreen Sullivan","gender":"female","age":24}},
{"first":{"name":"Beatrice Fleming","gender":"female","age":28},"second":{"name":"Gerard Williams","gender":"male","age":19}},
{"first":{"name":"Jody Harris","gender":"female","age":11},"second":{"name":"Amos Murray","gender":"male","age":34}},
{"first":{"name":"Anne Richardson","gender":"female","age":39},"second":{"name":"Darnell Mack","gender":"male","age":44}},
{"first":{"name":"Dianne Harrington","gender":"female","age":1},"second":{"name":"Sheri Sparks","gender":"female","age":62}},
{"first":{"name":"Jamie Chambers","gender":"female","age":6},"second":{"name":"Merle Jenkins","gender":"male","age":15}},
{"first":{"name":"Connie Swanson","gender":"female","age":23},"second":{"name":"Ida Wolfe","gender":"female","age":28}},
{"first":{"name":"Esther Valdez","gender":"female","age":58},"second":{"name":"Terence Fox","gender":"male","age":46}},
{"first":{"name":"Alexis Graham","gender":"female","age":47},"second":{"name":"Janis Franklin","gender":"female","age":12}},
{"first":{"name":"Armando Cortez","gender":"male","age":62},"second":{"name":"Sergio Ferguson","gender":"male","age":67}},
{"first":{"name":"Mathew Soto","gender":"male","age":42},"second":{"name":"Alejandro Lane","gender":"male","age":30}},
{"first":{"name":"Elizabeth Huff","gender":"female","age":40},"second":{"name":"Beth Foster","gender":"female","age":65}},
{"first":{"name":"Rudy Mason","gender":"male","age":63},"second":{"name":"Ellis Parsons","gender":"male","age":67}},
{"first":{"name":"Dave Smith","gender":"male","age":16},"second":{"name":"Malcolm Bishop","gender":"male","age":44}},
{"first":{"name":"Beth Foster","gender":"female","age":63},"second":{"name":"Lorene Thompson","gender":"female","age":50}},
{"first":{"name":"Rodney Saunders","gender":"male","age":56},"second":{"name":"Tracy Reid","gender":"male","age":66}},
{"first":{"name":"Lauren Padilla","gender":"female","age":28},"second":{"name":"Melody Gill","gender":"female","age":23}}]);