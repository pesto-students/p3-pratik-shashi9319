function crateStack(){
  const items=[];
  return{
    
    push(item){
       items.push(item);
    },
    pop() {
      return items.pop();
    },
  };
}
const stack  = crateStack();
stack.push(10);
stack.push(20);
stack.push(5);
stack.pop();
stack.items;
console.log("items =",stack.items)
