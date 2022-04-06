const adress={
    street: 'abc',
    city: 'def', 
    zipCode: 'xyz',
    
}
// factory function
function createAdress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    }
}
//costractor function
function Adress(street, city, zipCode){
    this.street=street;
    this.city=city;
    this.zipCode=zipCode;
}
//Blog Post 
const post = {
    title: 'a',
    body: 'b',
    views:10,
    comments: [
        {author: 'a',body: 'b'},
    ],
    isLive: true
}