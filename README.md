# Simuladores Interactivos con Lógica Matemática

Proyecto web desarrollado para el desafío técnico de programación web.  
La aplicación permite resolver dos simuladores interactivos utilizando HTML, CSS y JavaScript.

El proyecto aplica lógica matemática, manipulación del DOM y diseño web para mostrar resultados dinámicos a partir de datos ingresados por el usuario.

---

## Descripción del proyecto

Esta plataforma contiene dos ejercicios principales:

1. Simulador de Transferencia de Calor.
2. Calculador de Combinaciones Complejas.

Cada simulador cuenta con un formulario donde el usuario puede ingresar o modificar valores numéricos.  
Luego, JavaScript procesa los datos y muestra el resultado en pantalla de forma dinámica.

---

## Ejercicio 1: Simulador de Transferencia de Calor

Este simulador calcula la temperatura final de un objeto después de transcurrido un tiempo determinado dentro de un entorno con temperatura constante.

### Fórmula utilizada

T = Ts + (T0 - Ts) * e^(-k * t)

### Variables

- `T`: temperatura final.
- `Ts`: temperatura del entorno.
- `T0`: temperatura inicial del objeto.
- `k`: constante de enfriamiento.
- `t`: tiempo transcurrido en horas.

### Valores de prueba

```txt
T0 = 120
Ts = 38
k = 0.45
t = 3
```
---

## Ejercicio 2: Calculador de Combinaciones Complejas

Este simulador calcula el total de combinaciones posibles para un sorteo dividido en dos grupos independientes.

El caso planteado utiliza:

```txt
Grupo 1: C(59,5)
Grupo 2: C(35,1)
```

El resultado total se obtiene multiplicando ambas combinaciones.

### Fórmula utilizada

```txt
C(n, r) = n! / (r! * (n - r)!)
```

### Valores de prueba

```txt
n1 = 59
r1 = 5
n2 = 35
r2 = 1
```
