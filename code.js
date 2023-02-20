function logar() {
  var user = document.getElementById("login").value;
  var password = document.getElementById("senha").value;

  if (user == "admin" && password == "admin") {
    alert("Voce e um Admin");
    window.location.href = "/admin/bco.html";
  } else if (user == "gusta" && password == "gusta") {
    alert("voce e um usuario");
  } else {
    alert("usario ou senha incorreto");
  }
}
