//Cierra ventana de mensajes
function cierraMsg() {
  if (vr == 1) {
    scale(msgVR,0,0,0); 
  }

  else {
    hide(msgDesktop);
  }
}

//Comienza tutorial, habilita movimiento, cambia mensaje para seguir flechas
function comienzaTutorial() {
  scale(flechas,1,1,1);
  rig.setAttribute("movement-controls","enabled:true");
  spotTutorial.setAttribute("visible","true");
  cajaRig.setAttribute("aabb-collider","objects: #spotTutorial");

  if (vr == 1) {
    msgTutorialVR.innerHTML = "<div class='msgClose' onclick='cierraMsg()'><span class='glyphicon glyphicon-remove'/></div><p style='margin-top:10px'>Utiliza el <strong>pad</strong> del control derecho para desplazarte hacia el estante de productos, siguiendo las flechas en el piso.</p><br><img src='assets/tutorial/pad.png' width='200' height='210'><br><br>";
    iniciaEscena = 1;
    msgVR.components.htmlembed.forceRender();  
  }

  else {
    msgTutorial.innerHTML = "<div class='msgClose' onclick='cierraMsg()'><span class='glyphicon glyphicon-remove'/></div><p style='margin-top:10px'>Utiliza las teclas <strong>WASD</strong> o las <strong>flechas de dirección</strong> para desplazarte hacia el estante de productos, siguiendo las flechas en el piso.</p><p>Para voltear arrastra tu cursor presionando el botón izquierdo del ratón o presiona las teclas <strong>Q</strong> y <strong>E</strong>.</p><br><img src='assets/tutorial/desplazar.png' width='600' height='156'><br><br>";
  }
}

//Al dar clic a continuar tutorial, habilita cajas invisibles en estante
function continuarTutorial() {  
  scale(papas1_Tuto,-0.97,2.47,0.38);
  scale(papas2_Tuto,-0.99,2.55,0.34);
  cajaRig.removeAttribute("aabb-collider");  
  cierraMsg();
  if (vr != 1) {
    scale(cursor1,1,1,1);   
  }
}

//Al agregar un producto al carrito dentro del tutorial
function agregaTutorial() {  
  totalProductos = 0;
  for (i=0; i<productos.length; i++) {
    if (productos[i]["Cantidad"] != 0) {
      totalProductos++;
    }    
  }

  if (totalProductos == 2) {
    if (vr == 1) {
      scale(msgVR,1,1,1);   
      msgTutorialVR.innerHTML = "<p style='margin-top:30px'>Para revisar tu carrito de compras, da clic en el ícono del carrito ubicado en tu muñeca izquierda, utilizando el gatillo de tu mano derecha.</p><p>Dentro del carrito, <strong>aumenta</strong> la cantidad de cualquier producto, después <strong>disminuye</strong>. Fíjate cómo las calorías cambian también.</p><p>Por último, <strong>elimina un producto</strong> y después <strong>vacía el carrito</strong>.</p><br>";
      msgVR.components.htmlembed.forceRender();    
    }

    else {
      show(msgDesktop);
      msgTutorial.innerHTML = "<p style='margin-top:30px'>Da clic en el ícono del carrito ubicado del lado superior izquierdo para revisar tu carrito de compras.</p><p>Dentro del carrito, <strong>aumenta</strong> la cantidad de cualquier producto, después <strong>disminuye</strong>. Fíjate cómo las calorías cambian también.</p><p>Por último, <strong>elimina un producto</strong> y después <strong>vacía el carrito</strong>.</p><br>";
    }
    
    scale(papas1_Tuto,0,0,0);
    scale(papas2_Tuto,0,0,0);
  } 
}

//Al vaciar carrito
function finalizarTutorial() {  

  if (vr == 1) {
    scale(btnCarritoVR,0,0,0);
    msgTutorialVR.innerHTML = "<p style='margin-top:30px'>¡Bien hecho!</p><p>Para registrar tu perfil y comenzar la actividad da clic al siguiente botón.</p><br><button class='btn_msg' onclick='perfilAlumno()'>Finalizar Tutorial</button>";
  }

  else { 
    msgTutorial.innerHTML = "<p style='margin-top:30px'>¡Bien hecho!</p><p>Para comenzar la actividad da clic al siguiente botón.</p><br><button class='btn_msg' onclick='irSupermercado()'>Finalizar Tutorial</button>";
    hide(calsDesktop);
    hide(contCarritoDesktop);
    hide(btnCarritoDesktop);      
  }
}

