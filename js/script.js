var tutorial = 1;
var listenHand;
var perfilEdad;
var perfilSexo;
var perfilActividad;
var pos;
var hand;
var itemIndex;
var cajas;
var btn_calsVR;
var carrito;
var carritoSodio = [];
var carritoAzucares = [];
var carritoOtrasGrasas = [];
var carritoGrasaSat = [];
var semaforoCalorias;
var semaforoAzucares;
var semaforoSodio;
var semaforoGrasas;
var retroCalorias;
var retroAzucares;
var retroSodio;
var retroGrasas;
var correctoCalorias = 0;
var correctoAzucares = 0;
var correctoSodio = 0;
var correctoGrasas = 0;
var numProductos;
var camara;
var vr;
var calorias = 0;
var caloriasTotales = 0;
var sodio = 0;
var sodioTotales = 0;
var azucares = 0;
var azucaresTotales = 0;
var otrasGrasas = 0;
var otrasGrasasTotales = 0;
var grasaSat = 0;
var grasaSatTotales = 0;
var totalProductos = 0;
var eventTargetUp = 0;
var eventTargetDown = 0;
var eventTargetDel = 0;
var eventTarget = 0;
var grab = 0;
var msgIndex;
cajas = document.getElementsByClassName("cajas");
carrito = [];
var anim = ["Iddle2","Iddle3","Iddle1","Iddle4"];
//listado = [];
vr = 0;
var offset=0;
var start = 0;


function declaraVar() {
  window.cursor1 = document.getElementById("cursor1");
  window.bgmusic = document.getElementById("Audio_backgroundmusic");
  window.btnComenzar = document.getElementById("btnComenzar");
  window.open = document.getElementById("Audio_open");
  window.cash = document.getElementById("Audio_cash");
  window.cancel = document.getElementById("Audio_cancel");
  window.scene = document.getElementById("escena");
  window.supermercado = document.getElementById("super");
  window.personaje = document.getElementById("personaje");
  window.rig = document.getElementById("rig");
  window.head = document.getElementById("head");
  window.navMesh = document.getElementById("navMesh");
  window.fadeInit = document.getElementById('fade-init');
  window.fadeInit2 = document.getElementById('fade-init2');
  window.fade = document.getElementById('fade');
  window.rightHand = document.querySelector("#rightHand");
  window.leftHand = document.querySelector("#leftHand");
  window.calsDesktop = document.getElementById("cals");
  window.calsVR = document.getElementById("calsVR");
  window.carritoCompras = document.getElementById("carrito");
  window.contCarritoDesktop = document.getElementById("contadorCarrito");
  window.contCarritoVR = document.getElementById("contadorCarritoVR");
  window.btnCarritoDesktop = document.getElementById("btn_carrito");
  window.btnCarritoVR = document.getElementById("VR_carrito");
  window.btnInicio = document.getElementById("inicio");
  window.btnVaciar = document.getElementById("btn_vaciar");
  window.btnVaciarVR = document.getElementById("btn_vaciarVR");
  window.btnReiniciar = document.getElementById("reiniciar");
  window.btnReiniciarVR = document.getElementById("VR_reset");
  window.msgDesktop = document.getElementById("msg01");
  window.msgVR = document.getElementById("msgVR");
  window.tutorialRoom = document.getElementById("tutorialRoom")
  window.flechas = document.getElementById("flechasAnim");
  window.spotTutorial = document.getElementById("spotTutorial");
  window.cajaRig = document.getElementById("box1");
  window.papas1_Tuto = document.getElementById("papas-fritasTuto");
  window.papas2_Tuto = document.getElementById("botana-saludableTuto");
  window.perfil = document.getElementById("perfil_alumno");
  window.perfilVR = document.getElementById("perfilVR");
  window.estanteTuto = document.getElementById("estanteTutorial");
  window.msgTutorial = document.getElementById("mensajesTutorial");
  window.msgTutorialVR = document.getElementById("mensajesTutorialVR");
  window.msgError = document.getElementById("msg-error");
  window.msgErrorVR = document.getElementById("msg-errorVR");
  window.edad = document.getElementById("edad");
  window.btnEdad = document.getElementsByClassName("edadPerfil");
  window.sexo = document.getElementById("sexo");
  window.btnSexo = document.getElementsByClassName("sexoPerfil");
  window.actividad = document.getElementById("actividad");
  window.btnAct = document.getElementsByClassName("actPerfil");
  window.listContainer = document.querySelector("#listContainer");
  window.verContainer = document.getElementById("verContainer");
  window.cantidadNum = document.getElementById("myNumber");
  window.cantidadNumVR = document.getElementById("myNumberVR");
  window.productoVR = document.querySelector("#productoVR");    
  window.infoContainer = document.querySelector("#infoContainer");
  window.contProductoVR = document.querySelector("#contProductoVR");
  window.imgProducto = document.getElementById("imgProducto");
  window.nombreProducto = document.getElementById("nombreProducto");
  window.nombreProductoVR = document.getElementById("nombreProductoVR");
  window.txtInfo = document.getElementsByClassName("txtInfo");
  window.txtPorciones = document.getElementsByClassName("porciones");
  window.checkoutCajas = document.getElementsByClassName("checkoutCaja");
  window.tablaProductos = document.getElementById("tablaProductos");
  window.tablaProductosVR = document.getElementById("tablaProductosVR");
  window.porcionesRow = document.getElementById("porcionesRow");
  window.porcionesRowVR = document.getElementById("porcionesRowVR");
  window.scrollup = document.getElementById("scrollup");
  window.scrolldown = document.getElementById("scrolldown");
  window.carritoVacio = document.getElementById("carrito_vacio");
  window.carritoVacioVR = document.getElementById("carrito_vacioVR");  
  window.iniciaEscena = 0;
  window.sellosTexto = [];
  window.sellos = document.getElementById("sellos");
  window.sellosVR = document.getElementById("sellosVR");
  window.footer = document.getElementById("footer");
  window.modalWrapperCreditos = document.getElementById("modalWrapperCreditos");
  window.modalCreditos = document.getElementById("modalCreditos");
}

