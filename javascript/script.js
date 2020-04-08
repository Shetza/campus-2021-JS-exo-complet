function fillTheCarousel(jsondata) {

    let carouselParent = document.querySelector('#carousel');
    jsondata.forEach((element) => {
        let child = document.createElement("div");
        child.innerHTML = element.title;
        carouselParent.appendChild(child);
    });
}

$(document).ready(function () {
    // Cliquer sur le bouton "Charger la liste" doit :
    //  1. Gérer le click sur le bouton
    document.querySelector('#declencheur').addEventListener('click', function (event) {
        //  2. Appeler une api (https://jsonplaceholder.typicode.com/users/1/posts)
        fetch("https://jsonplaceholder.typicode.com/users/1/posts")
            .then(response => {
                return response.json();// analyser la réponse en JSON
            })
            .then(res => { //retour si resolve
                //  3. Pour chaque élément de la liste, ajouter un élément au futur carousel
                fillTheCarousel(res);

                //  4. Déclencher le carousel
                $('#carousel').carouFredSel({
                    responsive: true,
                    align: "center",
                    direction: 'left'
                });
            });
    });
});
