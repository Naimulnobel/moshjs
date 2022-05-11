let x = 0;
// var in global scope
var y = 0;

function letVar() {
  // var  for function scope
  for (var i = 0; i < 5; i++) {
    x++;
  }
  console.log(x);
}
letVar();
