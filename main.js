const addImg = document.querySelector("#add")

const cards = document.querySelector(".cards")

const removeIcon = document.querySelector(".remove")
removeIcon.addEventListener('click',removeProfile)


function removeProfile(e) {
    console.log(e.target.parentNode)
    let card =e.target.parentNode
    cards.removeChild(card)    
}

//******* */ for test********
const co = document.querySelector(".co")
// **********for test*******


addImg.addEventListener('click', addProfile)


const images = ['blue.jpeg','eeee.jpeg','yellow.png']

function addProfile() {
    // alert("add image clicked!")
    let userInput = prompt("Enter profile name")
    if (userInput){
        localStorage.setItem('profile',userInput)
        console.log(localStorage.getItem('profile'))
        let card = document.createElement('div')

        let img = document.createElement('img')

        let i = Math.floor(Math.random() *3) + 0  

        img.src="./images/"+images[i]
        let name = document.createElement('div')
        name.classList.add('profile-name')
        name.innerText=userInput
        card.appendChild(img)
        card.classList.add('card')

        let remove = document.createElement('div')
        remove.classList.add('remove')
        remove.innerHTML="&Cross;"
        remove.addEventListener('click',removeProfile)
        

        card.appendChild(name)
        card.appendChild(remove)
        
        cards.removeChild(addImg)
        cards.appendChild(card)
        cards.appendChild(addImg)
        
    }

  
}
