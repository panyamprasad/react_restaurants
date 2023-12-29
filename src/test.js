let objOne = {Prasad:1000, Panyam:25000, Goud:12000}
let objTwo = {Prasad:12000, Panyam:20000, Goud:16000, Jyoshna: 40000}
const merge = (objOne, objTwo) => {
  return {...objOne, ...objTwo};
}
console.log(merge(objOne, objTwo));