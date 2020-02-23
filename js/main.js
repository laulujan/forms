var miLista = document.getElementsByClassName("error-list")[0]
var listError = miLista.getElementsByTagName("ul")[0]


function requeridos (str) {
    var name = document.getElementById(str).value;
    if(name != ""){
        return true
    }else{
       createLists("Error, el campo " + str + " es requerido");
       miLista.classList.remove("hidden");
    }

}


function createLists(x){
    let newli = document.createElement("li");
    let  newlicontent = document.createTextNode(x);
    newli.appendChild(newlicontent);
    listError.appendChild(newli);
}


function validateEmail(){
    var correo = document.getElementById("email").value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log(correo)
    if( !filter.test(correo)){
        createLists("ingrese un email valido");
    }
    return;
    
}

function commentMax(){
    var comentario = document.getElementById("comments").value;
    if(comentario == null || comentario.length == 0 || comentario.length > 50){
        createLists("El maximo admitido es 50 caracteres");
    }
    return
}

function validPass(){
    var contrasena = document.getElementById("password").value;
    var passw =   /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    console.log(contrasena)
    if(!(contrasena.match(passw))) { 
        createLists("Password should have a 6 characters minimum length and contains at leas 1 lowercase,1 uppercase and 1 digit");
    }return;
}

function borrarLista(){
    var x = listError.getElementsByTagName("li")
    for(var i = 0; i < x.length; i++) listError.removeChild(x[i]);
    if(x.length == 0){
        miLista.classList.add("hidden");
     }
}

function validateAll(){
    if(listError.childElementCount == 0){
        document.getElementById("mySubmit").disabled=false;
    }
}

function validateVehicle(){
    var checados = true;
    if(document.getElementById("car").checked == true || document.getElementById("bike").checked == true 
    || document.getElementById("motorcycle").checked == true){
        checados
    }else{
        createLists("Vehicle is required")
    }
}

function showHiddenSection(str){
    var x = document.getElementById(str);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function vehicleIsRequired(param){
    var campo = document.getElementById(param);
    if(campo.childNodes[3].value != ""){
        return true
    }else{
        let parrafo = document.createElement("p");
        parrafo.id="errornuevo";
        let  parrafoContent = document.createTextNode("error campo requerido");
        parrafo.appendChild(parrafoContent);
        campo.appendChild(parrafo);
    }
  }
  function removeVehicleError(param){
    document.getElementById(param).removeChild(document.getElementById("errornuevo"));
  }

  function validateDoors(){
    var campo1 = document.getElementById('doors');
    var inputDoor = document.getElementById("car-doors").value;
      if(isNaN(inputDoor) || inputDoor<1 || inputDoor>6){
        let parrafo1 = document.createElement("p");
        parrafo1.id="errornuevo";
        let  parrafoContent1 = document.createTextNode("error ingrese un numero del 1 al 6");
        parrafo1.appendChild(parrafoContent1);
        campo1.appendChild(parrafo1);
        return
      }   
  }

 function validateAccesories(){
    var campo2= document.getElementById('bike-accesories');
    if(document.getElementById("basket").checked == false || document.getElementById("lantern").checked == false 
    || document.getElementById("lock").checked == false){
        let parrafo2 = document.createElement("p");
        parrafo2.id="errornuevo";
        let  parrafoContent2 = document.createTextNode("Select at least one accesory");
        parrafo2.appendChild(parrafoContent2);
        campo2.appendChild(parrafo2);
        return;
    }
 }
