// #1

function ReplacewithBig(arr) {
    for (var i=0;i<arr.length;i++) {
        if (arr[i]>0) {
            arr[i]='big';
        }
    }
    console.log(arr);
}

// #2

function PrintLowReturnHigh(arr) {
    var max=arr[0];
    var min=arr[0];
    for (var i=1;i<arr.length;i++) {
        if (arr[i]>max) {
            max = arr[i];
        }
        if (arr[i]<min) {
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

// #3

function PrintOneReturnAnother(arr) {
    console.log(arr[arr.length-2]);
    for (var i=0;i<arr.length;i++) {
        if (arr[i]%2 !=0) {
            return arr[i];
        }
    }
}

// #4

function DoubleArray(arr) {
    var ArrayDouble = [];
    for (var i=0;i<arr.length;i++) {
        ArrayDouble.push(arr[i]*2);
    }
    return ArrayDouble;
}

// #5

function ReturnPositives(arr) {
    var count=0;
    for (var i=0;i<arr.length;i++) {
        if (arr[i] >0) {
            count=count+1;
        }
    }
    arr[arr.length-1] = count;
    return arr;
}

// #6

function EvensandOdds(arr) {
    var OddCount = 0;
    var EvenCount = 0;
    for (var i=0;i<arr.length;i++) {
        if (arr[i]%2===0) {
            OddCount = 0;
            EvenCount = EvenCount +1;
            if (EvenCount===3) {
                console.log("Even more so!");
                EvenCount = 0;
            }
        } else {
            EvenCount = 0;
            OddCount = OddCount +1;
            if (OddCount===3) {
                console.log("That's odd!");
                OddCount=0;
            }
        }
    }
}

// #7

function IncrementSeconds(arr) {
    for (var i=0;i<arr.length;i++) {
        if (i%2!=0) {
            arr[i]=arr[i]+1;
        }
        console.log(arr[i]);
    }
    return arr;
}

// #8

function PreviousLengths(arr) {
    for (var i=arr.length-1;i>0;i--) {
        arr[i] = arr[i-1].length;
    }
    return arr;
}

// #9

function AddSeven(arr) {
    var NewArray = [];
    for (var i=0;i<arr.length;i++) {
        NewArray.push(arr[i]+7);
    }
    return NewArray;
}

// #10

function ReverseArray(arr) {
    for (var i=0;i<arr.length/2;i++) {
        var temp = arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}

// #11

function ReturnNegative(arr) {
    for (var i=0;i<arr.length;i++) {
        arr[i]=Math.abs(arr[i])*-1;
    }
    return arr;
}

// #12

function AlwaysHungry(arr) {
    var food = 0;
    for (var i=0;i<arr.length;i++) {
        if (arr[i] === 'food') {
            console.log('yummy');
            food = food+1;
        }
    }
    if (food === 0) {
        console.log("I'm hungry");
    }
}


// #13

function SwaptoCenter(arr) {
    for (var i=0;i<arr.length/2;i++) {
        if (i%2===0) {
            var temp = arr[i];
            arr[i]=arr[arr.length-1-i];
            arr[arr.length-1-i]=temp;
        }
    }
    return arr;
}

// #14

function ScaleArray(arr,num) {
    for (var i=0;i<arr.length;i++) {
        arr[i]=arr[i]*num;
    }
    return arr;
}