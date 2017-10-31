var arrayCreditNumber=[];
var creditNumber=(prompt('introduce un número de tarjeta'));
arrayCreditNumber.push(creditNumber);
var add=0;

function isValidCard(creditNumber){
  var reverseCreditCard=[];
  if (creditNumber.length<1){
  return ('tarjeta de crédito no valida');
  }

  else{
    for(var i=0;i<creditNumber.length;i++){       //invierte el arreglo de entrada
    reverseCreditCard.unshift(creditNumber[i]);
    }

    for(var j=0;j<reverseCreditCard.length;j++){//los pares del invertido (empezando en 1 los duplica)
      if(j%2===1){//reverseCreditCard contiene todo el arreglo con los pares multiplicados
        reverseCreditCard[j]=((reverseCreditCard[j])*2);
      }
      if(j%2===0){
        reverseCreditCard[j]=((reverseCreditCard[j])*1);//convierte todo a número
      }
    }


    for(var k=0; k<creditNumber.length;k++){// Deja a un dígito c/elemento
      if (creditNumber[k]<1){
        return "opción no válida";
      }
      if (reverseCreditCard[k]===10||
          reverseCreditCard[k]===12||
          reverseCreditCard[k]===14||
          reverseCreditCard[k]===16||
          reverseCreditCard[k]===18){

            if(reverseCreditCard[k]===10){
            reverseCreditCard[k]=1;
            }
            else if (reverseCreditCard[k]===12){
            reverseCreditCard[k]=3;
            }
            else if(reverseCreditCard[k]==14){
            reverseCreditCard[k]=5;
            }
            else if(reverseCreditCard[k]===16){
            reverseCreditCard[k]=7;
            }
            else if(reverseCreditCard[k]===18){
            reverseCreditCard[k]=9;
            }
          }
    }

    for(var m=0; m<reverseCreditCard.length;m++){//suma todos los elementos del arreglo
    add=add+reverseCreditCard[m];
    }

    var valid= add%10;
    if(valid===0){
      return 'Tarjeta valida';
    }

    else{
    return 'Tarjeta no valida';
    }
  }
}
document.write(isValidCard(creditNumber));
