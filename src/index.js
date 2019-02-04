document.addEventListener('DOMContentLoaded', () => {

  const URL =  'http://localhost:3000/toys'

  showToys()
  buttonHandler()
  addNewToy()

  function fetchToys(){
    return fetch(URL)
    .then(res => res.json())
  }

  function showToys(){
    let toyContainer = document.querySelector('#toy-collection')
    toyContainer.innerHTML = ""
    fetchToys()
    .then(data => {
      data.forEach(data => {
        let toyDiv = document.createElement('div')
        toyDiv.setAttribute("class", "card")
        toyContainer.appendChild(toyDiv)

        let h2 = document.createElement('h2')
        toyDiv.appendChild(h2)

        let image = document.createElement('img')
        image.setAttribute("class", "toy-avatar")
        toyDiv.appendChild(image)

        let p = document.createElement('p')
        toyDiv.appendChild(p)

        let button = document.createElement('button')
        button.setAttribute("class", "like-btn")
        button.addEventListener('click', addLikes)
        toyDiv.appendChild(button)

        h2.innerHTML = `${data.name}`
        image.src = `${data.image}`
        p.innerHTML = `${data.likes}`
        button.dataset.id = `${data.id}`
        button.dataset.likes = `${data.likes}`





      })
    })


  }

  function buttonHandler(){
    const addBtn = document.querySelector('#new-toy-btn')
    const toyForm = document.querySelector('.container')
    let addToy = false


    addBtn.addEventListener('click', () => {

      addToy = !addToy

      if (addToy) {
        toyForm.style.display = 'block'
      } else {
        toyForm.style.display = 'none'
      }
    })
  }




  function addNewToy(){
    let form = document.querySelector('form')
    form.addEventListener('submit', () => {
      event.preventDefault()

      let name = event.target.name.value
      let image = event.target.image.value
      event.target.reset()

      fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          image: image,
          likes: 0
        })
      })
      .then(showToys)
    })

  }

  function addLikes(){
    // debugger

    let id = event.target.dataset.id
    let likes = parseInt(event.target.dataset.likes)
    fetch(`http://localhost:3000/toys/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        likes: ++likes
      })
    }).then(showToys)
  }























})
