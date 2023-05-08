function FruitEater(name){
    var appleEaten = 0;
    var pearEaten = 0;
    function appleEater(){
       appleEaten++;
    }
    function eaten(){
      return appleEaten;
    }
    function pearEater(){
      pearEaten++;
    }
    
    function Eaten(){
      return pearEaten;
    }
    function userName(){
      return name;
    }
     return {
      appleEater,
      eaten,
      Eaten, 
      userName,
       pearEater
    }
  }