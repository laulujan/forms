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
