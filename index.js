function sieve() {
  //creates an boolean array of size 100
  //initialize elements of basket[] from index 2 to upper bounds of array to true
  var basket = new Array(100).fill(true);

  for (j = 2; j < Math.sqrt(100); j++) {
    //determines weather current array position is true
    if (basket[j] == true) {
      //if current array position equals true then the loop goes through
      //the rest of the array setting the multiple of the current array
      //position to false
      for (k = j * 2; k < 100; k += 2) {
        basket[k] = false; //set array position to false
      }
    }
  }

  //loops through basket[] print array index which is now the prime number if the position is still true
  for (m = 2; m < 100; m++) {
    //determines if position equals true
    if (basket[m] == true) console.log(" ", m); //print of position
  }
}

sieve();
