//Reset al confirmar o cancelar en VR
function confirmaCancela() {
    grab = 0;
    scale(leftHand,1,1,1);
    scale(rightHand,1,1,1);
    showVR(leftHand);
    showVR(rightHand);

    if (tutorial == 1) {
      scale(papas1_Tuto,-0.97,2.47,0.38);
      scale(papas2_Tuto,-0.99,2.55,0.34);
      leftHand.setAttribute("raycaster", "objects:#inicio, #comienzaTutorial, #continuarTutorial, #finTutorial, #confirmar, #cancelar, #checkout, #next, #prev, #VR_reset, .cajasTuto, .clickable; far:10");
      rightHand.setAttribute("raycaster", "objects:#inicio, #comienzaTutorial, #continuarTutorial, #finTutorial, #confirmar, #cancelar, #checkout, #next, #prev, #VR_carrito, .cajasTuto, .clickable; far:10");
    }
    else {
      leftHand.setAttribute("raycaster", "objects:#inicio, #confirmar, #cancelar, #checkout, #next, #prev, #VR_reset, .cajas, .clickable; far: 3");
      rightHand.setAttribute("raycaster", "objects:#inicio, #confirmar, #cancelar, #checkout, #next, #prev, #VR_carrito, .cajas, .clickable; far: 3");
    }
    contProductoVR.removeAttribute("follow-position-hand");
    contProductoVR.setAttribute('rotation',{x:0,y:0,z:0});
    productoVR.removeAttribute("follow-rotation-hand");
    productoVR.removeAttribute("gltf-model");
    scale(infoContainer,0,0,0);   
    scale(btnCarritoVR,.12,.12,.12);
    if (tutorial != 1) {
      scale(btnReiniciarVR,.12,.12,.12);
    }
}

//Confirma producto y agrega al carrito
function confirmar() {  

  hide(verContainer);
  fade.style.display='none';
  cash.components.sound.playSound();
  head.setAttribute("look-controls", "enabled:true"); 
  //Botones checkout visible
  for (i=0; i<checkoutCajas.length;i++) {
    checkoutCajas[i].object3D.scale.set(.8,.8,.8);     
   }
      
  //Modifica cantidad del producto seleccionado y resetea
    if (vr == 1) {    
      productos[itemIndex]["Cantidad"] = productos[itemIndex]["Cantidad"]+ parseInt(cantidadNumVR.innerHTML);
      confirmaCancela();  
    }

    else {
      productos[itemIndex]["Cantidad"] = productos[itemIndex]["Cantidad"]+ parseInt(cantidadNum.innerHTML);
    }
  //Calcula calorías
    calculaCals(); 
    actualizaContadorCarrito();
    reset();  

  //Si está en tutorial
  if (tutorial == 1) {
    scale(papas1_Tuto,-0.97,2.47,0.38);
    scale(papas2_Tuto,-0.99,2.55,0.34);
    agregaTutorial();
  }
}

//Cancela producto, no agrega al carrito
function cancelar() {  
  hide(verContainer);
  fade.style.display='none'; 
  cancel.components.sound.playSound();
  head.setAttribute("look-controls", "enabled:true;");

    if (vr == 1) {
      confirmaCancela();
    }      
      reset();

    if (tutorial == 1) {
      scale(papas1_Tuto,-0.97,2.47,0.38);
      scale(papas2_Tuto,-0.99,2.55,0.34);
    }
}

//Aumenta cantidad    
function up() {
  if (vr == 1) {
    cantidadNumVR.innerHTML = parseInt(cantidadNumVR.innerHTML) + 1;
    infoContainer.components.htmlembed.forceRender();  
  }
  else {
    cantidadNum.innerHTML = parseInt(cantidadNum.innerHTML) + 1;
  }
  obtenerInfo(itemIndex);
}

