var text = prompt('Enter your text...').toLowerCase();

var arr = ['Ford mustang', 'Dodge chalanger', 'BMW', 'Mercedes', 'Porche', 'Bugatti', 'Koenigsegg', 'GM shit'];

if(text === 'length'){
    console.log(arr.length);
}
else if(text === 'tostring'){
    console.log(arr.toString());
}
else if(text === 'at'){
    var index = +prompt('Enter number till 7');
    if(index >= 0 && index <= 7){
        console.log(arr[index]);
    }
    else{
        console.log("You did something wrong((");
    }
}
else if(text === 'join'){
    var index = prompt('Enter the index');
    console.log(arr.join(index));
}
else if(text === 'pop'){
    console.log(arr.pop());
}
else if(text === 'push'){
    var pushText = prompt("enter only string");
    arr.push(pushText);
    console.log(arr);
}
else if(text === 'shift'){
    console.log(arr);
    arr.shift();
    console.log(arr);
}
else if(text === 'unshift'){
    console.log(arr);
    arr.unshift();
    console.log(arr);
}
else if(text === 'concat'){
    var arrTwo = prompt('enter your string').split(' ');
    console.log(arr.concat(arrTwo));
}