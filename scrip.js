function login(){
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if(user == "admin" && password == "123"){
        alert("Iniciaste Sesion")
        window.location ="principal.html"
    }else{
        alert("Datos Incorrectos")
        window.location ="index.html"
    }
}

function logout (){
    alert("Usted cerro sesion")
    window.location='index.html'
}
