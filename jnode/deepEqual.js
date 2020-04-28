function isPresent(keys2, key1) {
    for (let j = 0; j < keys2.length; j++) {
        if (keys2[j] === key1) {
            return keys2[j]
        }
    }
    return null
}


function deepEqual(ob1, ob2){
    if (ob1 === null && ob2 === null){
        return true
    } else if ((ob1 === null && ob2 != null) || (ob1 != null && ob2 === null)){
        return false
    } else {
        if (typeof ob1 != "object" && typeof ob2 != "object"){
            if (typeof ob1 === typeof ob2){
                if (ob1 === ob2){
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        } else if (typeof ob1 === "object" && typeof ob2 === "object"){
            const keys1 = Object.keys(ob1)
            const keys2 = Object.keys(ob2)
            // console.log(keys1)
            // console.log(keys2)
            if (keys1.length != keys2.length){
                return false
            } else {
                for (let i = 0; i < keys1.length; i++){
                    const key1 = keys1[i]
                    const key2 = isPresent(keys2, key1)
                    if (key2 === null) {
                        return false
                    } else {
                        if (typeof key1 === typeof key2) {
                            // console.log(ob1[key1])
                            // console.log(ob2[key2])
                            if (!(deepEqual(ob1[key1], ob2[key2]))) {
                                return false
                            }        
                        }
                    }
                }
                return true
            }
        } else {
            return false
        }
    }    
}



const str = "ABCD"
const str1 = "ABCD"
const str2 = "ABC"

const o1 = {
    b: "b",
    a: "a", 
    c: {
        d: "d",
    }
}


const o2 = {
    a: "a",
    b: "b",
    c: {
        d: "d"
    }
}

console.log(deepEqual(str, str1))
console.log(deepEqual(str, o1))
console.log(deepEqual(o2, o1))
console.log(deepEqual(str, str2))