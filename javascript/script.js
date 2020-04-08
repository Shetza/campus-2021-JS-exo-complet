
function fillTheCarousel(jsondata) {
    let carouselSelector = document.querySelector('#carousel');
    jsondata.forEach(element => {
        console.log('ca creer le code')
        let test = carouselSelector.appendChild(creatediv());
        test.appendChild(createtitre(element));
    });
}

$(document).ready(function () {
    document.querySelector('#declencheur').addEventListener('click', function () { // ajout d'un event lors du clique sur le bouton 
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
        .then(response => response.json())
        .then(json => { fillTheCarousel(json); });

        $('#carousel').carouFredSel({
            responsive: true,
            align: "center",
            direction: 'left'
        });
})
});

function creatediv() {
    let simpledivCreate = document.createElement('div');
    return simpledivCreate
}

function createtitre(data) {
    let h1Create = document.createElement('h1');
    h1Create.textContent = data['title']
    return h1Create
}