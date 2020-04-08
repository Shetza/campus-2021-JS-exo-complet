document.querySelector('#declencheur').addEventListener('click', function () {
    fetch("https://jsonplaceholder.typicode.com/users/1/posts")
        .then(function (response) {
            response.json().then(function (jsondata) {
                fillTheCarousel(jsondata);
            })
        })
});
function fillTheCarousel(jsondata) {
    console.log(jsondata);
    let posts = document.querySelector('#carousel');
    for (let i = 0; i < 10; i++) {
        let post = document.createElement('div');
        post.textContent = jsondata[i]['title'];
        posts.appendChild(post);
    }
    $(document).ready(function () {
        $('#carousel').carouFredSel({
            responsive: true,
            align: "center",
            direction: 'left',
        })
    });
}