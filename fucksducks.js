dieRoll = Math.round(100*Math.random());
results = "Super lame.";
if ((dieRoll % 3 == 0) && (dieRoll % 5 == 0)) {
    results="FUCKSWITHDUCKS!";
}
else if (dieRoll % 3 == 0) {
    results="fucks";
}

else if (dieRoll % 5 == 0) {
    results="ducks";
};

console.log(results);
console.log(dieRoll);