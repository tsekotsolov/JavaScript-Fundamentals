function rest(roomsInput=[],guestsInput=[]){

  let rooms = new Map();

  for (let i = 0; i < roomsInput.length; i++) {
    let roomNumber = roomsInput[i].number;
    let roomType = roomsInput[i].type;

    if (roomType==='double-bedded') {
      rooms.set(roomNumber,{roomType:'double-bedded',freeBeds:2})
    }
    else{
      rooms.set(roomNumber,{roomType:'triple',freeBeds:3})
    }
  }

  console.log(rooms);

}

rest([ { number: '206', type: 'double-bedded' },
{ number: '311', type: 'triple' } ],
[ { first: { name: 'Tanya Popova', gender: 'female', age: 24 },
second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 } },
{ first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
second: { name: 'Angel Nachev', gender: 'male', age: 22 } },
{ first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
second: { name: 'Boryana Baeva', gender: 'female', age: 22 } } ]);

