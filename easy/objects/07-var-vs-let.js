function createFunctions() {
    const functions = [];

    for (let i = 0; i < 3; i++) {
        functions.push(function () {
            return i;
        });
    }

    return functions;
}

const result = createFunctions();

console.log(result[0]());
console.log(result[1]());
console.log(result[2]());
console.log(result[1]());