//Al cargar página
window.onload=function(){
  
}

document.addEventListener('DOMContentLoaded', function() {
  declaraVar();
  var scene = document.querySelector('a-scene');
  var splash = document.querySelector('#splash');
  scene.addEventListener('loaded', function (e) {
    splash.style.display = 'none';
    inicioTxt.style.display = 'none';
    show(btnComenzar);
  });
});


function comenzarActividad() {
  document.querySelector('a-scene').setAttribute("vr-mode-ui", "enabled: true");
  btnComenzar.style.display='none';
  fadeInit.style.display = 'block';
  perfil.style.display = 'block';
  fadeInit2.style.display = 'none';
  logoTec.style.display = 'none';
  footer.style.display = 'none';
  btnCarritoDesktop.addEventListener("click", function(){
    obtenerLista();  
  });  
  personaje.addEventListener("animation-loop", animationLoop, false);
}



//Si entra en VR
window.addEventListener('enter-vr', e => {
  if (AFRAME.utils.device.checkHeadsetConnected()) {
    vr = 1;
    scale(msgVR,1,1,1); 
    msgTutorialVR.innerHTML = "<p style='margin-top:30px'>¡Bienvenido!</p><p>En este tutorial aprenderás lo necesario para llevar a cabo la actividad del Supermercado.</p><p>Utiliza el <strong>gatillo</strong> para darle clic al siguiente botón.</p><div style='display:inline-block'><img src='assets/tutorial/gatillo.png' width='200' height='210' style='float:left'><button class='btn_msg' onclick='comienzaTutorial()' style='float:right; margin-left: 15px; margin-top:90px'>Comenzar Tutorial</button></div>";  
  }
}); 

