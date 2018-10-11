const baseURL = 'http://www.songsterr.com/a/wa/bestMatchForQueryString?s={free bird}&a={lynyrd skynyrd}';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSong);

function fetchSong(e) {
e.preventDefault();


fetch(baseURL)
.then(response => {
    return response.json();

})
.then(json => {
    displayArtist(json);
})
.catch(err => {  //this will tell you what the error is, I got a broken link error;404
    console.log(err)
})
};

function displayArtist(json) {
    let songs = json.forEach(r => {
        let song = document.createElement('li');
        song.innerText = r.name;
        songForm.appendChild(song);
    })
}