let age = 38;
let isFemale = true;
let driverStatus = "bob";

//hieronder een test met andere waardes

/*let age = 17;
let isFemale = false;
let driverStatus = "Ana";*/

if (age > 17) {
    console.log("Goed, jij mag naar binnen");
} else {
    console.log("Helaas, jij mag niet naar binnen");
}

if (isFemale) {
    console.log("Je geeft aan dat je vrouw bent en mag naar binnen");
} else {
    console.log("Helaas, als man mag je niet naar binnen");
}

if (driverStatus == "bob") {
    console.log("Omdat jij de Bob bent, mag je rijden");
} else {
    console.log("Jij bent niet de Bob en mag dus niet rijden");
}