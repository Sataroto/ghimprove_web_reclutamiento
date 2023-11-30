function ordenar(lista) {
  var aux = 0;
  var uo = lista.length;

  for (var j = 0; j < 13; j++) {
    for (var i = 0; i < uo - 1; i++) {
      if (lista[i] > lista[i + 1]) {
        aux = lista[i + 1];
        lista[i + 1] = lista[i];
        lista[i] = aux;
      }
    }
    uo -= 1;
  }

  console.log(lista);
}

var listaUno = [12, 72, 14, 45, 90, 99, 1, 20, 23, 4, 71, 11, 77];
var listaDos = [34, 71, 60, -1, 55, 51, 87, 59, 70, 2, 48, 6, 0];

ordenar(listaUno);
ordenar(listaDos);
