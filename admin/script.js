class Customers {
  constructor() {
    this.id = 1;
    this.arrayUsers = [];
    this.editId = null;
  }

  salvar() {
    let user = this.lerDados();
    if (this.validaCampos(user)) {
      if(this.editId == null) {
        this.adicionar(user);
      }else {
        this.atualizar(this.editId, user);
      }
      

    }
    this.listaTabela();
    this.cancelar();
  }

  listaTabela(){
    let tbody = document.getElementById("tbody");
    tbody.innerText = "";

    for(let i =0; i < this.arrayUsers.length; i++){
      let tr = tbody.insertRow();

      let td_id = tr.insertCell();
      let td_login = tr.insertCell();
      let td_senha = tr.insertCell();
      let td_acoes = tr.insertCell();

      td_id.innerText = this.arrayUsers[i].id;
      td_login.innerText = this.arrayUsers[i].usuario;
      td_senha.innerText = this.arrayUsers[i].senha;

      td_id.classList.add("center");

      let imgEdit = document.createElement("img");
      imgEdit.src = "icons/edit.png";
      imgEdit.setAttribute("onclick", "user.edit("+ JSON.stringify(this.arrayUsers[i]) +")");

      let imgRemove = document.createElement("img");
      imgRemove.src = "icons/remove.png"
      imgRemove.setAttribute("onclick", "user.remove("+ this.arrayUsers[i].id +")");
      imgRemove.setAttribute("hspace", "25");

      td_login.setAttribute("id", "login")
      td_senha.setAttribute("id", "senha")
      
      td_acoes.appendChild(imgEdit);
      td_acoes.appendChild(imgRemove);
    }
  }

  adicionar(user){
    this.arrayUsers.push(user);
    this.id++;
  }

  atualizar(id, user){
    for (let i = 0; i< this.arrayUsers.length; i++){
      if(this.arrayUsers[i].id == id){
        this.arrayUsers[i].usuario = user.usuario;
        this.arrayUsers[i].senha = user.senha;
      }
    }
  }

  edit(dados){
    this.editId = dados.id;

    document.getElementById("login").value= dados.usuario;
    document.getElementById("senha").value= dados.senha;
    document.getElementById("btn-add").innerText= "Atualizar User";
  }

  lerDados(){
    let user = {}

    user.id = this.id;
    user.usuario = document.getElementById("login").value;
    user.senha = document.getElementById("senha").value;

    return user;
  }

  cancelar() {
    document.getElementById("login").value= "";
    document.getElementById("senha").value="";

    document.getElementById("btn-add").innerText="Adicionar User";
    this.editId = null;
  }
  validaCampos(user){
    let msg = "";
    if(user.usuario == ""){
      msg += "informe um usuario \n";
    }
    if(user.senha == ""){
      msg += "informe uma senha \n";
    }
    if(msg != ""){
      alert(msg);
      return false
    }
    return true;
  }

  remove(id){

    if(confirm("Confirma deletar o usuario de id:" +id )){
     let tbody = document.getElementById("tbody");
      for(let i = 0; i < this.arrayUsers.length; i++) {
       if(this.arrayUsers[i].id == id){
         this.arrayUsers.splice(i, 1)
         tbody.deleteRow(i);
       }
     }
    }
  }

}

const user = new Customers();
