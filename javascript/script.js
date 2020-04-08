let listButtom = document.querySelector('#declencheur');
listButtom.addEventListener('click', function () {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(function (response) {
            return response.json();})
        .then(function(response){
            return dataInFeed(response)});
    function dataInFeed(response) {
        let title;
        let titleSpan;
        let ParentTitleSpan;
        response.forEach(function (element) {
            title = element.title;
            titleSpan = document.createElement('h1');
            titleSpan.innerHTML = title;
            ParentTitleSpan = document.querySelector('#carousel');
            ParentTitleSpan.appendChild(titleSpan);
        });
        $(document).ready(function () {
            $('#carousel').carouFredSel({
                responsive: true,
                align: "center",
                direction: 'left'
            });
        });
    }
});  //préfère 27 :)





// $(document).ready(function() {
//     document.querySelector('#declencheur').addEventListener('click', () => {
//         fetch("https://jsonplaceholder.typicode.com/users/1/posts")
//             .then(res => res.json())
//             .then(data => data.forEach(el => document.getElementById("carousel").appendChild(document.createRange().createContextualFragment(`<div><h3>${el.title}</h3><p>${el.body}</p></div>`, 'text/html'))));
//     });
//     $('#carousel').carouFredSel({
//         responsive: true,
//         align: "center",
//         direction: 'left'
//     });
// });



