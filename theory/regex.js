let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});


rl.on('line', function (line) {
////////////////////////////////////////////
// Find regexes that match the following: //
////////////////////////////////////////////

// 1. matches both antelope and antelopes.)
    const regexA = /(antelopes?)/g;
    let matches = line.match(regexA);
    console.log(matches);

// 2. Regex that matches either of: // goat or moat //  
//                         but not:     // boat //
    const regexOat = /(g|m)(oat)/g;
    let matches2 = line.match(regexOat);
    console.log(matches2);

// 3. Regex that matches dates in YYYY-MM-DD format. (Year can be 1-4 digits, and month and day can each be 1-2 digits). This does not need to verify the date is correct (e.g 33333-33-33 can match).
    const regexDate = /\d+-\d{2}-\d{2}$/gm;
    let matches3 = line.match(regexDate);
    console.log(matches3);
});
