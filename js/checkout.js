//Envía datos de formulario y carga conclusión de la actividad
function checkout() {   
    tutorialRoom.setAttribute("gltf-model",'"url(assets/tutorial/TutorialRoom.glb)"');
    navMesh.setAttribute("position",{x:200,y:0,z:0});
    navMesh.removeAttribute("gltf-model");
    navMesh.setAttribute("gltf-model","#navmesh2");      
    hide(btnReiniciar);
    scale(btnReiniciarVR,0,0,0);

    form = document.createElement('form');
    form.id = "checkoutForm";
    form.action = "javascript:void(0);";
    in1 = document.createElement('input');
    in1.type = "text";
    in1.name = "entry.1280338014";
    in1.id = "edadInput";
    in1.value = perfilEdad;
    in2 = document.createElement('input');
    in2.type = "text";
    in2.name = "entry.1910971773";
    in2.id = "sexoInput";
    in2.value = perfilSexo;
    in3 = document.createElement('input');
    in3.type = "text";
    in3.name = "entry.621343031";
    in3.id = "actividad-fisicaInput";
    in3.value = perfilActividad;
    in4 = document.createElement('input');
    in4.type = "text";
    in4.name = "entry.1923665506";
    in4.id = "grasaSatInput";
    in4.value = grasaSatTotales;
    in5 = document.createElement('input');
    in5.type = "text";
    in5.name = "entry.432790185";
    in5.id = "otrasGrasasInput";
    in5.value = otrasGrasasTotales;
    in6 = document.createElement('input');
    in6.type = "text";
    in6.name = "entry.1951146538";
    in6.id = "azucaresInput";
    in6.value = azucaresTotales;
    in7 = document.createElement('input');
    in7.type = "text";
    in7.name = "entry.1128935049";
    in7.id = "sodioInput";
    in7.value = sodioTotales;
    in8 = document.createElement('input');
    in8.type = "text";
    in8.name = "entry.1467766039";
    in8.id = "caloriasInput";
    in8.value = caloriasTotales;
    form.appendChild(in1);
    form.appendChild(in2);
    form.appendChild(in3);
    form.appendChild(in4);
    form.appendChild(in5);
    form.appendChild(in6);
    form.appendChild(in7);
    form.appendChild(in8);
    document.body.appendChild(form);
    form.submit();

    
    var edad=$('#edadInput').val();
    var sexo=$('#sexoInput').val();
    var actividad=$('#actividad-fisicaInput').val();
    var grasaSaturada=$('#grasaSatInput').val();
    var otrasGrasas=$('#otrasGrasasInput').val();
    var azucares=$('#azucaresInput').val();
    var sodio=$('#sodioInput').val();
    var calorias=$('#caloriasInput').val();
   
    $.ajax({
      url:"https://docs.google.com/forms/u/2/d/e/1FAIpQLSeY5khjjPrKi6jk50HKbKn-r_9G9yhuKNcDOL1Om52wIu8eyA/formResponse",
      data: {"entry_1280338014":edad,"entry_1910971773":sexo,"entry_621343031":actividad,"entry_1923665506":grasaSaturada,"entry_432790185":otrasGrasas,"entry_1951146538":azucares,"entry_1128935049":sodio,"entry_1467766039":calorias},
      type:"POST",
      dataType:"xml",
      complete: function() {
                blackFadeTo("206.61 0 0","");  
                document.getElementById("super").removeAttribute("gltf-model");
                navMesh.setAttribute("position",{x:200,y:0,z:0});
                navMesh.removeAttribute("gltf-model");
                navMesh.setAttribute("gltf-model","#navmesh2"); 
            }
    });

    for (i=0; i<checkoutCajas.length;i++) {
      checkoutCajas[i].object3D.scale.set(0,0,0);     
    }
    scale(listContainer,0,0,0);   
    scale(perfilVR,0,0,0);
    audioMensaje();
    bgmusic.components.sound.stopSound();     
    showFinalMsg();       
  }

