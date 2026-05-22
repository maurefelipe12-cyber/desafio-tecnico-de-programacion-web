function calcularCalor() {
  let T0 = Number(document.getElementById("t0").value);
  let Ts = Number(document.getElementById("ts").value);
  let k = Number(document.getElementById("k").value);
  let t = Number(document.getElementById("tiempo").value);

  if (t < 0 || k < 0) {
    document.getElementById("resultadoCalor").innerHTML =
      "Error: el tiempo y la constante k no pueden ser negativos.";
    return;
  }

  let T = Ts + (T0 - Ts) * Math.exp(-k * t);
  let resultado = Math.round(T);

  document.getElementById("resultadoCalor").innerHTML =
    "Temperatura final aproximada: " + resultado + " °F";
}

function factorial(n) {
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado = resultado * i;
  }

  return resultado;
}

function combinacion(n, r) {
  return factorial(n) / (factorial(r) * factorial(n - r));
}

function calcularCombinaciones() {
  let n1 = Number(document.getElementById("n1").value);
  let r1 = Number(document.getElementById("r1").value);
  let n2 = Number(document.getElementById("n2").value);
  let r2 = Number(document.getElementById("r2").value);

  if (r1 > n1 || r2 > n2) {
    document.getElementById("resultadoCombinaciones").innerHTML =
      "Error: r no puede ser mayor que n.";
    return;
  }

  if (n1 < 0 || r1 < 0 || n2 < 0 || r2 < 0) {
    document.getElementById("resultadoCombinaciones").innerHTML =
      "Error: no se permiten valores negativos.";
    return;
  }

  let c1 = combinacion(n1, r1);
  let c2 = combinacion(n2, r2);
  let total = c1 * c2;

  document.getElementById("resultadoCombinaciones").innerHTML =
    "C(" + n1 + "," + r1 + ") = " + c1.toLocaleString("es-BO") +
    "<br>C(" + n2 + "," + r2 + ") = " + c2.toLocaleString("es-BO") +
    "<br><br>Total de combinaciones: " + total.toLocaleString("es-BO");
}