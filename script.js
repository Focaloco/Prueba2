function validarForm() {
    let x = document.forms["myform"]["email"].value;
    if (x == "") {
      alert("Para contactarte necesitamos por lo menos un email");
      return false;
    }
  }


function traer() {
    fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(res => {
             console.log(res)
             console.log(res.results[0].email)
             contenido.innerHTML= `
               <img src="${res.results[0].picture.large}
                 " width="200px" 
                 class="img-fluid rounded-circle">
               <p>Nombre: ${res.results[0].name.first}</p>
               <p>Mail: ${res.results[0].email}</p>`
          })
       }


//const{ createApp } = Vue
//  createApp({
//      data(){
//        return{
//          mensaje: "Hola Mundo con Vue",
//          curso: "Codo a Codo"
//        }
//      }
//  }).mount("#app")

//fetch('https://api.coindesk.com/v1/bpi/currentprice.json') 
//  .then(response => response.json()) 
//  .then(data => console.log(data))


//var contenido = document.querySelector("#contenido");
//function traer() {
//  fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
//    .then(data => data.text())
//    .then(data => {
//      contenido.innerHTML= "${data}"})
//    }

