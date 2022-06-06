//Guardar perfil del alumno
function guardarPerfil() {
  if (vr == 1) {
    if (perfilEdad == undefined || perfilSexo == undefined || perfilActividad == undefined) {
      msgErrorVR.innerHTML = "Llena todos los campos.";
    }
    else {
      irSupermercado();
    }
  }

  else {
    perfilEdad = edad.options[edad.selectedIndex].text;    
    perfilSexo = sexo.options[sexo.selectedIndex].text;    
    perfilActividad = actividad.options[actividad.selectedIndex].text;

    if (edad.options[edad.selectedIndex].value == "e0" || sexo.options[sexo.selectedIndex].value == "s0" || actividad.options[actividad.selectedIndex].value == "a0") {
      msgError.innerHTML = "Llena todos los campos.";
    }

    else { 
      hide(perfil);
      fadeInit.style.display='none'; 
      //Empieza tutorial
      show(msgDesktop);
      //msgTutorial.innerHTML = "<table style='width:100%; font-size:15px'><tr><th style='background-color:"+semaforoAzucares+"; padding: 5px; text-align: left;'>Azúcares</th><td class='retroColor'>"+retroAzucares+"</td></tr><tr><th style='background-color:"+semaforoSodio+"; padding: 5px; text-align: left;'>Grasas</th><td class='retroColor'>"+retroSodio+"</td></tr><tr><th style='background-color:"+semaforoGrasas+"; padding: 5px; text-align: left;'>Sodio</th><td class='retroColor'>"+retroGrasas+"</td></tr></table>";
      msgTutorial.innerHTML = "<p style='margin-top:30px'>¡Bienvenido!</p><p>En este tutorial aprenderás lo necesario para llevar a cabo la actividad del Supermercado.</p><br><button class='btn_msg' onclick='comienzaTutorial()'>Comenzar Tutorial</button>";
    }
  }
}

//Al dar clic en cualquier botón de edad VR, almacena valor
function guardarEdad(e) {
  for (i = 0; i < btnEdad.length; i++) {
    btnEdad[i].style.color = "#000";
    btnEdad[i].style.backgroundColor = "#fff";
  }
  e.style.color = "#fff";
  e.style.backgroundColor = "#194556"; 

  if (e.value == "e1") {
    perfilEdad = "<18";
  }

  else if (e.value == "e2") {
    perfilEdad = "18-25";
  }

  else if (e.value == "e3") {
    perfilEdad = "26-35";
  }

  else if (e.value == "e4") {
    perfilEdad = "36-50";
  }

  else if (e.value == "e5") {
    perfilEdad = "51<";
  }
  console.log("Edad: "+perfilEdad);
}

//Al dar clic en cualquier botón de sexo VR, almacena valor
function guardarSexo(e) {
  for (i = 0; i < btnSexo.length; i++) {
    btnSexo[i].style.color = "#000";
    btnSexo[i].style.backgroundColor = "#fff";
  }
  e.style.color = "#fff";
  e.style.backgroundColor = "#194556";

  if (e.value == "s1") {
    perfilSexo = "Masculino";
  }

  else if (e.value == "s2") {
    perfilSexo = "Femenino";
  }

  else if (e.value == "s3") {
    perfilSexo = "Intersexual";
  }
  console.log("Sexo: "+perfilSexo);
}

//Al dar clic en cualquier botón de actividad física VR, almacena valor
function guardarAct(e) {
  for (i = 0; i < btnAct.length; i++) {
    btnAct[i].style.color = "#000";
    btnAct[i].style.backgroundColor = "#fff";
  }
  e.style.color = "#fff";
  e.style.backgroundColor = "#194556";
  
  if (e.value == "a1") {
    perfilActividad = "Menos de 3 veces al mes";
  }

  else if (e.value == "a2") {
    perfilActividad = "1 o 2 veces por semana";
  }

  else if (e.value == "a3") {
    perfilActividad = "3 o 4 veces por semana";
  }

  else if (e.value == "a4") {
    perfilActividad = "Más de 4 veces por semana";
  }  
  console.log("Actividad física: "+perfilActividad);
}