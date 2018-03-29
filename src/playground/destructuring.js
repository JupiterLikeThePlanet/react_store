// console.log("destructuring")

///// Destructuring Hashes

const person = {
    // name: 'Jupiter',
    age: 33,
    location: {
        city: "Los Angeles",
        temp: "82"
    }
}

// console.log(`${person.name} is ${person.age}` )

// name is set to a default value if it doesn't exist
// const {name = "Anonymous", age} = person
const {name: firstname = "Anonymous", age} = person


console.log(`${firstname} is ${age}.` )


const {city, temp : temperature} = person.location

if( city && temperature) {
    console.log(`${city} is ${temperature} degrees.` )
}



const book = {
    title: 'Confederacy of Dunces',
    author: 'John Kennedy Toole',
    publisher: {
        name: 'Penguin'
    }
}


// console.log(publisherName); // Penguin || Self Published


const {title, author} = book

const {name: publisherName = 'Self Published'} = book.publisher


if (publisherName) {
    console.log(publisherName); // Penguin || Self Published
}




//////// Destructuring Array

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']

const [order = 'Coffee', , medium_price = '$1.00'] = item

console.log(`A medium ${order} costs ${medium_price}`)


// console.log(`A medium Coffee (hot) costs $2.50`)