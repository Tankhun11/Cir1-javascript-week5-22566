//4.Pure Function
//2.b is Side Effect เขียนแล้วไม่ได้ใช้ ขยะะะะะะะะ
const b = 5;

function addpure(a,b) {
    return a+ b
}

//Calling Function
const total = addpure(10,20)
console.log(total)