//Muestra mensaje de conclusión
function showFinalMsg() {  
  obtenerSemaforo();
  hide(calsDesktop);
  hide(contCarritoDesktop);
  hide(btnCarritoDesktop); 

  if (vr == 1) {
      msgVR.setAttribute('rotation',{x:0,y:180,z:0}); 
      msgVR.setAttribute('position',{x:206.61,y:1.6,z:2});

      if (correctoAzucares == 1 && correctoGrasas == 1 && correctoSodio == 1 && correctoCalorias == 1) {
        msgTutorialVR.innerHTML = "<p><strong>¡Has terminado la actividad!</strong></p><table style='width:100%; font-size:15px'><tr><th style='background-color:"+semaforoCalorias+"; padding: 10px; text-align: left;'>Calorías<br>"+caloriasTotales+" kcal</th><td class='retroColor'>"+retroCalorias+"</td></tr><tr><th style='background-color:"+semaforoAzucares+"; padding: 10px; text-align: left;'>Azúcares<br>"+azucaresTotales+" kcal</th><td class='retroColor'>"+retroAzucares+"</td></tr><tr><th style='background-color:"+semaforoGrasas+"; padding: 10px; text-align: left;'>Grasas<br>"+grasaSatTotales+" kcal</th><td class='retroColor'>"+retroGrasas+"</td></tr><tr><th style='background-color:"+semaforoSodio+"; padding: 10px; text-align: left;'>Sodio<br>"+sodioTotales+" mg</th><td class='retroColor'>"+retroSodio+"</td></tr></table><br><p>¡Felicidades! La selección de tus alimentos para este día se encuentra dentro de los estándares recomendados para una buena alimentación.</p>";
      }
      
      else {
        msgTutorialVR.innerHTML = "<p><strong>¡Has terminado la actividad!</strong></p><table style='width:100%; font-size:15px'><tr><th style='background-color:"+semaforoCalorias+"; padding: 10px; text-align: left;'>Calorías<br>"+caloriasTotales+" kcal</th><td class='retroColor'>"+retroCalorias+"</td></tr><tr><th style='background-color:"+semaforoAzucares+"; padding: 10px; text-align: left;'>Azúcares<br>"+azucaresTotales+" kcal</th><td class='retroColor'>"+retroAzucares+"</td></tr><tr><th style='background-color:"+semaforoGrasas+"; padding: 10px; text-align: left;'>Grasas<br>"+grasaSatTotales+" kcal</th><td class='retroColor'>"+retroGrasas+"</td></tr><tr><th style='background-color:"+semaforoSodio+"; padding: 10px; text-align: left;'>Sodio<br>"+sodioTotales+" mg</th><td class='retroColor'>"+retroSodio+"</td></tr></table>";
      }

      msgVR.components.htmlembed.forceRender();  
    }

    else { 
      show(msgDesktop);

      if (correctoAzucares == 1 && correctoGrasas == 1 && correctoSodio == 1 && correctoCalorias == 1) {
        msgTutorial.innerHTML = "<p><strong>¡Has terminado la actividad!</strong></p><table style='width:100%; font-size:15px'><tr><th style='background-color:"+semaforoCalorias+"; padding: 10px; text-align: left;'>Calorías<br>"+caloriasTotales+" kcal</th><td class='retroColor'>"+retroCalorias+"</td></tr><tr><th style='background-color:"+semaforoAzucares+"; padding: 10px; text-align: left;'>Azúcares<br>"+azucaresTotales+" kcal</th><td class='retroColor'>"+retroAzucares+"</td></tr><tr><th style='background-color:"+semaforoGrasas+"; padding: 10px; text-align: left;'>Grasas<br>"+grasaSatTotales+" kcal</th><td class='retroColor'>"+retroGrasas+"</td></tr><tr><th style='background-color:"+semaforoSodio+"; padding: 10px; text-align: left;'>Sodio<br>"+sodioTotales+" mg</th><td class='retroColor'>"+retroSodio+"</td></tr></table><br><p>¡Felicidades! La selección de tus alimentos para este día se encuentra dentro de los estándares recomendados para una buena alimentación.</p>";
      }
      
      else {
        msgTutorial.innerHTML = "<p><strong>¡Has terminado la actividad!</strong></p><table style='width:100%; font-size:15px'><tr><th style='background-color:"+semaforoCalorias+"; padding: 10px; text-align: left;'>Calorías<br>"+caloriasTotales+" kcal</th><td class='retroColor'>"+retroCalorias+"</td></tr><tr><th style='background-color:"+semaforoAzucares+"; padding: 10px; text-align: left;'>Azúcares<br>"+azucaresTotales+" kcal</th><td class='retroColor'>"+retroAzucares+"</td></tr><tr><th style='background-color:"+semaforoGrasas+"; padding: 10px; text-align: left;'>Grasas<br>"+grasaSatTotales+" kcal</th><td class='retroColor'>"+retroGrasas+"</td></tr><tr><th style='background-color:"+semaforoSodio+"; padding: 10px; text-align: left;'>Sodio<br>"+sodioTotales+" mg</th><td class='retroColor'>"+retroSodio+"</td></tr></table>";
      }
    }
}


