
let boton = document.getElementById("boton");




function traerDatos(){
    let  dni = document.getElementById("dni").value;
    fetch(
        "https://apiperu.dev/api/dni/" + 
        dni + 
        "?api_token=2fceaf184bd64d317b500f78bf3216507f16d36c35ccb17f77dbb17d6e57978f")

    .then((datos)=>datos.json())
    .then((datos)=>{
        // console.log(datos)
        document.getElementById("resultado-dni").value= datos.data.numero;
        document.getElementById("nombre").value= datos.data.nombres;
        document.getElementById("apellidos").value= datos.data.apellido_paterno +" "+ datos.data.apellido_materno;
        document.getElementById("cui").value= datos.data.codigo_verificacion;

    });

}
boton.addEventListener("click", traerDatos);