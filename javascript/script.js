
function fillTheCarousel(jsondata)
{
}

$(document).ready(function()
{
    // Cliquer sur le bouton "Charger la liste" doit :
    //  1. Gérer le click sur le bouton
    //  2. Appeler une api (https://jsonplaceholder.typicode.com/users/1/posts)
    //  3. Pour chaque élément de la liste, ajouter un élément au futur carousel
    
    //  4. Déclencher le carousel
    $('#carousel').carouFredSel({
        responsive: true,
        align: "center",
        direction: 'left'
    });
});
