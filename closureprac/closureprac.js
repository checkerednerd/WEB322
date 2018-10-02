function PlayerConstructor(newName) {
    var Player = {
        shirtName: "",
        shirtNum: 0,
        handed: "",
        position: "",
        score: 0
    };

    function setName() {
        if (newName.length < 2) {
            console.log("Name too short.");
        }
        else {
            Player.shirtName = newName;
            console.log("Player name is now: " + Player.shirtName);
        }
    }
    setName();
};

PlayerConstructor("Goober").setName();