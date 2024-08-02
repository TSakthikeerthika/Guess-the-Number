
var answer = Math.floor(Math.random() * 10) + 1
var num = document.getElementById("ip_number")
var score = document.getElementById("score")
var points = 10;
score.innerHTML = points;

function check() {

    answer = Math.floor(Math.random() * 10) + 1
    var entered = num.value

    if (entered > 10 || entered < 1) {
        alert("Please Enter any Number From 1 to 10 to play !")
        num.value = null;
    }

    else {
        if (entered == answer) {
            alert(" You Gussed the number Correctly !")
            points = points + 1;
            score.innerHTML = points;
            endgame();
            //result.textContent = "You're Right !"
        } else {
            alert(" Your Guss is Wrong this time :-( \n Let's Try Again ! \n \n \n Answer : " + answer)
            points = points - 1;
            score.innerHTML = points;
            endgame();
            //result.textContent= "You're Wrong !"
        }
        num.value = null;

    }
}

var htp_btn = document.querySelector(".htp_btn")
var htp_popup = document.querySelector(".htp_popup")
var popup_overlay = document.querySelector(".popup_overlay")
var close_btn = document.querySelector(".close_btn")

htp_btn.addEventListener("click", function () {
    popup_overlay.style.display = "block"
    htp_popup.style.display = "block"

})

close_btn.addEventListener("click", function () {
    popup_overlay.style.display = "none"
    htp_popup.style.display = "none"

})

const refreshBtn = document.getElementById("btn_newgame");

function handleClick() {
  window.location.reload();
}

refreshBtn.addEventListener("click", handleClick);

//box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);

function endgame(){
    if(points==0){
        alert("------Game Over------\n\n You reached 0 points.\n Let's Play Again ! ")
        window.location.reload();

    }
}