//Estilo visible
function show(e) {
    e.style.visibility = "visible";
}

//Estilo hidden
function hide(e) {
    e.style.visibility = "hidden";
}

//Estilo visible
function showVR(e) {
    e.setAttribute("visible", "true");
}

//Estilo hidden
function hideVR(e) {
    e.setAttribute("visible", "false");
}

//Escala entities
function scale(e,value1,value2,value3) {
    e.object3D.scale.set(value1,value2,value3);
}


//Audio al mostrar mensajes inicio y fin
function audioMensaje() {
  message = document.getElementById("Audio_message");
  message.components.sound.playSound(); 
}

//Reset a escala de cajas invisibles
function reset() {

 if(tutorial != 1) {
 
  //Papas fritas           
  cajas[0].object3D.scale.set(-0.97,2.47,0.38);
  //Papas fritas con queso
  cajas[1].object3D.scale.set(-1.07,2.55,0.34);
  //Galletas
  cajas[2].object3D.scale.set(0.95,2.47,0.5);
  //Galletas con chispas
  cajas[3].object3D.scale.set(0.99,2.47,0.45);
  //Barra de chocolate
  cajas[4].object3D.scale.set(0.92,2.47,0.44);
  //Chocolate en polvo
  cajas[5].object3D.scale.set(0.96,2.47,0.47);
  //Atun
  cajas[6].object3D.scale.set(-0.96,2.47,0.43);
  //Jamón enlatado
  cajas[7].object3D.scale.set(-0.88,2.47,0.45);
  //Frijoles
  cajas[8].object3D.scale.set(-1.02,2.47,0.45);
  //Mayonesa
  cajas[9].object3D.scale.set(-0.86,2.47,0.45);
  //Catsup
  cajas[10].object3D.scale.set(-1.01,2.47,0.45);
  //Carne para hamburguesas
  cajas[11].object3D.scale.set(-1.95,2.08,0.4);
  //Sándwich
  cajas[12].object3D.scale.set(-2.04,2.08,0.4);
  //Refresco1
  cajas[13].object3D.scale.set(-1.1,2.44,0.75);
  //Refresco lata
  cajas[14].object3D.scale.set(-0.97,2.47,0.17);
  //Refresco lata light
  cajas[15].object3D.scale.set(-0.97,2.47,0.17);
  //Refresco toronja
  cajas[16].object3D.scale.set(-0.97,2.47,0.17);
  //Jugo
  cajas[17].object3D.scale.set(-0.97,2.47,0.17);
  //Agua
  cajas[18].object3D.scale.set(-0.97,2.47,0.17);
  //Aguacate
  cajas[19].object3D.scale.set(-0.63,0.02,1.49);
  //Tomate
  cajas[20].object3D.scale.set(-0.63,0.02,1.49);
  //Plátano
  cajas[21].object3D.scale.set(0.61,0.14,1.16);
  //Manzana
  cajas[22].object3D.scale.set(-0.88,0.02,2.23);
  //Papaya
  cajas[23].object3D.scale.set(-0.63,0.17,1.19);
  //Pera
  cajas[24].object3D.scale.set(-0.89,0.02,2.23);
  //Sandía
  cajas[25].object3D.scale.set(-0.91,0.23,1.83);
  //Melón
  cajas[26].object3D.scale.set(-0.76,0.23,1.7); 
  //Huevo           
  cajas[27].object3D.scale.set(-0.67,2.45,1.92); 
  //Pollo           
  cajas[28].object3D.scale.set(-2.03,2.05,0.46);
  //Carne sirloin           
  cajas[29].object3D.scale.set(-2.11,2.05,0.46);  
  //Carne milanesa           
  cajas[30].object3D.scale.set(-2.01,2.05,0.5);  
  //Salchichas        
  cajas[31].object3D.scale.set(-0.98,2.01,0.5);
  //Pan blanco      
  cajas[32].object3D.scale.set(-1.88,2.47,0.64);
  //Pan integral      
  cajas[33].object3D.scale.set(-1.02,2.47,0.61);    
  //Pan sin gluten      
  cajas[34].object3D.scale.set(-0.87,2.47,0.61);   
  //Cereal azucarado     
  cajas[35].object3D.scale.set(-1.95,2.47,0.46);
  //Cereal reducido en azúcar    
  cajas[36].object3D.scale.set(-0.95,2.47,0.49);   
  //Queso oaxaca   
  cajas[37].object3D.scale.set(-1.01,2.01,0.5);   
  //Queso asadero    
  cajas[38].object3D.scale.set(-1,2.01,0.5);   
  //Queso panela      
  cajas[39].object3D.scale.set(-0.99,2.01,0.5);
  //Leche entera     
  cajas[40].object3D.scale.set(-2.12,2.08,0.49);
  //Leche light   
  cajas[41].object3D.scale.set(-1,2.08,0.49);
  //Leche deslactosada     
  cajas[42].object3D.scale.set(-1.08,2.08,0.49);
  //Leche deslactosada light   
  cajas[43].object3D.scale.set(-1.04,2.08,0.49);
  //Leche de almendra     
  cajas[44].object3D.scale.set(-1.08,2.08,0.49);
  //Tortillas de harina   
  cajas[45].object3D.scale.set(-0.98,2.47,0.47); 
  //Tortillas de harina integral
  cajas[46].object3D.scale.set(-0.97,2.47,0.4);  
  //Tortillas de maíz
  cajas[47].object3D.scale.set(-0.88,2.47,0.4); 
  //Bebida isotónica
  cajas[48].object3D.scale.set(0.92,2.47,0.41); 
  //Cerveza
  cajas[49].object3D.scale.set(0,0,0);
  //Bebida energética
  cajas[50].object3D.scale.set(0.96,2.47,0.41);   
  //Brócoli    
  cajas[51].object3D.scale.set(-0.47,2.09,2.19);
  //Cebolla    
  cajas[52].object3D.scale.set(-0.44,2.09,2.21);    
  //Elote    
  cajas[53].object3D.scale.set(-0.44,2.09,2.16);
  //Espinaca    
  cajas[54].object3D.scale.set(-0.56,2.09,2.18);
  //Mostaza
  cajas[55].object3D.scale.set(-0.98,2.47,0.42);  
  //Papa    
  cajas[56].object3D.scale.set(-0.54,2.09,2.14);  
  //Pepino    
  cajas[57].object3D.scale.set(-0.56,2.09,2.12);
  //Zanahoria    
  cajas[58].object3D.scale.set(-0.44,2.09,2.13); 
  //Calabacita    
  cajas[59].object3D.scale.set(-0.44,2.09,2.16); 
  //Lechuga    
  cajas[60].object3D.scale.set(-0.44,2.09,2.12); 
  //Barra de granola crujiente
  cajas[61].object3D.scale.set(1.01,2.47,0.47);
  //Barra de granola almendras
  cajas[62].object3D.scale.set(0.96,2.47,0.47);
  //Yogurt de fresa
  cajas[63].object3D.scale.set(-1.08,2.08,0.49);
  //Licuado de yogurt
  cajas[64].object3D.scale.set(-1.08,2.08,0.49);
  //Yogurt natural
  cajas[65].object3D.scale.set(-1.08,2.08,0.49);
  //Arroz
  cajas[66].object3D.scale.set(-0.97,2.49,0.45); 
  //Pescado         
  cajas[67].object3D.scale.set(1.88,1.27,0.52);
  //Camarón         
  cajas[68].object3D.scale.set(-2.26,1.27,0.52);
  //Queso manchego         
  cajas[69].object3D.scale.set(-1,2.01,0.5);
  //Queso americano         
  cajas[70].object3D.scale.set(-1,2.01,0.5);
  //Jamón de pavo        
  cajas[71].object3D.scale.set(-1.08,2.01,0.5);
  //Jamón de pierna           
  cajas[72].object3D.scale.set(-1.08,2.01,0.5);
  //Botana saludable
  cajas[73].object3D.scale.set(-0.99,2.55,0.34);
  //Elote enlatado
  cajas[74].object3D.scale.set(-0.93,2.47,0.45); 
  //Fruta en almíbar
  cajas[75].object3D.scale.set(-0.94,2.47,0.45); 
  //Cajeta
  cajas[76].object3D.scale.set(0.96,2.47,0.49);
  //Crema de cacahuate
  cajas[77].object3D.scale.set(0.91,2.47,0.49);
  //Té negro sabor durazno
  cajas[78].object3D.scale.set(-0.97,2.47,0.17);
  //Mantequilla           
  cajas[79].object3D.scale.set(-0.71,2.45,1); 
  //Margarina           
  cajas[80].object3D.scale.set(-0.71,2.45,1.05); 
  //Mermelada
  cajas[81].object3D.scale.set(1.02,2.47,0.46);
  //Nieve de limón
  cajas[82].object3D.scale.set(-0.71,2.45,1.05);
  //Nieve de vainilla
  cajas[83].object3D.scale.set(-0.71,2.45,1.05);
  //Nutella
  cajas[84].object3D.scale.set(0.90,2.47,0.46);
  //Pizza
  cajas[85].object3D.scale.set(-2.09,2.08,0.4);
  //Salmón         
  cajas[86].object3D.scale.set(-0.97,1.27,0.52);
  //Spagetti
  cajas[87].object3D.scale.set(-0.98,2.47,0.46);
  //Yogurt griego
  cajas[88].object3D.scale.set(-1.08,2.08,0.49);
  //Refresco2
  cajas[89].object3D.scale.set(-1.1,2.44,0.75); 
  //Refresco3
  cajas[90].object3D.scale.set(-1.1,2.44,0.75); 
  //Nada1
  cajas[91].object3D.scale.set(0.28,2.49,9.65);  
  //Nada2
  cajas[92].object3D.scale.set(0.28,2.49,9.65);  
 

  }


}

