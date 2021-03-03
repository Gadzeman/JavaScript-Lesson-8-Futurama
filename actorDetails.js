document.body.style.background = "black"
document.body.style.color = "white"

let url = new URL(location.href)
console.log(url)

let actor = url.searchParams.get("actor")
console.log(actor)

let character = JSON.parse(actor)
console.log(character)

let wrap = document.createElement("div")
wrap.classList.add("wrap")

let container = document.createElement("div")
container.classList.add("container")

let characterName = document.createElement("h1")
characterName.innerText = `Name: ${character.name.first} ${character.name.middle} ${character.name.last}`
container.appendChild(characterName)

let image = document.createElement("img")
if(character.images) {
    image.src = character.images.main;
    container.appendChild(image)
}


let info = document.createElement("h3")
info.innerHTML = `Age: ${character.age}<br>Gender: ${character.gender}<br>Home Planet: ${character.homePlanet}<br>Occupation: ${character.occupation}`
container.appendChild(info)

wrap.appendChild(container)

document.body.appendChild(wrap)

// style

wrap.style.display = "flex"
wrap.style.justifyContent = "center"

container.style.display = "flex"
container.style.flexDirection = "column"
container.style.alignItems = "center"

info.style.textAlign = "center"