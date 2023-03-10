//Homework
// const body=document.querySelector("body")

// var table=document.createElement("table")


// var thead=document.createElement("thead")
// table.appendChild(thead)
// var trHead=document.createElement("tr")
// thead.appendChild(trHead)

// var thName=document.createElement("th")
// var nameText=document.createTextNode("Name")
// thName.appendChild(nameText)

// var thSurname=document.createElement("th")
// var surnameText=document.createTextNode("Surname")
// thSurname.appendChild(surnameText)

// var thAge=document.createElement("th")
// var ageText=document.createTextNode("Age")
// thAge.appendChild(ageText)

// trHead.appendChild(thName)
// trHead.appendChild(thSurname)
// trHead.appendChild(thAge)

// var tBody=document.createElement("tbody")
// table.appendChild(tBody)


// const people=[
// {
//     name:"Aide",
//     surname:"Ekberli",
//     age:21
// },
// {
//     name:"Shahbaz",
//     surname:"Eliyev",
//     age:28
// },
// {
//     name:"Elvin",
//     surname:"Azizli",
//     age:20
// }]

// for(let i=0;i<people.length;i++){
// var trBody=document.createElement("tr")
// var tdName=document.createElement("td")
// var tdSurname=document.createElement("td")
// var tdAge=document.createElement("td")
// tdName.innerText=people[i].name
// tdSurname.innerText=people[i].surname
// tdAge.innerText=people[i].age
// trBody.appendChild(tdName)
// trBody.appendChild(tdSurname)
// trBody.appendChild(tdAge)

// tBody.appendChild(trBody)
// }
// body.appendChild(table)

// const row=document.getElementsByClassName("row")[0]
// const nameIn=document.getElementsByClassName("name-input")[0]
// const img=document.getElementsByClassName("img-input")[0]
// const country=document.getElementsByClassName("country-input")[0]

// const btn=document.getElementsByClassName("btn-create")[0]
// const bands=[{
//     name:"Nirvana",
//     img:"https://images.prismic.io/merchbar/abc21af0f698e6974187b1eb5dde5c527287a58f_nirvana-logo.jpg?auto=compress,format",
//     country:"America"
// },
// {
//     name:"Metallica",
//     img:"https://upload.wikimedia.org/wikipedia/commons/b/b7/Metallica_logo.png",
//     country:"America"
// },
// {
//     name:"AC/DC",
//     img:"https://m.media-amazon.com/images/I/71ov-DhyciL._UF1000,1000_QL80_.jpg",
//     country:"Australia"

// }]
// btn.addEventListener("click",()=>{

//     let band={
//         name:nameIn.value,
//         img:img.value,
//         country:country.value
//     }
//     bands.push(band)

//      row.innerHTML+=`<div class="card col-4 mx-2 my-2" style="width: 18rem;">
//     <img src="${band.img}" class="card-img-top" alt="">
//     <div class="card-body">
//       <h5 class="card-title">Name : ${band.name}</h5>
//       <p class="card-text">Country : ${band.country}</p>
    
//     </div>
//     </div>`
// })




// for(let i=0;i<bands.length;i++){
//     row.innerHTML+=`<div class="card col-4 mx-2 my-2" style="width: 18rem;">
//     <img src="${bands[i].img}" class="card-img-top" alt="">
//     <div class="card-body">
//       <h5 class="card-title">Name : ${bands[i].name}</h5>
//       <p class="card-text">Country : ${bands[i].country}</p>
    
//     </div>
//     </div>`
// }

const ol=document.getElementById("cus-ol")

function FillHtml(arr){
    for(let i=0;i<arr.length;i++){
        ol.innerHTML+=`<li>
        <p>${arr[i].name}  ${arr[i].phone}</p>
    </li>`
    }
}


fetch("https://jsonplaceholder.typicode.com/users").then(data=>data.json()).then(json=>FillHtml(json)).catch(e=>console.log(e))





