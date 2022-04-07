function except(array,excluded){
    const result=[]
    for(let element of array){
        if(!excluded.includes(element)){
            result.push(element)
        }
    }
    return result
}
console.log(except([1,2,3,4,5,6,7,8,9,10], [2,4,6,8]))