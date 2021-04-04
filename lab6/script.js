const square = document.getElementById("random-color-square");
square.addEventListener("click", () => {
    let r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
    square.style.backgroundColor = '#' + r.toString(16) + g.toString(16) + b.toString(16);

});


const timer = document.getElementById("timer");
let count_time = 0;
let timerId;
timer.addEventListener('mouseenter', (e) => {
    timerId = setInterval(() => {
        count_time++;
        e.target.textContent = count_time;
    }, 1000);
});

timer.addEventListener('mouseleave', () => {
    clearInterval(timerId);
});

const dropdown_btn = document.getElementsByClassName("btn")[0];

const dropdown_menu = document.getElementsByClassName("dropdown-menu")[0];

dropdown_btn.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown_menu.classList.toggle('dropdown-menu-visible');
});



const pakman = document.getElementsByClassName("pakman")[0];
const move_pakman = document.getElementsByClassName("move-pakman")[0];

let pakmanClicked = false;

const rightBorder = move_pakman.clientWidth - pakman.offsetWidth + 18;
const bottomBorder = move_pakman.clientHeight - pakman.offsetHeight;
pakman.addEventListener("click", () => {
    pakmanClicked = true;
});
document.addEventListener("keydown", (e) => {
    if (e.code === "Escape") pakmanClicked = false;
});

move_pakman.addEventListener("mousemove", (e) => {
    if (pakmanClicked) {
        let x = e.pageX - move_pakman.offsetLeft - 40;
        let y = e.pageY - move_pakman.offsetTop - 60;
        if (x < rightBorder && y < bottomBorder && x > move_pakman.clientLeft && y > move_pakman.clientTop) {
            pakman.style.left = x + "px";
            pakman.style.top = y + "px";
        }
    }
});


const breakingBadBtn = document.getElementById("breaking-bad-btn");
const episodesContainer = document.getElementsByClassName("breaking-bad-series")[0];

let serials = [];
breakingBadBtn.addEventListener("click", () => {
    let promise = fetch("https://breakingbadapi.com/api/episodes")
        .then((response) => {
            return response.json();
        }).then((data) => {
            for (let el of data) {
                if (!serials.includes(el.series)) {
                    serials.push(el.series);
                }
            }
            serials.forEach((element) => {
                let seriesTitle = document.createElement('h1');
                seriesTitle.innerText = `${element}`;
                episodesContainer.appendChild(seriesTitle);
                for (let element of data) {
                    const episodeContainer = document.createElement("div");
                    episodeContainer.className = "episode";
                    const episodeTitle = document.createElement('h1');
                    episodeTitle.innerText = `${element.title}`;
                    const episodeNumber = document.createElement('h3');
                    episodeNumber.innerText = `${element.episode} series ${element.season} season`;
                    const releaseDate = document.createElement('p');
                    releaseDate.innerText = `Release date: ${element.air_date}`;
                    const characters = document.createElement('h2');
                    characters.innerText = `Characters:`;

                    episodesContainer.appendChild(episodeContainer);
                    episodeContainer.appendChild(episodeTitle);
                    episodeContainer.appendChild(episodeNumber);
                    episodeContainer.appendChild(releaseDate);
                    episodeContainer.appendChild(characters);

                    for (let item of element.characters) {
                        const character = document.createElement('p');
                        character.innerText = `${item}`;
                        episodeContainer.appendChild(character);
                    }
                }
            });
        });
});