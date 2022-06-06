function obtenerSemaforo() {
//Calorias
  if (caloriasTotales>2000 && caloriasTotales<2350) {
    semaforoCalorias = "#4cb050";
    retroCalorias = "<strong>¡Felicidades!</strong>, de acuerdo a la Food and Drug Administration, la recomendación de consumo diario es de 2000 calorías en promedio.";
    correctoCalorias = 1;
  }

  if (caloriasTotales<2000 || caloriasTotales>2350) {
    semaforoCalorias = "#e43f11";
    retroCalorias = "Revisa tu consumo de calorías. De acuerdo a la Food and Drug Administration, la recomendación de consumo diario es de 2000 calorías en promedio.";
  }

//Azúcares
  if (azucaresTotales<100) {
    semaforoAzucares = "#4cb050";
    retroAzucares = "<strong>Felicidades</strong>, la cantidad de azúcar que has adquirido este día, es la recomendable por la OMS.";
    correctoAzucares = 1;
  }

  if(azucaresTotales>200) {
    semaforoAzucares = "#e43f11";
    retroAzucares = "Por recomendación de la OMS, la cantidad máxima de azúcar recomendada es de 200 Kcal o 50 gr, parece que has excedido esta cantidad.";
  }

  if (azucaresTotales>100 && azucaresTotales<200) {
    semaforoAzucares = "#fcc11b";
    retroAzucares = "Por recomendación de la OMS, la cantidad máxima de azúcar recomendada es de 200 Kcal o 50 gr. Ten cudado de no rebasar esta cantidad.";
  }

//Grasas
  if (grasaSatTotales<120) {
    semaforoGrasas = "#4cb050";
    retroGrasas = "Por recomendación de la American Heart Association, para 2000 calorías diarias son 120 kcal o 13 gr del consumo total. <strong>Estás en el rango correcto, ¡felicidades!</strong>";
    correctoGrasas = 1;
  }

  if (grasaSatTotales>120) {
    semaforoGrasas = "#e43f11";
    retroGrasas = "Por recomendación de la American Heart Association, para 2000 calorías diarias son 120 kcal o 13 gr del consumo total. Parece que has excedido esta cantidad.";
  }

//Sodio
  if (sodioTotales<1500) {
    semaforoSodio = "#4cb050";
    retroSodio = "De acuerdo con American Heart Association, para 2000 calorías, se recomienda un consumo de 1500 mg o 1.5 gr; <strong>Has elegido bien, ¡felicidades!</strong>";
    correctoSodio = 1;
  }

  if(sodioTotales>2300) {
    semaforoSodio = "#e43f11";
    retroSodio = "De acuerdo con American Heart Association, para 2000 calorías, se recomienda un consumo de 1500 mg o 1.5 gr; tu selección de este día está arriba de 2,300 o 2.3 gr. Verifica de nueva cuenta.";
  }

  if (sodioTotales>1500 && azucaresTotales<2300) {
    semaforoSodio = "#fcc11b";
    retroSodio = "De acuerdo con American Heart Association, para 2000 calorías, se recomienda un consumo de 1500 mg o 1.5 gr; recuerda no pasar de 2,300 o 2.3 gr.";
  }

}