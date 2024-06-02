let main = document.getElementById("main");
let container = document.createElement("div");
let searchEl = document.getElementById("search");
let search = document.createElement("input");
search.type = "search";
search.id = "searchEl";
search.classList.add("search");
main.appendChild(search);
container.id = "creation";
main.appendChild(container);
search.placeholder="Enter the Id"

let options = {
    method: 'GET'
};
search.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        let searchInput = search.value;
        let containers = container.children;

        for (let i = 0; i < containers.length; i++) {
            let con = containers[i];
            if (con.id === searchInput) {
                con.style.display = "block";
            } else {
                con.style.display = "none";
            }
        }
    }
});

function creation(item) {
    let con = document.createElement("div");
    con.id = item.id;
    let id = document.createElement("h1");
    id.textContent = item.id;

    let userId = document.createElement("h4");
    userId.textContent = item.user_id;

    let title = document.createElement("h6");
    title.textContent = item.title;

    let desc = document.createElement("p");
    desc.textContent = item.body;

    con.classList.add("style");
    con.appendChild(id);
    con.appendChild(userId);
    con.appendChild(title);
    con.appendChild(desc);

    container.appendChild(con);
}

fetch("https://gorest.co.in/public/v2/posts", options)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsondata) {
        jsondata.forEach(function(item) {
            creation(item);
        });
    });
