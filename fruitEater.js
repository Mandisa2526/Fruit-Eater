function FruitEater(){
    var applesCount = 0;
    var pearsCount = 0;
    function eat(fruit){
        if( fruit === "apple") {
            applesCount++;
        }
        if(fruit === "pear") {
            pearsCount++;
        }
    }
    function applesEaten () {
        return applesCount;
    }

    function pearsEaten() {
        return pearsCount;
    }

    return {
        eat,
        applesEaten,
        pearsEaten
    }
}