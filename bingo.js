const fila1 = [];
const fila2 = [];
const fila3 = [];

function crearfilas(filaNum) {
  let por = 9;
  let mas = 1;

  for (let i = 0; i < 9; i++) {
    if (i == 1) {
      por = 10;
      mas = 10;
    }
    if (i >= 2) {
      mas += 10;
    }

    if (i == 8) {
      por = 11;
    }
    filaNum[i] = Math.floor(Math.random() * por) + mas;
  }

  let array = [];

  for (let i = 0; i != 4; i++) {
    let j = Math.floor(Math.random() * 9);
    array.push(j);
  }

  while (
    array[0] == array[1] ||
    array[0] == array[2] ||
    array[0] == array[3] ||
    array[1] == array[2] ||
    array[1] == array[3] ||
    array[2] == array[3]
  ) {
    array[1] = Math.floor(Math.random() * 9);
    array[2] = Math.floor(Math.random() * 9);
    array[3] = Math.floor(Math.random() * 9);
  }

  for (let x = 0; x < array.length; x++) {
    filaNum[array[x]] = "";
  }

  return filaNum;
}

crearfilas(fila1);
crearfilas(fila2);

function arreglarIguales() {
  let cont = 0;
  let x;
  let j = [];
  for (let i = 0; i < fila1.length; i++) {
    if (typeof fila1[i] === "number" && typeof fila2[i] === "number") {
      cont++;
      if (cont == 5) {
        x = i;
      }
    }
    if (fila1[i] === "") {
      j.push(i);
    }
  }
  //console.log(`contador: ${cont}`);

  if (cont == 5) {
    //console.log(`x: ${x}`);
    //console.log(`j: ${j[0]}`);
    fila1[x] = "";

    let por = 9;
    let mas = 1;

    switch (j[0]) {
      case 1:
        por = 10;
        mas = 10;
        break;
      case 2:
        por = 10;
        mas = 20;
        break;
      case 3:
        por = 10;
        mas = 30;
        break;
      case 4:
        por = 10;
        mas = 40;
        break;
      case 5:
        por = 10;
        mas = 50;
        break;
      case 6:
        por = 10;
        mas = 60;
        break;
      case 7:
        por = 10;
        mas = 70;
        break;
      case 8:
        por = 11;
        mas = 80;
        break;
    }

    fila1[j[0]] = Math.floor(Math.random() * por) + mas;
  }
}

arreglarIguales();

function filaTres() {
  let por = 9;
  let mas = 1;
  let cont = 0;

  for (let i = 0; i < 9; i++) {
    if (i == 1) {
      por = 10;
      mas = 10;
    }
    if (i >= 2) {
      mas += 10;
    }

    if (i == 8) {
      por = 11;
    }

    if (fila1[i] != "" && fila2[i] != "") {
      while (fila1[i] == fila2[i]) {
        fila2[i] = Math.floor(Math.random() * por) + mas;
      }
    }
    if (
      (fila1[i] === "" && fila2[i] === "") ||
      (fila1[i] === "" && typeof fila2[i] === "number") ||
      (typeof fila1[i] === "number" && fila2[i] === "")
    ) {
      fila3[i] = Math.floor(Math.random() * por) + mas;

      while (fila3[i] == fila2[i] || fila3[i] == fila1[i]) {
        fila3[i] = Math.floor(Math.random() * por) + mas;
      }
    } else {
      fila3[i] = "";
      cont++;
    }
  }
  //console.log(cont);
  //console.log(fila3);

  for (let i = 0; i < fila3.length; i++) {
    if (
      (cont < 4 && fila1[i] === "" && typeof fila2[i] === "number") ||
      (cont < 4 && typeof fila1[i] === "number" && fila2[i] === "")
    ) {
      fila3[i] = "";
      cont++;
    }
  }

  //console.log(cont);

  return fila3;
}

filaTres();

console.log(fila1);
console.log(fila2);
console.log(fila3);
