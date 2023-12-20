const user = {
    name: 'Hưng',
    age: 18,
    address: {
        city: 'Hà Nội',
        nation: 'Việt Nam'
    },
    hobbies: ['playing badminton', 'swimming', 'reading books']
}

// const a = user.hobbies.map((hobby) => {
//     return hobby;
// })

const b = { ...user };

const addHobby = (nameHobby) => {
    if (!b.hobbies.includes(nameHobby)) {
        b.hobbies.push(nameHobby)
        console.log('New array of addHobby: ', b.hobbies);
    }
    else {
        console.log('empty');
    }
}

const removeHobbyFromName = (nameHobby) => {
    let index = b.hobbies.indexOf(nameHobby); //index = 0 , 1, 2 , ... of array
    if (index >= 0) {
        b.hobbies.splice(index, 1);
        console.log('New array of removeHobbyFromName: ', b.hobbies);
    }
}

const removeHobbyFromId = (id) => {
    b.hobbies.splice(id, 1)
    console.log('New array of removeHobbyFromId: ', b.hobbies);
}

const changeCity = (nameCity) => {
    b.address.city = nameCity;
    console.log(b);
}

changeCity('Hồ Chí Minh')
