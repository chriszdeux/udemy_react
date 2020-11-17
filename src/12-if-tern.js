const active = true;
function show() {
  return 'hello :D'
}
function sum(a, b){
  return a + b
}
// const message = active ? 'active' : 'active off';
const message = !active && show() || sum(2,6);
console.log(message)