function SolveThis(obj) {
    let res = {};

    for (let key in obj) {
        let values = obj[key];

        switch (key) {
            case "sum":
                res[key] = values.reduce((a, b) => a + b, 0);
                break;
            case "max":
                res[key] = Math.max(...values);
                break;
            case "min":
                res[key] = Math.min(...values);
                break;
            case "abs":
                res[key] = Math.abs(values[0]);
                break;
            case "ceil":
                res[key] = Math.ceil(values[0]);
                break;
            case "floor":
                res[key] = Math.floor(values[0]);
                break;
            case "round":
                res[key] = Math.round(values[0]);
                break;
            case "random":
                let min = values[0];
                let max = values[1];
                res[key] = Math.floor(Math.random() * (max - min + 1)) + min;
                break;
            default:
                res[key] = "Operation not supported!";
        }
    }

    return res;
}

console.log(SolveThis({ sum: [3, 2, 4], max: [2, 4, 3, 5], min: [5, 3, 4, 3] }));

console.log(SolveThis({ abs: [-7], ceil: [4.2], floor: [4.9], round: [4.6] }));

console.log(SolveThis({ random: [1, 10] }));
