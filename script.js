function pairwise(arr, arg) {
    var counter = 0;
    console.log(arr);

    for (var i = 0; i < arr.length && j != i; i++) {
        for (var j = 1; j < arr.length && j!=i; j++) {
            if (arr[i] + arr[j] === arg) {
                counter += i + j;
                arr[i] = undefined;
                arr[j] = undefined;
            }
        }
    }

    console.log("sum: " + counter);
    return counter;
}

pairwise([1, 4, 2, 3, 0, 5], 7); // should return 11.
pairwise([1, 3, 2, 4], 4) // should return 1.
pairwise([1, 1, 1], 2) //should return 1.
pairwise([0, 0, 0, 0, 1, 1], 1) //should return 10.
pairwise([], 100) //should return 0.
