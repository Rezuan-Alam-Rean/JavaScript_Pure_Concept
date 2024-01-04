


function cubeNumber(number) {
    if (typeof number !== "number") {
        return "give me a number";
    }
    result = number * number * number;
    return result;

}




function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return " give strings as a inputs.";
    }

    if (string1.includes(string2)) {
        return true;
    } else {
        return false;
    }
}



function sortMaker(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number' || arr[i] < 0) {
            return "Invalid Input";
        }
    }

    if (arr[0] === arr[1]) {
        return "equal";
    }

    if (arr[0] > arr[1]) {
        return [arr[0], arr[1]];
    } else {
        return [arr[1], arr[0]];
    }

}



function findAddress(obj) {
    let result = "";

    if (obj.street) {
        result += obj.street;
    } else {
        result += "__";
    }

    if (obj.house) {
        result += "," + obj.house;
    } else {
        result += "," + "__";
    }

    if (obj.society) {
        result += "," + obj.society;
    } else {
        result += "," + "__";
    }

    return result;

}



function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "give some  values of array to calculate you money for buy a chips ";
    }

    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sum += changeArray[i];
    }

    if (sum >= totalDue) {
        return true;
    } else {
        return false;
    }

}




