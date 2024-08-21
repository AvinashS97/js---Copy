//? JavaScript is the Synchronous programming as it execute in the way we call i.e., in synchronous way and it is single threaded language... 

// function myFirst() {
//   console.log("Hello");
// }

// function mySecond() {
//   console.log("Goodbye");
// }

// myFirst();
// mySecond();
// console.log("Sync programming ---> it will execute after the above execution");

//* The above is the example of sync programming...
//! Asynchronous Programming

//* setTimeout function ---> It take 2 argument ===> a callback fns and a time after which the fns will execute... It give id in return...
//* setTimeout executes the code only once after the specified delay...


// console.log("setTimeout start");

// const id = setTimeout( () => {
//   console.log("In setTimeout fns") 
// }, 1000);

// for(let i=1; i<5; i++){
//   console.log("loop")
// }
// console.log("setTimeout",id);
// console.log("Clearnig timeOut");
// clearTimeout(id);
// console.log("setTimeout Ends");
// 22:00


//* setInterval ===> setInterval executes the code repeatedly at the specified interval.

// console.log("setinterval start");
// setInterval(() => {
//   console.log(Math.random());
// }, 1000);
// console.log("setInterval Ends");

//* BackGround Changer 

// const body = document.body;
// const button= document.querySelector("button")

// const intervalId = setInterval(() => {
//   const red = Math.floor(Math.random()*126);
//   const green = Math.floor(Math.random()*126);
//   const blue = Math.floor(Math.random()*126);
//   const rgbColor =` rgb(${red}, ${green}, ${blue})`;
//   body.style.background=rgbColor;
// }, 1000);


// button.addEventListener("click",()=> {
//   clearInterval(intervalId);
//   button.textContent = body.style.background;
// })


//* Callback 

//* Ex. of Callbacks ===> =====================================================
// function myfunc1(callbackfns) {
//   console.log("Function is performing task-1");
//   callbackfns()
// }

// myfunc1(()=> {
//   console.log("Function is performing task-2")
// });


//* Ex. of Callbacks ===> =====================================================

// function getTwoNumberAndSum(number1, number2, onSuccess, onfail) {
//   if (typeof number1 === "number" && typeof number2 === "number") {
//     onSuccess(number1, number2);
//   } else {
//     onfail();
//   }
// }

// function sumTwoNum(num1, num2) {
//   console.log(num1 + num2)
// }
// function onfailure() {
//   console.log("Please Enter number only")
// }

// getTwoNumberAndSum(4, 5, sumTwoNum, onfailure);


//* CallBacks in Asynchronous programming... 
//? callbacks, callback hell, pyramid of doom

//* Callback hell

const heading1 = document.querySelector(".heading-1")
const heading2 = document.querySelector(".heading-2")
const heading3 = document.querySelector(".heading-3")
const heading4 = document.querySelector(".heading-4")
const heading5 = document.querySelector(".heading-5")
const heading6 = document.querySelector(".heading-6")
const heading7 = document.querySelector(".heading-7")

// setTimeout(() => {
//   heading1.textContent = "Hello-1"
//   heading1.style.color = "Violet";
//   setTimeout(() => {
//     heading2.textContent = "Hello-2"
//     heading2.style.color = "purple";
//     setTimeout(() => {
//       heading3.textContent = "Hello-3"
//       heading3.style.color = "red";
//       setTimeout(() => {
//         heading4.textContent = "Hello-4"
//         heading4.style.color = "pink";
//         setTimeout(() => {
//           heading5.textContent = "Hello-5"
//           heading5.style.color = "green";
//           setTimeout(() => {
//             heading6.textContent = "Hello-6"
//             heading6.style.color = "blue";
//             setTimeout(() => {
//               heading7.textContent = "Hello-7"
//               heading7.style.color = "brown";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);



function changeText(element, text, color, time, onSuccessCallback, onfailurecallback) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;
      if (onSuccessCallback) {
        onSuccessCallback()
      };
    } else { // if element does not exist than else block will be executed...
      console.log("Your element does not exist...");
      if (onfailurecallback) {
        onfailurecallback();
      }
    }
  }, time)
}

//* Pyramid of doom

changeText(heading1, "one", "Violet", 1000, () => {
  changeText(heading2, "two", "Purple", 1000, () => {
    changeText(heading3, "three", "Red", 1000, () => {
      changeText(heading4, "four", "Pink", 1000, () => {
        changeText(heading5, "five", "Green", 1000, () => {
          changeText(heading6, "six", "Blue", 1000, () => {
            changeText(heading7, "seven", "Brown", 1000, () => {

            }, () => { console.log("Heading7 does not exist") });
          }, () => { console.log("Heading6 does not exist") });
        }, () => { console.log("Heading5 does not exist") });
      }, () => { console.log("Heading4 does not exist") });
    }, () => { console.log("Heading3 does not exist") });
  }, () => { console.log("Heading2 does not exist") });
}, () => { console.log("Heading1 does not exist") });
