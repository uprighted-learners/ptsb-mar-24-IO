/*
    This script will give our button on our html file
    some functionality. Everytime we click on the button,
    we will update our counter by 1
*/

const button = document.getElementById("btn"); //Select the button html element

// Adding an event listener of 'click' to our button so everytime
// we click on a button, something will happen
button.addEventListener("click", function () {
    let counterElement = document.getElementById("counter"); //Selecting the counter html element by it's id

    let counterValue = counterElement.innerText; //Grabbing the text value of our counter html element
    counterValue = parseInt(counterValue); // Even though it is is a number, the value is a string so we want to convert that to a number

    //With a number, we can do math operations like adding, substracting, etc.
    counterValue = counterValue + 1; //We update our counter value by 1

    counterElement.innerText = counterValue; //Setting the counter html value on the browser to our newly updated coounter value
})