//Llenar perfil en VR
function perfilAlumno() { 
  scale(msgVR,0,0,0);
  scale(perfilVR,1,1,1); 
  perfilVR.setAttribute('position',{x:201.5,y:1.6,z:-3.7});  
  perfilVR.setAttribute('rotation',{x:0,y:0,z:0});
}

//Termina tutorial
function irSupermercado() {
  rig.removeAttribute("camera-logger");
  scale(cajaRig,0,0,0);
  scale(flechas,0,0,0);
  scale(estanteTuto,0,0,0);
  hide(msgDesktop);
  tutorial = 0;
  navMesh.setAttribute("position",{x:0,y:0,z:0});
  navMesh.removeAttribute("gltf-model");
  navMesh.setAttribute("gltf-model","#navmesh");  
  //scene.setAttribute("raycaster","far:3");
  scale(papas1_Tuto,0,0,0);
  scale(papas2_Tuto,0,0,0);
  reiniciar();  
}

//Collider
AFRAME.registerComponent("rigbox", {
  init: function() {
    this.el.addEventListener("hitstart", (e)=>{   
      supermercado.setAttribute("gltf-model",'"url(assets/Market.glb)"');
      
      if (vr == 1) {
       scale(btnCarritoVR,.12,.12,.12);       
       msgVR.removeAttribute("look-at");
       msgVR.setAttribute('rotation',{x:0,y:0,z:0}); 
       scale(msgVR,1,1,1); 
       msgVR.setAttribute('position',{x:201.5,y:1.6,z:-3.7});       
       msgTutorialVR.innerHTML = "<p style='margin-top:30px'>Ahora selecciona y agrega al carrito <strong>los dos productos</strong> que ves frente a ti, utilizando el <strong>gatillo</strong> de cualquier mano, y con el <strong>gatillo de la mano contraria</strong> da clic para confirmar o cancelar.</p><p>Revisa las calorías en tu muñeca izquierda.<br><br><button class='btn_msg' onclick='continuarTutorial()'>Continuar</button>";
       msgVR.components.htmlembed.forceRender();   
      }

      else {
        show(calsDesktop);
        show(contCarritoDesktop);
        show(btnCarritoDesktop); 
        show(msgDesktop);
        msgTutorial.innerHTML = "<p style='margin-top:30px'>Ahora agrega al carrito <strong>los dos productos</strong> que ves frente a ti, posicionando el <strong>cursor</strong> sobre el producto que deseas seleccionar y dando clic con el botón izquierdo del ratón, como se muestra en el siguiente video.</p><p>Utiliza el botón izquierdo del ratón para confirmar.</p><img src='assets/tutorial/cursor.gif' width='400' height='auto'><br><br><button class='btn_msg' onclick='continuarTutorial()'>Continuar</button>";        
      } 
    })    
  }
})


AFRAME.registerComponent('camera-logger', {

  schema: {
    timestamp: {type: 'int'},
    seconds: {type: 'int'} // default 0
  },

  log : function () {
    var cameraEl = this.el.sceneEl.camera.el;
    var rotation = cameraEl.getAttribute('rotation');
    var worldPos = new THREE.Vector3();
    worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);
    //console.log("Time: " + this.data.seconds 
                //+ "; Camera Position: (" + worldPos.x.toFixed(2) + ", " + worldPos.y.toFixed(2) + ", " + worldPos.z.toFixed(2)+ ")"); 
    cajaRig = document.getElementById("box1");
    cajaRig.object3D.position.set(worldPos.x.toFixed(2),worldPos.y.toFixed(2),worldPos.z.toFixed(2)); 
    //console.log(box3.object3D.position);   
  },

  play: function () {
    this.data.timestamp = Date.now();
    this.log();
  },

  tick: function () {
    if (Date.now() - this.data.timestamp > 1000) {
      this.data.timestamp += 1000;
      this.data.seconds += 1;
      this.log();
    }
  },
});