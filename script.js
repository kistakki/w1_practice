const person = {
firstName: "Petra",
lastName: "Takács",
fullName: function() {
return person.firstName + person.lastName;
}
}
console.log(person.fullName)