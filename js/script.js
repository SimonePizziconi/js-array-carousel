// Creo un array con dentro le img
const imgList = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp",]

// Prendo il contenitore
const imgContainer = document.querySelector(".container")

// creo un ciclo
for (let i = 0; i < imgList.length; i++){

    // Creo un elemento HTML
    let imgItem = (`<div class="item">
                        <img src="${imgList[i]}" alt="">
                    </div>`);

    // L'elemento lo inserisco nel container
    imgContainer.innerHTML += imgItem;
}

// aggiungo class active al primo elemento
let indexNumber = 0;

let items = document.getElementsByClassName("item");

items[indexNumber].classList.add("active");

// prendo il "bottone"
const buttonNext = document.querySelector(".next-button");

// Creo un evento al click
buttonNext.addEventListener("click",
    function(){

        if(indexNumber < imgList.length - 1){
            // Rimuovo class active
            items[indexNumber].classList.remove("active");

            // aumento valore indice
            indexNumber++;
            console.log(indexNumber);

            // aggiugno class active
            items[indexNumber].classList.add("active");
        }
    }
)