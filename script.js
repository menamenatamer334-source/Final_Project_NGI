let cities = [
    {
        country: "FRANCE",
        city: "Paris",
        desc: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        continent: "Europe",
        food: "Croissant, Macarons",
        place: "Eiffel Tower",
        language: "French",
        image: "paris.jpg"
    },
    {
        country: "JAPAN",
        city: "Tokyo",
        desc: "Tokyo mixes modern skyscrapers with traditional temples and amazing food.",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Shibuya Crossing",
        language: "Japanese",
        image: "tokyo.jpg"
    },
    {
        country: "ITALY",
        city: "Rome",
        desc: "Rome is a city full of ancient history, ruins and beautiful squares.",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",
        image: "roma.jpg"
    },
    {
        country: "EGYPT",
        city: "Cairo",
        desc: "Cairo is the capital of Egypt, home of the pyramids and thousands of years of history.",
        continent: "Africa",
        food: "Koshari, Falafel",
        place: "Pyramids of Giza",
        language: "Arabic",
        image: "cairo.jpg"
    }
];

let current = 0;

function showCity(i) {
    current = i;
    let c = cities[i];

    document.getElementById("country").textContent = c.country;
    document.getElementById("city").textContent = c.city;
    document.getElementById("desc").textContent = c.desc;
    document.getElementById("continent").textContent = c.continent;
    document.getElementById("food").textContent = c.food;
    document.getElementById("place").textContent = c.place;
    document.getElementById("language").textContent = c.language;
    document.getElementById("image").src = c.image;

    document.getElementById("counter").textContent = "0" + (i + 1) + " / 04";
    document.getElementById("badge").textContent = "0" + (i + 1);

    let dots = document.getElementsByClassName("dot");
    for (let n = 0; n < dots.length; n++) {
        dots[n].classList.remove("active");
    }
    dots[i].classList.add("active");
}

function next() {
    if (current == 3) {
        showCity(0);
    } else {
        showCity(current + 1);
    }
}

function prev() {
    if (current == 0) {
        showCity(3);
    } else {
        showCity(current - 1);
    }
}
function showMessage() {
    let c = cities[current];
    alert("Discover" + c.city + " in " + c.country + "!\nFamous Place: " + c.place);
}

showCity(0);