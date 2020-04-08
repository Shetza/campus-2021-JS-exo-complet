function fillTheCarousel(jsondata) {
}

$(document).ready(function () {
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

let listButtom = document.querySelector('#declencheur');
listButtom.addEventListener('click', function () {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(response => response.json())
        .then(response => dataInFeed(response))
    function dataInFeed(response) {
        let title;
        let titleSpan;
        let ParentTitleSpan;
        response.forEach(function (element) {
            title = element.title;
            titleSpan = document.createElement('span');
            titleSpan.innerHTML = title;
            ParentTitleSpan = document.querySelector('#carousel');
            ParentTitleSpan.appendChild(titleSpan);
        });
        $('#carousel').carouFredSel({
            responsive: true,
            align: "center",
            direction: 'left'
        });
    }
});