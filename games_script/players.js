
let player;

function Players(classType, health, strength, agility, rating, speed) {
    this.classType = classType;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.rating = rating;
    this.speed = speed;
}

// we create the players properties and methods that can handle the player's functionality

// the classType will helps us to identify the properties for each player by classType on their respective HTML

// 98, 93, 100, 4.8, 73 oceanmaster