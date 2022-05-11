// block of codes that can be executed in a specific context
// scope is the context in which the code is executed
const colors = "red";

function start() {
  const colors = "blue";
  console.log(colors);
}
function end() {
  const message = "hello";
  console.log(message);
}
start();
