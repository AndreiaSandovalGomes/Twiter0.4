function myFunction() {
document.getElementById("buttonid").disabled = false;
}
document.getElementById("msg").addEventListener('keypress', function(event) {
        if (event.keyCode == 13) {
          document.myForm.msg.Submit();
            // event.preventDefault();
        }
    });
function counter() {
  var quant = 140;
  var actual = document.getElementById("msg").value.length;
  var valor = quant - actual;
  document.getElementById("cont").innerHTML=valor;
  if(valor <= 20 && valor >=10){
    cont.style = "background-color: yellow";
  }else if(valor < 10 && valor >=0){
  cont.style = "background-color: red"
}else if(valor < 0){
  document.getElementById("buttonid").disabled = "disabled";
  cont.style = "background-color: red";
}
}

// function limiteInput(valor) {
//   var quant = 140;
//   var total = valor.length;
//   if(total <= quant) {
//   var resto = quant - total;
//     document.getElementById('cont').innerHTML = resto;
//     if (resto <= 20 && resto >= 10)
//        {cont.style = "background-color: yellow";
//     }else if(resto <= 9){
//     cont.style = "background-color: red";
//   }
// }
//   // else if(quant < total){
//   // document.getElementById("buttonid").disabled = true;
//   // }
// }



var submit =
document.querySelector("input[type=submit]");
submit.onclick = function(event) {
  var textarea = document.querySelector("textarea");
  var newText = document.getElementsByClassName("newText")[0];
  var newDiv = document.createElement ("div");
  newDiv.textContent = textarea.value;
  newText.appendChild(newDiv);
  document.getElementById('myForm').reset();
  return false;
  event.preventDefault();
}


// function time(){
// if(
// {
// var hour=today.getHours();
// var minute=today.getMinutes();
// document.getElementById('txt').innerHTML=hour+":"+minute;
// }
// }
