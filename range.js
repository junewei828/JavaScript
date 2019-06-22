function range(start, end) {
    new_arr = []
    for (i = start; i <= end; i += 1) {
        new_arr.push(i)
    }
    console.log(new_arr)
}

 range(1,4) //=> [1,2,3,4]
 range(4,2) //=> []