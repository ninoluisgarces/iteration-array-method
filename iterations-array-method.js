let personData = [
    {
        "name":"Lebron James",
        "age": 36,
        "gender": "Male",
        "contact": "121231231",
        "adress": "miami florida",
        "email": "LebronJames@gmail.com"
    },
    {
        "name":"Kobe Bryant",
        "age": 42,
        "gender": "Male",
        "contact": "23423412312",
        "adress": "Los angeles lakers",
        "email": "kobe24@yahoo.com"
    },
    {
        "name":"Trae Young",
        "age": 22,
        "gender": "Male",
        "contact": "01239151231",
        "adress": "Atlanta Usa",
        "email": "Icetrae@yahoo.com"
    },
    {
        "name":"Luka Dondich",
        "age": 21,
        "gender": "Male",
        "contact": "001283123",
        "adress": "dallas",
        "email": "luka@yahoo.com"
    },
    {
        "name":"bismack biyombo",
        "age": 30,
        "gender": "Male",
        "contact": "2901231231",
        "adress": "dallas",
        "email": "bismack@gmail.com"
    },
    {
        "name":"Kevin Garnett",
        "age": 35,
        "gender": "Male",
        "contact": "1823123151",
        "adress": "Boston",
        "email": "kevingarnet@gmail.com"
    },
    {
        "name":"lamarcus aldridge",
        "age": 35,
        "gender": "Male",
        "contact": "012931251",
        "adress": "san antonio",
        "email": "LA24@gmail.com"
    },
    {
        "name":"rudy gay",
        "age": 28,
        "gender": "Female",
        "contact": "12315412131",
        "adress": " san antonio",
        "email": "rudygay@gmail.com"
    },
    {
        "name":"Manny Pacquiao",
        "age": 42,
        "gender": "Male",
        "contact": "03123154123",
        "adress": "Gensan, Philippines",
        "email": "pacman@gmail.com"
    },
    {
        "name":"Allen iverson",
        "age": 40,
        "gender": "Male",
        "contact": "123125123",
        "adress": "newyork",
        "email": "AI24@gmail.com"
    },
]

//for method
for(let x = 0; x < personData.length; x++){
     //console.log(personData[x]);
}

//single object for for in method
let singleperson = {
        "name":"polka mae",
        "age": 19,
        "gender": "Female",
        "contact": "231312412",
        "adress": "kolbe 123",
        "email": "polkamae@gmail.com"
}
//for in method
for (let x in singleperson) {
    //print property and its value
    // console.log(`${x}: ${singleperson[x]}`);
}

//for of method
for (let x of personData) {
    // console.log(x)
}

//while method
let x = 0;
while (x < personData.length) {
    // console.log(personData[x])
    x++;
}

//for each method
personData.forEach(function (val, index){
    //print all data
    // console.log(val)
    //print indexes and its name
    // console.log(`${index}: ${val.name}`);
});

//filter() method
//print person age is less than or equal to 25
let personAge25 = personData.filter(function(data){return data.age <= 25})
// console.log(personAge25)

//print female gender
let personFemale = personData.filter(function(data){return data.gender == "Female"})
 console.log(personFemale)

//map() method
//get the person name and their contact numbers
let personMapped = personData.map(function(data){return `${data.name} : ${data.contact}`})
// console.log(personMapped)

//reduce() method
//sum age
let sumAge = personData.reduce(function(accumulate, data){return accumulate + data.age}, 0)
// console.log(sumAge)
