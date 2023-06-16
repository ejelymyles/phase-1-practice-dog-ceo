
const container = document.querySelector(`#dog-image-container`)
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all"
const ulContainer = document.querySelector("#dog-breeds")
const dropDown = document.querySelector("#breed-dropdown")
let breedsArray;

ulContainer.addEventListener(`click`,handleClick)
dropDown.addEventListener(`change`, handleChange)

// CHALLENGE 1 Add JavaScript that:
// - on page load, fetches the images using the url above ⬆️
// - parses the response as `JSON`
// - adds image elements to the DOM **for each** 🤔 image in the array
function getImages(){
fetch(imgUrl)
.then(resp => resp.json())
.then(images => {
    const imgs = images.message
    let imgsArray = createImgElement(imgs)
    renderElement(imgsArray)
})
}
   function createImgElement(imgs){
    return imgs.map((img) => {
        let i = `<img src = ${img}>`
        return i
   })
}
    function renderImgs(imgsArray){
        imgsArray.forEach(element => {
            renderElement(element)
           });
    }
    function renderElement(element){
        ulContainer.innerHTML += element
    }
    function getBreeds(){
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(breeds => {
            const breedsArray = Object.keys(breeds.message)
            const breedsLis = createLiElement(breedsArray)
            renderLis(breedsLis)

            // let imgsArray = createImgElement(imgs)
            // renderImg(imgsArray)
        })
    }
        function createLiElement(breedsArray){
            return breedsArray.map((breed) => {
                let li = `<li>${breed}</li>`
                return li
           })
    }
    function renderLis(breedsLis) {
        breedsLis.forEach(element => {
            renderElement(element)
           });
}

//CHALLENEGE 3
// once all the breeds are rendered in the <ul>, add JS so that when a user
//clicks on any of the <li>s the font color of that <li> changes

 function handleClick(event){
     if( event.target.style.color === `red`){
        event.target.style.color = `black`
     } else {
         event.target.style.color = `red`
     }
 }

 function handleChange(event) {
    const letter = event.target.value;
   const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
   const filteredBreedsLis = createLiElement(filteredBreeds)
   ulContainer.innerHTML = ''
   renderLis(filteredBreedsLis)

    //filter out breeds that start with the letter
 }


getImages()
getBreeds()

//CHALLENGE 4
// add JS so that the user can filter breeds that start with a parituclar letter using the dropdown
