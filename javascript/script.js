
function fillTheCarousel(jsondata)
{
    let carousel = document.querySelector('#carousel');
    jsondata.forEach((element) => {
        let carouselItem = document.createElement('div');
        carouselItem.innerHTML = element.body;
        carousel.appendChild(carouselItem);
    });
}

$(document).ready(function()
{
    // Cliquer sur le bouton "Charger la liste" doit :
    //  1. Gérer le click sur le bouton
    let declencheur = document.querySelector('#declencheur');
    declencheur.addEventListener('click', function(event) {
        //  2. Appeler une api
        fetch('https://jsonplaceholder.typicode.com/users/1/posts')

        //  3. Pour chaque élément de la liste, ajouter un élément au futur carousel
        .then(response => response.json())
        .then(json => {
            fillTheCarousel(json);

            //  4. Déclencer le carousel !
            $('#carousel').carouFredSel({
                responsive: true,
                align: "center",
                direction: 'left'
            });
        });
    });
});