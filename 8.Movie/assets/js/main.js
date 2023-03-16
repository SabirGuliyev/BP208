let row = document.querySelector('.row')
let input=document.getElementsByClassName("cus-input")[0]
let btn=document.getElementsByClassName("cus-btn")[0]

btn.onclick=function(){
  
  $.ajax({
    method:"GET",
    url:"https://api.tvmaze.com/search/shows?q="+input.value
  }).done((data)=>{
    row.innerHTML=""
    data.forEach(element =>{
      row.innerHTML+=`<div class="col-4 py-3"  >
      <div class="card" style="width: 18rem;">
        <img src="${element.show.image?.medium}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title"><b>Name</b>:${element.show.name}</h5>
          <p class="card-text"><b>Language</b>:${element.show.language}</p>
          <p class="card-text"><b>Genres</b>:${element.show.genres}</p>
          <p class="card-text"><b>Imdb</b>:$</p>
          <a href="details.html?id=${element.show.id}" class="btn btn-primary">Start waching</a>
        </div>
      </div>
    </div>`
  })
  
})
}



// $.ajax({
//   method:"GET",
//   url:"https://api.tvmaze.com/show"
// }).done((response)=>{
//   console.log(response)
// })

$.ajax({
  method:"GET",
  url:"https://api.tvmaze.com/show"
}).done((data)=>{
    data.forEach(element =>{
        row.innerHTML+=`<div class="col-4 py-3"  >
        <div class="card" style="width: 18rem;">
          <img src="${element.image.medium}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title"><b>Name</b>:${element.name}</h5>
            <p class="card-text"><b>Language</b>:${element.language}</p>
            <p class="card-text"><b>Genres</b>:${element.genres}</p>
            <p class="card-text"><b>Imdb</b>:${element.externals.imdb}</p>
            


            <a href="details.html?id=${element.id}" class="btn btn-primary">Start waching</a>
          </div>
        </div>
      </div>`
    })
})