//Disminuye cantidad
function down(min) {
  if (vr == 1) {
    cantidadNumVR.innerHTML = parseInt(cantidadNumVR.innerHTML) - 1;
  if (cantidadNumVR.innerHTML <= parseInt(min)) {
    cantidadNumVR.innerHTML = min;
  }
    infoContainer.components.htmlembed.forceRender();  
  }
 else {
    cantidadNum.innerHTML = parseInt(cantidadNum.innerHTML) - 1;
    if (cantidadNum.innerHTML <= parseInt(min)) {
      cantidadNum.innerHTML = min;
    }
  }
  obtenerInfo(itemIndex);
}

//Aumenta cantidad en carrito
function up1(e) {
  productos[e.getAttribute("valor")]["Cantidad"]++;
  calculaCals();
  actualizaContadorCarrito();
  obtenerLista();
}

//Disminuye cantidad en carrito
function down1(e,min) {
  productos[e.getAttribute("valor")]["Cantidad"]--;  
  calculaCals();
  actualizaContadorCarrito();
  obtenerLista();
  if (productos[e.getAttribute("valor")]["Cantidad"] <= parseInt(min)) {
    productos[e.getAttribute("valor")]["Cantidad"] = min;
    calculaCals();
    actualizaContadorCarrito();
    obtenerLista();
  }
}

//Elimina producto en carrito
function eliminaProducto(e) {
  totalProductos--;
  if (totalProductos == 0) {
    vaciar();
  } 
  eventTargetDel = e.getAttribute("valor");
  productos[eventTargetDel]["Cantidad"] = 0;
  obtenerLista();  
  calculaCals();
  actualizaContadorCarrito();
}

//Vacía carrito
function vaciar() {
  if (tutorial == 1) {
    finalizarTutorial();
  }
  
  for (i=0;i<productos.length;i++) {
    productos[i]["Cantidad"] = 0;
  }  

  cancel.components.sound.playSound(); 
  hide(btnVaciar); 
  hide(btnVaciarVR);
  hide(scrollup);
  hide(scrolldown);
  tablaProductos.innerHTML = "";
  tablaProductosVR.innerHTML = "";
  porcionesRow.innerHTML = "";
  porcionesRowVR.innerHTML = "";
  calorias = 0;
  caloriasTotales = 0;
  sodio = 0;
  sodioTotales = 0;
  azucares = 0;
  azucaresTotales = 0;
  otrasGrasas = 0;
  otrasGrasasTotales = 0;
  grasaSat = 0;
  grasaSatTotales = 0;  
  carrito = [];
  carritoSodio = [];
  carritoAzucares = [];
  carritoOtrasGrasas = [];
  carritoGrasaSat = [];
  totalProductos = 0;

  if (vr == 1) {
    carritoVacioVR.innerHTML = "El carrito está vacío.";
    infoContainer.components.htmlembed.forceRender();
    calsVR.innerHTML = calorias+" kcal";  
  }

  else {
    carritoVacio.innerHTML = "El carrito está vacío.";    
    listContainer.components.htmlembed.forceRender();
    //reset();
  }
    
  calsDesktop.innerHTML = calorias+" kcal";  
  for (i=0; i<checkoutCajas.length;i++) {
    checkoutCajas[i].object3D.scale.set(0,0,0);     
  }
  actualizaContadorCarrito();  
}


