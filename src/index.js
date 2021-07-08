module.exports = function toReadable(num) {
    let numWord = "";
    let arr = num
        .toString()
        .split("")
        .map((num) => +num);
    let lengthNum = arr.length;

    numWord =
        lengthNum === 1
            ? arr[0] === 0
                ? "zero"
                : `${getUpToTen(arr[lengthNum - 1])}`
            : false;

    if (lengthNum === 2) {
        numWord = twoNumbers(arr);
    }

    if (lengthNum === 3) {
        if (arr[lengthNum - 2] === 0 && arr[lengthNum - 1] === 0) {
            numWord = `${getUpToTen(arr[lengthNum - 3])} ${getBigNumber(0)}`;
        } else if (arr[lengthNum - 2] === 0 && arr[lengthNum - 1] !== 0) {
            numWord = `${getUpToTen(arr[lengthNum - 3])} ${getBigNumber(
                0
            )} ${getUpToTen(arr[lengthNum - 1])}`;
        } else {
            numWord = `${getUpToTen(arr[lengthNum - 3])} ${getBigNumber(
                0
            )} ${twoNumbers(arr.slice(1))}`;
        }
    }

    return numWord;
};

function getUpToTen(n) {
    const arr = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    return arr[n - 1];
}

function getTen(n) {
    const arr = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    return arr[n - 1];
}

function getUpToTwenty(n) {
    const arr = [
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    return arr[n - 1];
}

function getBigNumber(n) {
    const arr = [
        "hundred",
        "million",
        "milliard",
        "billion",
        "billiard",
        "trillion",
        "trilliard",
    ];
    return arr[n];
}

function twoNumbers(arr) {
    let numWord = "";
    if (arr[1] === 0) {
        numWord = `${getTen(arr[0])}`;
    } else if (arr[0] === 1) {
        numWord = `${getUpToTwenty(arr[1])}`;
    } else {
        numWord = `${getTen(arr[0])} ${getUpToTen(arr[1])}`;
    }
    return numWord;
}
