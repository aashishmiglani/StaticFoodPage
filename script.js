// document.cookie="aashish"
// alert(document.cookie)
// document.cookie="aashish2"
// document.cookie="aashish1"
// var a= prompt("Enter the key")
// var b= prompt("Enter the value")
// document.cookie=`${a}=${b}`
// document.cookie




// var a= prompt("Enter the key")
// var b= prompt("Enter the value")
// localStorage.setItem(a,b)
// localStorage.getItem(a)
// sessionStorage.setItem(a,b)

// window.onstorage=(e)=>
// {
//     alert("chnaged")
//     console.log(e)
// }
// async function Dekhle() {
//     var b = {
//         method: "POST",
//         body: JSON.stringify({
//             title: "Aashish",
//             body: "Miglani",
//             id: 71911518,
//             userId: 1,
//         }),
//         headers:
//         {
//             "Content-type": "application/json"
//         },


//     }
//     let a = await fetch("https://jsonplaceholder.typicode.com/posts", b)
//     let try1 = await a.json()
//     console.log(try1)
//     // let try2 = await try1.ok
//     // let try3 = await try1.status
//     // console.log(try2, try3)
//     // return try1
   
// }
// Dekhle()
// // const callkar = async () => {
// //     let call = await Dekhle()
// //     console.log(call)
// // }
// // callkar()




fetch("https://isro.vercel.app/api/spacecrafts").then((response)=>
{
    return response.json()
}).then((data)=>
{
    console.log(data)
})








    //     method: 'POST',
    //     body: JSON.stringify({
    //       title: 'foo',
    //       body: 'bar',
    //       userId: 1,
    //     }),
    //     headers: {
    //       'Content-type': 'application/json; charset=UTF-8',
    //     },
    //   })