document.body.style.background = "black"
document.body.style.color = "white"
fetch("https://api.sampleapis.com/futurama/characters")
    .then(value => value.json())
    .then(actors => {
        let wrap = document.createElement("div")
        wrap.classList.add("wrap")
        document.body.appendChild(wrap)
        for (const actor of actors) {           
            let h3 = document.createElement("h3")
            h3.innerHTML = `${actor.id} ${actor.name.first} ${actor.name.middle} ${actor.name.last} <br>`
            wrap.appendChild(h3)
            let a = document.createElement("a")
            a.innerText = "Details"
            a.href = `actorDetails.html?actor=${JSON.stringify(actor)}`
            a.target = "_blank"
            h3.appendChild(a)            
        }
    })