exports.min = function min(array) {
    let minN = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        for (let i of array) {
            minN = Math.min(i, minN)
        }
        return minN;
    }
}

exports.max = function max(array) {
    let maxN = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        for (let i of array) {
            maxN = Math.max(i, maxN)
        }
        return maxN;
    }
}

exports.avg = function avg(array) {
    let sumAll = 0;
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
        for (let i of array) {
            sumAll = sumAll + i;
        }
        return (sumAll / array.length);
    }
}