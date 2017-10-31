# Ejercicio: Tarjeta de crédito válida
## Descripción

Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

Consideraciones Específicas

Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío

## Pseudocódigo

1. Solicitar al usuario ingresar la cadena por medio del prompt
2.  Convertir el ingreso del usuario a arreglo, cada caracter en un elemento del array (wordString)
3. Iniciar la función isValidCard, que tiene como parámetro (creditNumber)
	* 3.1. Validar si la cadena de entrada esta vacía.
	  - 3.1.1. Si la cadena esta vacía, regresa "opción no válida"
	  - 3.1.2. Si la cadena NO está vacía, continúa
	* 3.2. Invertir el arreglo de entrada
	* 3.3. Del arreglo invertido obtener los números pares
	* 3.4. Multiplicar los números pares x dos
  * 3.5 Validar si alguno de los número (multiplicados o no), son mayores a 10
    - 3.5.1. Si son mayores a 10, reasignarles los valores(10=1, 12=3, 14=5, 16=7, 18=9)
  * 3.6. Si algún elemento del array no está, regresa "Opción no válida"
  * 3.7 Sumar todos los elementos
  * 3.8 Obtener el módulo 10 de la Suma
  * 3.9 Validar si el punto 3.8 es verdadero o falso
      * 3.9.1 Si es verdadero retornar "Tarjeta Valida"
      * 3.9.2 Si es falso retornar "Tarjeta no valida"
4. Imprimir resultado

## Diagrama

![Diagrama Cesar](/assets/images/diagrama-de-flujo.jpeg)
