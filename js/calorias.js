//Calcula info nutrimental
function calculaCals() { 
  carrito = [];
  carritoSodio = [];
  carritoAzucares = [];
  carritoOtrasGrasas = [];
  carritoGrasaSat = [];
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

  if (carrito.length == 0) {
    calorias = 0;
    sodio = 0;
    azucares = 0;
    otrasGrasas = 0;
    grasaSat = 0;
  }

  for (var i=0; i<productos.length; i++) {
    if (productos[i]["Cantidad"] != 0) {
      calorias = productos[i]["Cantidad"]*Math.round(productos[i]["Energía por porción (cal)"]);
      carrito.push(calorias);
      sodio = productos[i]["Cantidad"]*Math.round(productos[i]["Sodio (mg)"]);
      carritoSodio.push(sodio);
      azucares = productos[i]["Cantidad"]*Math.round(productos[i]["Azúcares (cal)"]);
      carritoAzucares.push(azucares);
      otrasGrasas = productos[i]["Cantidad"]*Math.round(productos[i]["Otras grasas (cal)"]);
      carritoOtrasGrasas.push(otrasGrasas);
      grasaSat = productos[i]["Cantidad"]*Math.round(productos[i]["Grasa saturada (cal)"]);
      carritoGrasaSat.push(grasaSat);
    }
  }

  for (var i=0; i<carrito.length; i++) {
    caloriasTotales += carrito[i];
    sodioTotales += carritoSodio[i];
    azucaresTotales += carritoAzucares[i];
    otrasGrasasTotales += carritoOtrasGrasas[i];
    grasaSatTotales += carritoGrasaSat[i];
  }

  calsDesktop.innerHTML = caloriasTotales+" kcal";

  if (vr==1) {   
    calsVR.innerHTML = caloriasTotales+" kcal";
    btnCarritoVR.components.htmlembed.forceRender();
    }
  
}