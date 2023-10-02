let x = 10
let y = "text"
let z = true

let arr = ["one", "two", "three", "four"]
let arr2 = [10, 5, 67, 234]
let arr3 = ["text", 67, false, null]

let newArr = [x,y,z]

//console.log(newArr)

let obj = {
    key: "value",
    key2: 20,
    key3: false,
    key4: ['egy', "kettő"," három"],
    key5: {
        nestedKey: 'nested value'
    }
}

let jsonExample = [
{
   name: "Gipsz Jakab",
   age: 40,
   "hair-count": 10
},
{
    name: "Példa Péter",
    age: 28
},
{
    name : "John Doe",
    age: 6
}
]

console.log(jsonExample[0]["hair-count"])
