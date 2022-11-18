"use strict";


// function numbers() {
//    setTimeout(() => {
//       for (let i = 0; i < 500; i++) {
//          console.log("number")
//       }
//    }, 1000)
// }

// function letters() {
//    setTimeout(() => {
//       for (let i = 0; i < 500; i++) {
//          console.log("letter")
//       }
//    }, 1200)
// }






// function renderData(callBack1, callBack2) {

//    setTimeout( () => {
//       callBack2()
//       setTimeout(() => {
//          callBack1()
//          setTimeout(() => {
//             console.log("renderData");
//          }, 3000)
//       }, 2000)
//    }, 1000)

// }

// renderData(numbers, letters)


// callback hell

// let order = (call_production) => {
//    setTimeout(() => {    
//      call_production();
//    }, 1000);
//  };

//  let production = () => {
//    setTimeout(() => {
//      console.log("step 1");
//      setTimeout(() => {
//        console.log("step 2");
//        setTimeout(() => {
//          console.log("step 3");
//          setTimeout(() => {
//            console.log("step 4");
//            setTimeout(() => {
//              console.log("step 5");
//              setTimeout(() => {
//                console.log("step 6");
//                setTimeout(() => {
//                  console.log("step 7");
//                  setTimeout(() => {
//                    console.log("step 8");
//                    setTimeout(() => {
//                      console.log("step 9");
//                      setTimeout(() => {
//                        console.log("step 10");
//                        setTimeout(() => {
//                          console.log("A call backhell");
//                        }, 1000);
//                      }, 1000);
//                    }, 1000);
//                  }, 1000);
//                }, 1000);
//              }, 1000);
//            }, 1000);
//          }, 1000);
//        }, 1000);
//      }, 1000);
//    }, 1000);
//  };
//  order(production);



// const sendData = () => {
//    return new Promise((resolve, reject) => {

//       setTimeout(() => {

//          let promiseSuccess = [{
//             id: 1,
//             user: "Dilshodbek"
//          }]
//          if (promiseSuccess.length) {
//             resolve(promiseSuccess)
//          } else {
//             reject("404 NOT FOUND")
//          }
//       }, 2000)

//    })
// }

// sendData()
//    .then((res) => console.log(res))
//    .catch((err) => console.log(err))
//    .finally(() => console.log("end"))




// async function add() {
//    try {
//       const text = await "lorem ipsum dolor sit";
//       console.log(text)
//       console.log("text 1");
//       console.log(efrgdhtry);

//    } catch (err) {
//       console.log(`Xatolik: ${err}`);
//    }
// }

// add()

// console.log("tayyor");



function getData() {
   fetch("https://jsonplaceholder.typicode.com/todos")
      .then((data) => data.json())
      .then((result) => renderData(result));
}
getData()

function renderData(data = []) {
   data.length && data.forEach((el) => {
      const card = createElement('div', 'card p-5 mx-auto w-50 shadow mb-3', el.title);
      $('.wrapper').appendChild(card);
   })
}