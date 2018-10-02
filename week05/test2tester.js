var player = {
    shirtName: "McDefault",
    shirtNum: 0,
    handed: "Right",
    position: "TBD",
    score: 0,
    //setScore = (newScore) => { this.score = newScore; } //using arrow notation, you can make a nice quick simple setter/getter
    setScore: function (newScore) { this.score = newScore; },
    getScore: function () { console.log(this.score); },
    upgrade: function (newScore) {
        if (this.score <= newScore) {
            this.score = newScore;
        }
        else {
            console.log("That would be a downgrade.");
        }
    }
};

externalSetScore = (target, newScore) => { //wow, this worked. Super easy.
    if (target == player) { //target gets passed an object, compares its structure to that of a player type
        target.score = newScore;
    }
};

player.setScore(80);
player.getScore();

externalSetScore(player, 90);
player.getScore();

player.upgrade(40);
player.getScore();

player.upgrade(100);
player.getScore();

//closure
console.log("Closures...");

function nameSetter(newName) {
    function nameCheck() { //namecheck is the inner function, a closure
        if (newName.length < 2 ) {
            console.log("Name too short.");
        }
        else if (newName.match(/0-9/)) {
            console.log("Names do not contain numbers.");
        }
        else {
            player.shirtName = newName;
            console.log("Player name is now: " + player.shirtName);
        }
    }
    nameCheck();
};

nameSetter("d");
console.log(player.shirtName);
nameSetter("Mighty Rio Grande");
console.log(player.shirtName);
nameSetter("44"); //shouldn't set, but does
console.log(player.shirtName);