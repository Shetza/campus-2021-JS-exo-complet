function fillTheCarousel(jsondata) {
    console.log(jsondata[0].title);
    const carousel = document.querySelector('#carousel');
    for (let i = 0; i < jsondata.length; i++) {
        const div = document.createElement('div');
        carousel.appendChild(div);
        div.innerHTML = jsondata[i].title;
    }
}

$(document).ready(function () { //execute quand tout est pret

//  1. Gérer le click sur le bouton
    const click = document.querySelector('#declencheur');
    click.addEventListener('click', (event) => {
        console.log('click ok');

//  2. Appeler une api (https://jsonplaceholder.typicode.com/users/1/posts)
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
            .then(response => {
                return response.json();
            })

            //  3. Pour chaque élément de la liste, ajouter un élément au futur carousel
            .then(res => { // promesse, une function flêché
                fillTheCarousel(res);
            });

//  4. Déclencher le carousel
        $('#carousel').carouFredSel({
            responsive: true,
            align: "center",
            direction: 'left'
        });
    });
});
