
const establishGameInfo = (index) => {
    console.log(games[index].game_name)
    $("p").eq(index).html(`${games[index].game_name}<br>Game Genre: ${games[index].genre}`);
};

const showInformation = () => {
    setUpBoxes();
    jQuery.each($(".box"),establishGameInfo);

$(".box").on("click", function() {

let indexofGame = $(".box").index(this);
$(this).find("p").text(`Review Score: ${games[indexofGame].review_score}`);
});

$(".box").on("mouseover", function () {
    $(this).css("border", "10px solid black");
    let indexofGame = $(".box").index(this);
    $(this).find("p").text(`Actively played?: ${games[indexofGame].actively_played}`);
});

$(".box").on("mouseout", function () {
    $(this).css("border", "2px solid black");
    let indexofGame = $(".box").index(this);
    $(this).find("p").html(`${games[indexofGame].game_name}<br> Game Genre: ${games[indexofGame].genre}`);
    });
    };

const setUpBoxes = ()=> {
    let wrapperRef = $('.container');
    games.forEach((game)=>{
        let boxMarkup= ` <div class="box">
        <img class="game_pic" src="./images/${game.game_name.toLowerCase()}.png" />
        <p class="review"></p>
        </div>`;
        wrapperRef.append(boxMarkup);

    }
);
}

$(document).ready(showInformation);