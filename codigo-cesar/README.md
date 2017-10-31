# Ejercicio: Cifrado Cesar
## Descripción

Crea una web que pida, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha
Por ejemplo:

Texto original: ABCDEFGHIJKLMNOPQRSTUVWXYZ
Texto codificado: HIJKLMNOPQRSTUVWXYZABCDEFG

## Pseudocódigo

1. Solicitar al usuario ingresar la cadena por medio del prompt

2.  Convertir el ingreso del usuario a arreglo, cada caracter en un elemento del array (wordString)

3. Iniciar la función cipher, que tiene como parámetro (wordString)

	* 3.1. Si el arreglo está vacío, regresar "opción no válida
	* 3.2. Generar una variable de tipo arreglo (arrayAscii)
	* 3.3. Recorrer cada elemento del arreglo e ir cambiando las letras por su código ascii (.charCodeAt()), guardar los cambios en arrayAscii
  * 3.4. Si el arreglo contiene algún número, regresar "opción no válida"
  * 3.5. Si el elemento del arreglo transformado se encuentra entre los siguientes rangos(123-129 ó 97-103) restarle 26
	* 3.6 regresar el arreglo arrayAscii

4. Iniciar function decipher, con parámetro (arrayAscii)
	* 4.1. Recorrer cada elemento del arreglo e ir cambiando los números del código ascii a letras (String.fromCharCode)
	* 4.2. regresar el arreglo arrayAscii

5. Imprimir resultado

## Diagrama

![Diagrama Cesar](/assets/images/diagrama-de-flujo.PNG)
