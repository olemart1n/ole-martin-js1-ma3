// KEY fd553c7b21f04a49bd5ac558a3e1af3e
// https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=fd553c7b21f04a49bd5ac558a3e1af3e";
const resultsHTML = document.querySelector(".results");
resultsHTML.innerHTML = "";
const showLoadingIndicator = 5;
/*

// ASYNC AWAIT SYNTAX

async function getGamesData() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        const resultsArray = result.results;
        for (let i = 0; i < resultsArray.length; i++) {
            const gameNames = resultsArray[i].name;
            const gameRating = resultsArray[i].rating;
            const gameTags = resultsArray[i].tags.length;
            if (i === 8) {
                break;
            }
            resultsHTML.innerHTML += `<div class="gameContainer">
                                        <p class="name">${gameNames}</p>
                                        <p class="rating">Rating:<b> ${gameRating}</b></p>
                                        <p class="tags">Amount Of Tags: <b>${gameTags}</b></p>
                                        </div>
                                        `;
        }
        
    } catch (error) {
        console.log("problems loading ");
        resultsHTML.innerHTML += displayError("problems with fetching data");
    }
}
getGamesData() */


// REGULAR PROMISE SYNTAX

fetch(url)
    .then(function(response){
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        getGamesData(data);
        
    })
    .catch(function(error) {
        console.log(error)
        resultsHTML.innerHTML = displayError("unable to load data");
    })

    function getGamesData(something) {
        const allData = something.results;
        resultsHTML.innerHTML = "";
        for (let i = 0; i < allData.length; i++) {
            const gameNames = allData[i].name;
            const gameRating = allData[i].rating;
            const gameTags = allData[i].tags.length;
            if (i === 8) {
                break;
            }
            resultsHTML.innerHTML += `<div class="gameContainer">
            <p class="name">${gameNames}</p>
            <p class="rating">Rating:<b> ${gameRating}</b></p>
            <p class="tags">Amount Of Tags: <b>${gameTags}</b></p>
            </div>
            `;
        }
    }