//Obtener lista carrito
function obtenerLista() {  
  //scale(msgVR,0,0,0);
  bloquea();
  totalProductos = 0;
  for (i=0; i<productos.length; i++) {
    if (productos[i]["Cantidad"] != 0) {
      totalProductos++;
    }    
  }

  if (totalProductos==0) {
    carritoVacio.innerHTML = "El carrito está vacío.";
    carritoVacioVR.innerHTML = "El carrito está vacío.";
    tablaProductos.innerHTML = "";
    tablaProductosVR.innerHTML = "";        
  }
  
  else {
    if (totalProductos > 4) {
      if (offset == 0) {
        tablaProductosVR.style.marginTop=offset+"px";
        hide(scrollup);
        show(scrolldown);
      }
      else {
        show(scrollup);
        show(scrolldown);
      }
    }

    else {
      offset = 0;
      tablaProductosVR.style.marginTop=offset+"px";
      hide(scrollup);
      hide(scrolldown);
    }
    
    carritoVacio.innerHTML = "";
    carritoVacioVR.innerHTML = "";
    porcionesRow.innerHTML = "Porciones";
    porcionesRowVR.innerHTML = "Porciones";
    html = '<div class="container">';

  // Loop through array and add table cells
  for (var i=0; i<productos.length; i++) {
  
    if (productos[i]["Cantidad"] != 0) {        
          html += "<div class='row fila clickable'><div class='col-sm-1'>" + '<img width="35" height="35" src="assets/jpg/'+productos[i]["Filename"]+'.jpg">' +"</div><div class='col-sm-5' style='padding-top:10px'>" + productos[i]["Producto"] + ": "+ productos[i]["Marca"] +"</div><div class='col-sm-5' style='text-align:center'><div class='qtyCounter2'><button class='btn-menos' valor='"+i+"' onclick='down1(this,1)'><span class='glyphicon glyphicon-minus'/></button><div class='txtInput2'>"+productos[i]["Cantidad"]+"</div><button class='btn-mas' valor='"+i+"' onclick='up1(this)'><span class='glyphicon glyphicon-plus'/></button></div></div><div class='col-sm-1'><div class='qtyCounter2'><button class='btn-eliminar' valor='"+i+"' onclick='eliminaProducto(this)'><span class='glyphicon glyphicon-trash'/></button></div></div></div>";        
    }
  }
  html += "</div>";

  // ATTACH HTML TO CONTAINER
  tablaProductos.innerHTML = html;
  tablaProductosVR.innerHTML = html;

  if (vr == 1) {
    show(btnVaciarVR);
  }

  else {
    show(btnVaciar);
  } 
}

listContainer.addEventListener("focusableenter", function(){
    console.log("ENTER LISTA");
});
  
listContainer.components.htmlembed.forceRender();
}

//Actualiza cantidad productos en carrito
function actualizaContadorCarrito() {
  numProductos = 0;
    for (var i=0; i<productos.length; i++) {
      numProductos += parseInt(productos[i]["Cantidad"]);
    }
    contCarritoDesktop.innerHTML = numProductos;
    if (vr == 1) {
      contCarritoVR.innerHTML = numProductos;
      btnCarritoVR.components.htmlembed.forceRender();
    }
}

//Abre lista carrito VR
function carritoVR() {
  grab = 1;
  scale(listContainer,.2,.2,.2);
  scale(rightHand,.01,.01,.01);
  hideVR(rightHand);
  scale(btnReiniciarVR,0,0,0);
  rightHand.setAttribute("raycaster", "far:0");
  obtenerLista();
}

//Cierra carrito en VR
function closeCarritoVR() {
  //document.getElementById("msgVR").object3D.scale.set(1,1,1);  
  grab = 0;
  offset = 0;
  reset();
  hide(scrollup);
  hide(scrolldown);
  hide(btnVaciarVR);
  scale(listContainer,0,0,0);
  scale(rightHand,1,1,1);
  showVR(rightHand);
  fade.style.display='none';  
  
  if (tutorial != 1) {
    scale(btnReiniciarVR,.12,.12,.12);
    rightHand.setAttribute("raycaster", "objects:#inicio, #confirmar, #cancelar, #checkout, #next, #prev, #VR_carrito, .cajas, .clickable; far: 3"); 
  }

  else {
    rightHand.setAttribute("raycaster", "objects:#inicio, #comienzaTutorial, #continuarTutorial, #finTutorial, #confirmar, #cancelar, #checkout, #next, #prev, #VR_carrito, .cajasTuto, .clickable; far:10");     
  }  
}

//Scroll down lista
function scrollDown() {
  offset-=100;
  tablaProductosVR.style.marginTop=offset+"px";
  show(scrollup);
  listContainer.components.htmlembed.forceRender();  
}

//Scroll up lista
function scrollUp() {
  offset+=100;
  if (offset >= 0) {
    hide(scrollup);
    offset=0;
    tablaProductosVR.style.marginTop=offset+"px";
    listContainer.components.htmlembed.forceRender();
  }

  else {  
    tablaProductosVR.style.marginTop=offset+"px";
    listContainer.components.htmlembed.forceRender();
  }
}