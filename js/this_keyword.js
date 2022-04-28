// console.log(this);

// var myObj = {
//     getThis : function() {
//         console.log(this);
//     }
// }

// myObj.getThis();

var myObj = {
    person : "Friend",
};
function greet() {
    console.log("Hello, " + this.person);
}
function greet_custom(message) {
    console.log(message + ", " + this.person);
}
// greet();
// greet.bind(myObj)();
greet_custom();
greet_custom.call(myObj, "Good afternoon");
