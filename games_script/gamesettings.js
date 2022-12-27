
// step 1:Create a method that will control the functionality of players when they have been selected.
// step2: create:
// - a method that will call on two other methods setGameStart().
// -a method that controls the fight view page when the player has been selected resetPlayer();
// -and a method that will control the gaming fight after the player has been selected setPreFight();

// we need to put a placeholder inside each method so it can identify which class will be affected by our js code based on the player selected.

// inside the resetPlayer() method we will insert of player=new Player() construstor where we will insert the different game stats of each player. We will use a switch and case to define the functionality of each player depending on who we selected.

let gameSettings = {
    
    setGameStart(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer(classType) {
        switch (classType) {
            case "oceanmaster":
                player = new Players(classType, 98, 93, 100, 4.8, 73);
                break;
            case "Thora":
                player = new Players(classType, 90, 83, 98, 4.5, 83);
                break;
            case "Legai":
                player = new Players(classType, 87, 90, 95, 4.4, 93);
                break;
            case "Shadow":
                player = new Players(classType, 78, 90, 73, 3.8, 88);
                break;
            case "Beast":
                player = new Players(classType, 100, 97, 80, 4.3, 63);
                break;
            case "DemonHunter":
                player = new Players(classType, 88, 92, 80, 4.6, 85);
                break;
            case "KungLee":
                player = new Players(classType, 95, 89, 78, 4.8, 94);
                break;
            case "Tiko":
                player = new Players(classType, 80, 85, 80, 3.5, 70);
                break;
        
                
        };
        // using the getInterface variable we are going to create a new HTML design for when we click on each player. That way JS detects the old HTML file and inserts new info based on the player we've clicked.
        
        let getInterface = document.querySelector(".interface");
        
        getInterface.innerHTML = `<div class="image-avatar">
        <img src="./characters/${classType}.jpeg">
        <article>
        <h3>${classType}</h3>
        <p>Health:${player.health}</p>
        <p>Strength:${player.strength}</p>
        <p>Agility:${player.agility}</p>
        <p>Rating:${player.rating}</p>
        <p>Speed:${player.speed}</p>
        </article>
        </div>`; 
        
    },

    setPreFight() {
        
    }
}



