function howHigh(height) {
    return (height + " feet high!");
  }
  
  function jump(height) {
    return ("I'm jumping " + howHigh(height));
  }
  
  console.log(jump(5)); //=> "I'm jumping 5 feet high!";
  console.log(jump(12)); //=> "I'm jumping 12 feet high!";