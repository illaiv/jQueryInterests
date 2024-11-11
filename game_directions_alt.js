// Your game data array
const games = [
    {
        game_name: "Honkai Star Rail",
        actively_played: "Yes",
        review_score: "8",
        genre: "RTS/Turn Based",
    },
    {
        game_name: "World of Warcraft",
        actively_played: "No",
        review_score: "7",
        genre: "MMORPG",
    },
    {
        game_name: "League of Legends",
        actively_played: "Yes",
        review_score: "8",
        genre: "MOBA",
    },
    {
        game_name: "Maplestory",
        actively_played: "Yes",
        review_score: "6",
        genre: "MMORPG",
    },
    {
        game_name: "Old School Runescape",
        actively_played: "Yes",
        review_score: "10",
        genre: "MMORPG",
    },
    {
        game_name: "Lost Ark",
        actively_played: "No",
        review_score: "2",
        genre: "MMORPG",
    },
    {
        game_name: "Teamfight Tactics",
        actively_played: "Yes",
        review_score: "9",
        genre: "RTS",
    },
    {
        game_name: "Epic Seven",
        actively_played: "Yes",
        review_score: "5",
        genre: "RTS/Turn Based",
    }
];

// Function to populate the boxes with game information
const establishGameInfo = (index) => {
    console.log(games[index].game_name);
    // Display the game's name and genre in the box
    $(".instructions").eq(index).html(`${games[index].game_name}<br>Genre: ${games[index].genre}`);
};

// Main function to set up the boxes and add interactivity
const showInformation = () => {
    setUpBoxes();  // Create the game boxes first
    // Now, we iterate over the newly created boxes
    jQuery.each($(".box"), establishGameInfo);

    // On click, show the review score of the game
    $(".box").on("click", function() {
        let indexOfGame = $(".box").index(this);
        $(this).find("p.instructions").text(`Review Score: ${games[indexOfGame].review_score}`);
    });

    // On mouseover, show the genre of the game
    $(".box").on("mouseover", function() {
        let indexOfGame = $(".box").index(this);
        $(this).find("p.instructions").text(games[indexOfGame].genre);
    });

    // On mouseout, revert to the original game info (name and genre)
    $(".box").on("mouseout", function() {
        let indexOfGame = $(".box").index(this);
        $(this).find("p.instructions").html(`${games[indexOfGame].game_name}<br>Genre: ${games[indexOfGame].genre}`);
    });
};

// Function to generate the boxes dynamically
const setUpBoxes = () => {
    let wrapperRef = $('.wrapper');
    games.forEach((game) => {
        // Create a box for each game
        let boxMarkup = ` 
        <div class="box">
            <img class="game_pic" src="./images/${game.game_name.toLowerCase().replace(/ /g, "_")}.png" />
            <p class="instructions"></p>
        </div>`;
        wrapperRef.append(boxMarkup);
    });
};

// Initialize when the page is ready
$(document).ready(showInformation);
