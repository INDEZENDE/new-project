var word =(prompt("Ingresa la frase que quieres convertir"));
var wordString=word.split('');//separa la cadena en varias cadenas (1 por letra)
cipher(wordString);


function cipher (wordString) {// convierte cada elemento del arreglo en ascii
  var arrayAscii=[];
   for (var i=0;i<wordString.length;i++){
     arrayAscii[i]=(wordString[i].charCodeAt())+7;
     if ((arrayAscii[i]>122&&arrayAscii[i]<130)||(arrayAscii[i]>90&&arrayAscii[i]<98)){// para los ultimos 7 casos (minúsculas y mayúsculas)
       arrayAscii.splice([i],1,(arrayAscii[i])-26);
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
