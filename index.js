let hScore = 0;
let gScore = 0;
let homeS = document.getElementById("home_score");
let guestS = document.getElementById("guest_score");

function add1H() {
        hScore += 1;
        homeS.textContent = hScore;
        console.log(hScore);
    }
    
function add2H() {
        hScore += 2;
        homeS.textContent = hScore;
        console.log(hScore);
    }
    
function add3H() {
        hScore += 3;
        homeS.textContent = hScore;
        console.log(hScore);
    }
    
function add1G() {
        gScore += 1;
        guestS.textContent = gScore;
        console.log(gScore);
    }
    
function add2G() {
        gScore += 2;
        guestS.textContent = gScore;
        console.log(gScore);
    }
    
function add3G() {
        gScore += 3;
        guestS.textContent = gScore;
        console.log(gScore);
    }
    
function reset() {
    hScore = 0;
    gScore = 0;
    homeS.textContent = hScore;
    guestS.textContent = gScore;
}