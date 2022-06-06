function inicio() {  
  start = 1;
  show(btnReiniciar);
  scale(btnReiniciarVR,.12,.12,.12);
  scale(msgVR,1,1,1);
  scale(btnInicio,0,0,0);
  msgVR.removeAttribute("look-at");
  msgVR.setAttribute('rotation',{x:0,y:90,z:0}); 
  msgVR.setAttribute('position',{x:7.35,y:2.308,z:-12.50});   
  msgTutorialVR.innerHTML = "<p style='margin-top:30px'><strong>¡Bienvenido al Supermercado Calorías más por menos!</strong></p><p>Aquí podrás aprender la importancia de conocer el contenido nutrimental de los productos que comprarías en un supermercado, con lo cual, vas a practicar que una buena combinación de los alimentos, analizando sus datos en forma adecuada, te ayudará a ganar o perder calorías.</p><div class='msgNext' data-value='1' onclick='nextMsg(this)' onmouseover='nextPrevMouseOver(this)' onmouseout='nextPrevMouseOut(this)'><span class='glyphicon glyphicon-chevron-right'/></div>";
  msgVR.components.htmlembed.forceRender(); 
  audioMensaje();
  animationMsg();
  reset();  
}


//Estilos botones htmlembed
function nextPrevMouseOver(e) {
  e.style.color = "#2962ff";
}

function nextPrevMouseOut(e) {
  e.style.color = "#000";
}

function embedMouseOver(e) {
  e.style.color = "#068BCC";
  e.style.backgroundColor = "#fff"; 
  e.style.border = "2px solid #068BCC";
}

function embedMouseOut(e) {
  e.style.color = "#fff";
  e.style.backgroundColor = "#068BCC"; 
  e.style.border = "2px solid #fff";
}

//Actualiza mensaje
function cambiaMensaje() {

  switch (msgIndex) {
  case 1:
    msgTutorialVR.innerHTML = "<p style='margin-top:30px'><strong>¡Bienvenido al Supermercado Calorías más por menos!</strong></p><p>Aquí podrás aprender la importancia de conocer el contenido nutrimental de los productos que comprarías en un supermercado, con lo cual, vas a practicar que una buena combinación de los alimentos, analizando sus datos en forma adecuada, te ayudará a ganar o perder calorías.</p><div class='msgNext' data-value='1' onclick='nextMsg(this)' onmouseover='nextPrevMouseOver(this)' onmouseout='nextPrevMouseOut(this)'><span class='glyphicon glyphicon-chevron-right'/></div>";
    animationMsg();
    msgVR.components.htmlembed.forceRender(); 
    break;
  case 2:
    msgTutorialVR.innerHTML = "<p style='margin-top:30px'>Disfruta el recorrido y realízalo las veces que consideres necesario, a través del botón “Reiniciar”.</p><p>En el Supermercado Calorías más por menos queremos ayudarte a tomar la mejor decisión. Alimentos como frutas y vegetales, tienen un menor índice calórico. En cambio, en un snack o alimento procesado su índice calórico es alto. Por lo anterior, revisa primero la información nutrimental que aparece en cada producto antes de seleccionarlo, cuando termines, pasa a la caja registradora para hacer el checkout.</p><div class='msgNext' data-value='2' onclick='prevMsg(this)' onmouseover='nextPrevMouseOver(this)' onmouseout='nextPrevMouseOut(this)'><span class='glyphicon glyphicon-chevron-left'/></div>";
    animationMsg();
    msgVR.components.htmlembed.forceRender(); 
    personaje.addEventListener("animation-loop", animationLoop, false);
    break;
  
}


  
/*
  if (msgIndex == 3) {    
    msgTutorialVR.innerHTML = "<p style='margin-top:30px'>Te invito a dar un recorrido por este supermercado virtual y disfrutar el recorrido. Una vez que hayas terminado, dirígete a la caja registradora para hacer el Checkout.</p><div style='text-align:center'><div class='msgNext' data-value='3' onclick='prevMsg(this)' style='display:inline-block' onmouseover='nextPrevMouseOver(this)' onmouseout='nextPrevMouseOut(this)'><span class='glyphicon glyphicon-chevron-left'/></div><div class='msgNext' data-value='3' onclick='nextMsg(this)' style='display:inline-block' onmouseover='nextPrevMouseOver(this)' onmouseout='nextPrevMouseOut(this)'><span class='glyphicon glyphicon-chevron-right'/></div></div>";
    msgVR.components.htmlembed.forceRender(); 
    animationMsg();
  }

  if (msgIndex == 4) {    
    msgTutorialVR.innerHTML = "<p style='margin-top:30px'>Haz el recorrido las veces que consideres necesario.</p><div class='msgNext' data-value='4' onclick='prevMsg(this)' style='display:inline-block' onmouseover='nextPrevMouseOver(this)' onmouseout='nextPrevMouseOut(this)'><span class='glyphicon glyphicon-chevron-left'/></div>";
    msgVR.components.htmlembed.forceRender(); 
    personaje.addEventListener("animation-loop", animationLoop, false);
  }    
  */
  
    
}


//Next message
function nextMsg(e) {
  msgIndex = parseInt(e.getAttribute('data-value')) + 1;
  cambiaMensaje();
}

//Previous message
function prevMsg(e) {
  msgIndex = parseInt(e.getAttribute('data-value')) - 1;
  cambiaMensaje();
}

//Animación personaje
function animationLoop() {
  if (start == 0) {
    var animIndex = Math.floor(Math.random()*3);
  }

  else {
    var animIndex = Math.floor(Math.random()*4);
  }
  personaje.setAttribute("animation-mixer","clip:"+anim[animIndex]);
  personaje.setAttribute("animation-mixer","loop: repeat");
  personaje.setAttribute("animation-mixer","repetitions: infinity");
}

//Animación durante mensaje
function animationMsg() {
  personaje.removeEventListener("animation-loop", animationLoop, false);
  personaje.setAttribute("animation-mixer","clip: Iddle4");
  personaje.setAttribute("animation-mixer","repetitions: infinity");
}