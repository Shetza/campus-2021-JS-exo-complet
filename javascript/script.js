let button = document.querySelector('.boutonentrer')
button.addEventListener('click', (e) => {
    callTheApi()
})

function fillTheCarousel(jsondata) {
    let div_carousel = document.querySelector('#carousel')
    jsondata.forEach(element => {
        div_carousel.appendChild(createItemCarousel(element))
    });
    turncarousel();
}

function createItemCarousel(data) {
    let title = document.createElement('h1')
    title.textContent = data.title
    return title
}

function callTheApi() {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(response => response.json())
        .then(post => { fillTheCarousel(post); })
}

function turncarousel() {
    $(document).ready(function () {
        // Cliquer sur le bouton "Charger la liste" doit :
        //  1. Gérer le click sur le bouton
        //  2. Appeler une api (https://jsonplaceholder.typicode.com/users/1/posts)
        //  3. Pour chaque élément de la liste, ajouter un élément au futur carousel

        //  4. Déclencher le carousel
        $('#carousel').carouFredSel({
            items: 1,
            direction: "up",
            width: 1000,
            scroll: {
                items: 1,
                height: 200,
                easing: "elastic",
                duration: 100,
            }
        });
    });
}