//Inhabilita cajas invisibles
function bloquea() {
  for(i=0; i<93; i++) {
    cajas[i].object3D.scale.set(0,0,0);
  }
}

//Reinicia actividad, reset a todo
function reiniciar() {
  start = 0;
  scale(msgVR,0,0,0);
  scale(btnInicio,1,1,1);
  hide(btnReiniciar);  
  hide(carritoCompras);
  show(calsDesktop);
  show(contCarritoDesktop);
  show(btnCarritoDesktop); 
  correctoAzucares = 0;
  correctoSodio = 0;
  correctoGrasas = 0;

  if (vr == 1) {
    grab = 0; 
    scale(btnReiniciarVR,0,0,0);
    scale(listContainer,0,0,0);
    scale(btnCarritoVR,.12,.12,.12);
    leftHand.setAttribute("raycaster", "objects:#inicio, #confirmar, #cancelar, #checkout, #next, #prev, #VR_reset, .cajas, .clickable; far: 3");
    rightHand.setAttribute("raycaster", "objects:#inicio, #confirmar, #cancelar, #checkout, #next, #prev, #VR_carrito, .cajas, .clickable; far: 3");
  }
  
  //scene.setAttribute("raycaster", "far:0");  
  scene.setAttribute("raycaster","objects: .cajas, .clickable; far: 3");
  bloquea(); 
  vaciar();   
  blackFadeTo("12.59 0 -9.05","");  
  bgmusic.components.sound.playSound();   
  tutorialRoom.removeAttribute("gltf-model");  
  personaje.addEventListener("animation-loop", animationLoop, false);
}