<<<<<<< HEAD
function varScope() {
    var x = 10;
    if (true) {
        var y = 20;
        console.log("Inside if block (var y):", y);
    }
    console.log("Outside if block (var y):", y); // accessible
}

function letScope() {
    let x = 10;
    if (true) {
        let y = 20;
        console.log("Inside if block (let y):", y);
    }
    // console.log(y); // Error
}

varScope();
letScope();
=======
function varScope() {
    var x = 10;
    if (true) {
        var y = 20;
        console.log("Inside if block (var y):", y);
    }
    console.log("Outside if block (var y):", y); // accessible
}

function letScope() {
    let x = 10;
    if (true) {
        let y = 20;
        console.log("Inside if block (let y):", y);
    }
    // console.log(y); // Error
}

varScope();
letScope();
>>>>>>> a9d48f6 (commit)
