var word =(prompt("Ingresa la frase que quieres convertir"));
var wordString=word.split('');//separa la cadena en varias cadenas (1 por letra)
cipher(wordString);

function cipher (wordString) {
    var arrayAscii=[];// convierte cada elemento del arreglo en ascii
      if (wordString.length<1){//Si la cadena esta vacía
        return ("Ingresa una cadena válida");
      }

      for (var j=0;j<wordString.length;j++){
        arrayAscii[j]=(wordString[j].charCodeAt())+7;
          if (arrayAscii[j]>54&&arrayAscii[j]<65){// para los casos de numeros
            return ("opcion no valida");
          }

        if ((arrayAscii[j]>122&&arrayAscii[j]<130)||
            (arrayAscii[j]>90&&arrayAscii[j]<98)){// para los ultimos 7 casos (minúsculas y mayúsculas)
              arrayAscii.splice([j],1,(arrayAscii[j])-26);
        }
      }
  return arrayAscii;
  }

  decipher(cipher (wordString));//mando a llamar a la función decipher que depende de cipher

function decipher(arrayAscii){
     for (var i=0;i<arrayAscii.length;i++){
       arrayAscii[i]=String.fromCharCode(arrayAscii[i]);//convierte el arreglo de la función anterios (npu)
     }
     return (arrayAscii);
   }
document.write(decipher(cipher (wordString)));
