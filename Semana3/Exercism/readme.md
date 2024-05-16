Video leap: https://youtu.be/LF3lBAFuTOk
Video rna: https://youtu.be/TF67V4i_AR4



## LEAP

1. en este código se usa una función llamada isLeap que determina si un año dado es bisiesto o no. 
2. isLeap toma un parámetro year que se espera que sea un número entero (representando un año) y devuelve un valor booleano (true si el año es bisiesto y false si no lo es).
3. La función conciste en una condición que verifica si el año es divisible por 4 y no es divisible por 100 sin dejar residuo, o si es divisible por 400 sin dejar residuo. Esta es la regla básica para determinar si un año es bisiesto o no. Si esta condición es verdadera, significa que el año es bisiesto y la función devuelve true.

## RNA TRANSCRIPTION

1. Creamos una función en donde el parámetro será dnaSequence y un mapa de complementos con las dos cadenas de ADN y ARN.
2. En la constante isValidDnaSecuence guardaremos el resultado de método ".test(dnaSequence)" que devolverá un booleano si el parámetro cumple o no con el argumento.
3.La expresión regular /.../g realiza una búsqueda de la secuencia que ponemos dentro de la expresión.
3. "^" indica que la cadena debe empezar exactamente con el mismo patrón que se escribe a continuación
4. Con ".split("")" dividimos la cadena en caracteres individuales y mapeamos estos caracteres y se generan los complementos de "complementMap", finalmente el resultado se une con ".join" y obtenemos nuestra cadena de ARN