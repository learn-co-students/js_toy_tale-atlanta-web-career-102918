const SERVER_URL = "http://localhost3000/toys"

document.addEventListener('DOMContentLoaded', initPage)

function initPage(){
  fetchToys()

}

function fetchToys(){
  fetch(SERVER_URL).then(function (resp){
    resp.json()
  }).then(function(json){
    json.forEach(showToys)
  })
}

function fetchToys(){
  fetch(SERVER_URL).then(function(resp){
    return resp.json()
  }).then(function (json){
    json.forEach(showToys)
  })
}

function fetchToys(){
  fetch(SERVER_URL).then(function(resp){
    resp.json()
  }).then(function(json){
    json.forEach(showToys)
  })
}


function fetchToys(){
  fetch(SERVER_URL).then(function(resp){
    resp.json()
  }).then(function(json){
    json.forEach(showToys)
  })
}

function showToys(toy){
  var container = document.querySelector('#toy-collection')
  container.innerHTML += `
      <div class="card">
        <h2>Name: ${toy.name}</h2>
        <img src="${toy.image}" />
        <p>Likes: ${toy.likes}</p>
        <button class="like-btn">Like <3</button>
        `
}



function showToys(toy) {
  var container = document.querySelector(#toy-collection)
  container.innerHTML += `
        <div class="card">
          <h2>Name: ${toy.name}</h2>
          <img src="${toy.image}" />
          <p>Likes: ${toy.likes}</p>
          <button class="like-btn">Like <3</button>
          <button>Like <3</button>
          <button>Like <3</button>

  `
}




function fetchToys(){
  fetch(SERVER_URL).then function(resp){
    return resp.json()
  }).then(function(json){
    json.forEach(showToys)
  })
}


function showToys(toy){
  var container = document.querySelector(#toy-collection)
  container += `
      <div>
      <h2>NAme: ${toy.name}</h2>
      <img src="${toy.image}" />
      <p>Likes:${toy.likes}</p>
      <button>Like <3</button>
      `
}

function fetchToys(){
  fetch(SERVER_URL).then(function (resp){
    resp.json()
  }).then(function(json){
    json.forEach(showToys)
  })
}

function showToys(toy){
  var container = document.querySelector('#toy-collection')
  container += `<div>
                    <h2>Name: ${toy.name}</h2>
                    <img src="${toy.image}" />
                    <p>Likes: ${toy.likes}</p>
                    <button>Likes: <3</button>
                </div>`
}
