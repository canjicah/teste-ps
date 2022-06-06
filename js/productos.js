//Al dar clic en un producto, muestra la información nutrimental (en vr toma el producto con la mano)
function verificar(e) {    
  fade.style.display='block';
  show(verContainer);
  cantidadNum.innerHTML = 1;
  open.components.sound.playSound();
  itemIndex = e.getAttribute("value");
  console.log(e.id);
  
  if (vr == 1) {    
    grab = 1;
    cantidadNumVR.innerHTML = 1;
    contProductoVR.setAttribute("position", e.getAttribute("position"));
    scale(infoContainer,.2,.2,.2);
    productoVR.setAttribute("gltf-model",'"url(assets/glb/'+productos[itemIndex]["Filename"]+'.glb)"');
    scale(productoVR,productos[itemIndex]["Escala"],productos[itemIndex]["Escala"],productos[itemIndex]["Escala"]);
    
    if (hand == 0) {
      scale(leftHand,.01,.01,.01);
      hideVR(leftHand);
      scale(btnCarritoVR,0,0,0);
      leftHand.setAttribute("raycaster", "far:0");  
      contProductoVR.setAttribute('rotation',{x:180,y:0,z:0});
    }

    else {
      scale(rightHand,.01,.01,.01);
      hideVR(rightHand);
      rightHand.setAttribute("raycaster", "far:0");
      if (tutorial != 1) {
        scale(btnReiniciarVR,0,0,0);
      }
    }
    contProductoVR.setAttribute("follow-position-hand", "");
    productoVR.setAttribute("follow-rotation-hand", "");    
  }

  sellosTexto = [];

  if (productos[itemIndex]["ExCalorias"] == true) {
    sellosTexto.push("EXCESO<br>CALORÍAS");
  }
  if (productos[itemIndex]["ExGrasasSat"] == true) {
    sellosTexto.push("EXCESO<br>GRASAS<br>SATURADAS");
  }
  if (productos[itemIndex]["ExGrasasTrans"] == true) {
    sellosTexto.push("EXCESO<br>GRASAS<br>TRANS");
  }
  if (productos[itemIndex]["ExSodio"] == true) {
    sellosTexto.push("EXCESO<br>SODIO");
  }
  if (productos[itemIndex]["ExAzucares"] == true) {
    sellosTexto.push("EXCESO<br>AZÚCARES");
  }
  if (productos[itemIndex]["ContEdulcorantes"] == true) {
    sellosTexto.push("CONTIENE<br>EDULCORANTES");
  }   
  if (productos[itemIndex]["ContCafeina"] == true) {
    sellosTexto.push("CONTIENE<br>CAFEÍNA");
  }      
  bloquea();
  obtenerInfo(itemIndex);
  if(tutorial == 1) {
    scale(papas1_Tuto,0,0,0);
    scale(papas2_Tuto,0,0,0);
  }    
}


//Obtiene información nutrimental
function obtenerInfo(i) { 
  if (vr == 0) {
    imgProducto.innerHTML = '<img width="180" height="180" src="assets/jpg/'+productos[i]["Filename"]+'.jpg">';
    nombreProducto.innerHTML = productos[i]["Producto"]+": "+productos[i]["Marca"];
    var cant = parseInt(cantidadNum.innerHTML);
    html = '<div style="">';
    for (x = 0; x<sellosTexto.length; x++) {
      html += "<div class='octagonWrap'><p class='octagonTxt'>"+sellosTexto[x]+"</p><div class='octagon'></div></div>";        
    }
    html += "</div>";
    sellos.innerHTML = html;
  }

  else if (vr == 1) {
  html = '<div style="">';
    for (x = 0; x<sellosTexto.length; x++) {
      html += "<div class='octagonWrap'><p class='octagonTxt'>"+sellosTexto[x]+"</p><div class='octagon'></div></div>";        
    }
  html += "</div>";
  sellosVR.innerHTML = html;
  var cant = parseInt(cantidadNumVR.innerHTML);
  nombreProductoVR.innerHTML = productos[i]["Producto"]+": "+productos[i]["Marca"];
  }
    
  txtInfo[0].innerHTML = Math.round(productos[i]["Grasa saturada (cal)"])*cant + " cal";
  txtInfo[1].innerHTML = Math.round(productos[i]["Otras grasas (cal)"])*cant + " cal";
  txtInfo[2].innerHTML = Math.round(productos[i]["Azúcares (cal)"])*cant + " cal";
  txtInfo[3].innerHTML = Math.round(productos[i]["Sodio (mg)"])*cant + " mg";
  txtInfo[4].innerHTML = Math.round(productos[i]["Energía por porción (cal)"])*cant + " cal";
  txtInfo[5].innerHTML = Math.round(productos[i]["Grasa saturada (cal)"])*cant + " cal";
  txtInfo[6].innerHTML = Math.round(productos[i]["Otras grasas (cal)"])*cant + " cal";
  txtInfo[7].innerHTML = Math.round(productos[i]["Azúcares (cal)"])*cant + " cal";
  txtInfo[8].innerHTML = Math.round(productos[i]["Sodio (mg)"])*cant + " mg";
  txtInfo[9].innerHTML = Math.round(productos[i]["Energía por porción (cal)"])*cant + " cal";
  txtPorciones[0].innerHTML = "Hay "+ Math.round(productos[i]["Porciones por envase"]) + " porciones en este envase";
  txtPorciones[1].innerHTML = "Hay "+ Math.round(productos[i]["Porciones por envase"]) + " porciones en este envase";

  

  infoContainer.components.htmlembed.forceRender();  
}

//Actualiza info al modificar cantidad 
function actualizaInfo(e) {
  obtenerInfo(itemIndex);
}