//WINDOW METHODS / OBJECTS /PROPERTIES

//client side javascript
//tt
// (dom)the window is the global object in client side javascript
//node js javascript runtime
//computer system is the env in nodejs
//window browser is global environent
//both use v8 runtime engine
//window properties and methods


//ALERT
// alert('hello world')

//PROMPT
// const input = prompt()
// alert(input)

//confirm
// if(confirm('are you sure')){
//   console.log('YES')
// } else {
//   console.log('No')
// }

let val;

//outer height and width

val = window.outerHeight;
val = window.outerWidth;

//Inner height and width
val = window.innerHeight;
val = window.innerWidth;

// Scroll points 
// Good for animations
val = window.scrollY;
val = window.

//Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val.window.location.href;

//get the parameters and do cool things with them
val = window.location.search;

// Redirect
// window.location.href = 'https://google.com'

//Reload
// window.logcation.reload()

// History Object

//put an int as an argument in go to go back -2 spaces 
//example user visited coingecko two sites a go. go to there


//Navigator Object
val = window.navigator;
//geo location, userAgent
//platform is user operating systme
val = window.navigator.language;


console.log(val)