
// #1

function Return1to255() {
    for (var i=1; i<=255; i++) {
        console.log(i);
    }
}


// #2

function GetEven1000() {
    var sum = 0;
    for (var i=1; i<=1000; i++) {
        if (i%2===0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}

// #3

function SumOdd5000() {
    var sum = 0;
    for (var i=1; i<=5000; i++) {
        if (i%2 != 0) {
            sum = sum + i;
        }
    }
    console.log(sum);
}

// #4

function SumofArray(arr) {
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}

// #5

function FindMax(arr) {
    var max = arr[0];
    for (var i = 1;i<arr.length;i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(max);
}

// #6

function FindAvg(arr) {
    var sum = 0;
    for (var i=0;i<arr.length;i++) {
        sum=sum+arr[i];
    }
    var avg = sum/arr.length;
    console.log(avg);
}

// #7

function ArrayOdd() {
    var OddArr = [];
    for (var i=1;i<=50;i+=2) {
        OddArr.push(i);
    }
    console.log(OddArr);
}

// #8

function GreaterthanY(arr, y) {
    var count = 0;
    for (var i=0;i<arr.length;i++) {
        if (arr[i] > y) {
            count = count +1;
        }
    }
    console.log(count);
}

// #9

function FindSquares(arr) {
    for (var i=0;i<arr.length;i++) {
        arr[i] = arr[i]*arr[i];
    }
    console.log(arr);
}

// #10

function ReplaceNegatives(arr) {
    for (var i=0;i<arr.length;i++) {
        if (arr[i]<0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}

// #11

function FindMinMaxAvg(arr) {
    var newArr = [];
    var max = arr[0];
    var min = arr[0];
    var sum = arr[0];
    for (var i=1;i<arr.length;i++) {
        if (arr[i]>max) {
            max = arr[i];
        }
        if (arr[i]<min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    newArr.push(max);
    newArr.push(min);
    newArr.push(sum/arr.length);
    return newArr;
}

// #12

function SwapValues(arr) {
    var temp = arr[0];
    arr[0]=arr[arr.length-1];
    arr[arr.length-1]=temp;
    console.log(arr);
}

// #13

function NumtoString(arr) {
    for (var i=0;i<arr.length;i++) {
        if (arr[i]<0) {
            arr[i]='Dojo';
        }
    }
    console.log(arr);
}