getColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

const $characters = $('.character');
setInterval(() => {
    for(let char of $characters){
        char.style.color = getColor();
    }
}, 1100);

//GIPHY SDK lFfCn0xuTuQJCqucetvE0DLs0v36krU1

//onto the good stuff
const $searchBar = $('#search-bar');
const $gifHolder = $('#gif-holder');

//search and choose ONE random gif from search to append to gifholder
addGIF = (res) => {
    let results = res.data.length;
    if(results){
        let random = Math.floor(Math.random() * results);
        let $newGIF = $("<img>", {src: res.data[random].images.original.url});
        $gifHolder.append($newGIF);
    }
}

$('form').on('submit', async (e) => {
    e.preventDefault();

    let search = $searchBar.val();
    $searchBar.val(''); //grab and clear input

    let response = await axios.get('http://api.giphy.com/v1/gifs/search', {params: {q: search, api_key: 'lFfCn0xuTuQJCqucetvE0DLs0v36krU1'}}); //search GIPHY but authentifiiiiied

    addGIF(response.data); //append to page
})

//remove ALL gifs from page
$('#remove').on('click', () => {
    $gifHolder.empty();
})