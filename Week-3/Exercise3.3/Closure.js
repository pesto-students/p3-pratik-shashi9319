function createIncrement() { //  function declared in scope
  let count = 0; // count intialize to 0
  function increment() {
      count++; // function call count increments to  3 after calling it thrice 
  }
  let message = `Count is ${count}`; //log is called message is Count is 0 since initialised count in the beginning is 0 which do not come under log function
  function log() { // last step it called and prints above message 
      console.log(message);
  }
  return [increment, log];
}
const [increment, log] = createIncrement(); // 2nd call the function
increment(); // on these call count updates but message didn't update and count in message remain zero
increment();
increment();
log();