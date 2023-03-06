let arr = [{
    id: 1,
    name: "Aman"
}, {
    id: 2,
    name: "Priya"
},
{
    id: 3,
    name: "Urvashi"
},
{
    id: 4,
    name: "Jay"
},
{
    id: 5,
    name: "Aman"
},
{
    id: 6,
    name: "Roshni"
},
{
    id: 7,
    name: "Nikita"
},
{
    id: 7,
    name: "Shiv"
},
{
    id: 8,
    name: "Teena"
},
{
    id: 9,
    name: "Roshni"
},
{
    id: 10,
    name: "Preeti"
}];

//Q:1    Fetch unique users by descending order (descending order by name).
const unique = [...new Set(arr.map(item => item.name))];
unique.sort() //sorting the alphabetical order
unique.reverse()// reverse that sorting.
console.log(unique)


// unique name with id
const key = 'name';
const arrayUniqueByName = [...new Set(arr.map(item =>
  [item[key], item])).values()];
arrayUniqueByName.sort()
arrayUniqueByName.reverse()
console.log(arrayUniqueByName);


//Q 2    fetch particular user by id.
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])//  iterating particular user.
// }

//Q 2    fetch particular user by id.
const arrOfobject = arr.find(obj => obj.id === 3);
console.log(arrOfobject)





