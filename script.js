/*
    Simple sum function that is used to compare setup to functions
    with a callback function
*/
function sum(num1, num2) {
    console.log(num1 + num2);
}
const number1 = 1;
const number2 = 4;

sum(number1, number2);
sum(1, 4)

/*
    @param callback - a function that will be executed when useCallback is called.
*/
function useCallback(callback) {
    callback();
}

/*
    Defining our outputForConsole function. This will be our callback function
*/
const outputForConsole = function () {
    console.log("Printing to the console from the callback function")
}

/*
    Calling the useCallback function with an argument called outputForConsole (a function)
*/
useCallback(outputForConsole);

/*
    Readline interface setup. Use this for future assignments for I/O
*/
const readline = require("readline");
const rl = readline.createInterface(
    process.stdin, 
    process.stdout
);

function ask(questionText) {
    return new Promise(function (resolve, reject) {
        rl.question(questionText, resolve)
    })
}

/*
    Ask the user to give a staff member who works at UprightEd!
    If we give a staff name, tell them that that name is valid.
    If not then tell them that that person doesn't work here.
*/

//                 0        1        2        3,      4        5
let workers = ["Frank", "Scott", "Paul", "Hollie", "Chris", "Mazat"];
async function findWorker() {
    let foundWorker = false; //Flag for keeping track if we found a valid name in our workers array
    let response = await ask("Give us a staff name who works at Upright: ");

    // 1. Loop through every name in our workers array
    for (let i = 0; i < workers.length; i++) {
        //2. Compare our response to each worker.
        //When it comes to the comparison, we are making every character the same case (all UPPERCASE in this example);
        if (response.toUpperCase() === workers[i].toUpperCase()) {
            foundWorker = true;
        }
    }

    // Using our flag, see if we provided a valid name or not then output it.
    if (foundWorker) {
        console.log("You gave a correct name!")
    } else {
        console.log("That person doesn't work here!")
    }

    rl.close(); //Close the readline interface.
}

// findWorker();
// rl.setPrompt("Hello. This is the prompt. \n") //Setting the prompt

// rl.prompt(); //Executing the prompt

// rl.on("pause", () => {
//     console.log("Readline paused");
// })

// rl.on('resume', () => {
//     console.log('Readline resumed.');
// });

// setTimeout(() => {
//     rl.pause()

//     setTimeout(() => {
//         rl.resume();
//         rl.close();
//     }, 4000);
// }, 2000);
