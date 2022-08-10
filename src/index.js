export const sum = (a, b) => {
    return a + b ;
};

export const sumEr = (a, b) => {
    if(!a || !b) {
        return "The input is incorrect"
    }

    if(typeof(a) !== "number" || typeof(b) !== "number"){
        return "Only numbers are accepted"
    }

    return a + b;
};

export const multiply = (a, b) => {
    return a * b
}
