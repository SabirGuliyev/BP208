let row = document.querySelector('.row')

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