            //    java learning

// by writing console.log(x), you can "print" to the terminal
//console has to be written after the variable is initialized
            // creating variables in js
// written let x = y, initializes the variable
//like python, you can make variables equal variables. written the same as above
//once initialized, you dont need to write let, just x= y
// for example 

// let myAge = 23
//myAge= 24
// let humanDogRatio= 7
// let myDogAge= myAge * humanDogRatio
// console.log(myDogAge)

//                 buttons 
// to make a button Work, you ad an onclick attribute to it in the html
// written onclick="variable-you-want-to-change-()"

//                               functions
// to create a function you write
// function name(){}
// to call a funtion you write 
// name()     
//variables initialized in functions CANT be called outside of them          

//             manipulating the html/ working with the DOM 

// DOM is document object model, this lets youd manipulate the html document into a javascript object. it written out like below is the model 
// you make a variable, which grabs an element from the html which allows you to manipulate the page
// written:  let x = document.getElementById("y")
// x becomes the js variable of y, an html element tag

                    //   strings in js
//everything in html is considered a String, you can set a variable to a string by
// let x = "y", and like python you can add varibale together to concantonate strings, console.log(x + "," + y "!")
// digits are taken as strings, so you need to write them in parenthesis ( 1+ 1) to do mathematical operations 
// example(html has a an h2 with the id "welcome-el")
// let welcomeEl = document.getElementById("welcome-el")
// let name= "Ricky"
// let greeting = "Welcome back, "
// function welcome(){
//     welcomeEl.innerText = greeting + name
//      }
// welcome()
// x+="y" is the same as x= x+"y"
                //innerText alternative mdn
//mdn is mozilla developer network, agood place to answer questions
//on there, it says .textcontent can do the same as .innertext but faster and helps keep it readable

                    //  passenger counting app

     // initialize count
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0   
   // listen for clicks on the increment button
//see html onclick
   // increment the count variable when the button is clicked
function increment() {
    count += 1
    countEl.textContent = count
}
    // change the count-el in the HTML to reflect the new count
// see above, manipulating variables
     //save function
function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    //setting counter back to zero after save
    countEl.textContent = 0
    count= 0
}












