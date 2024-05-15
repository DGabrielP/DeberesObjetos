https://youtu.be/TF67V4i_AR4

## RNA TRANSCRIPTION

1. Creamos una función en donde el parámetro será dnaSequence y un mapa de complementos con las dos cadenas de ADN y ARN.
2. En la constante isValidDnaSecuence guardaremos el resultado de método ".test(dnaSequence)" que devolverá un booleano si el parámetro cumple o no con el argumento.
3.La expresión regular /.../g realiza una búsqueda de la secuencia que ponemos dentro de la expresión.
3. "^" indica que la cadena debe empezar exactamente con el mismo patrón que se escribe a continuación
4. Con ".split("")" dividimos la cadena en caracteres individuales y mapeamos estos caracteres y se generan los complementos de "complementMap", finalmente el resultado se une con ".join" y obtenemos nuestra cadena de ARN


## SPACE AGE

1. Creamos una función “age” y definimos los parámetros y tipos.
2. Declaramos earthYearSec que será el número de segundos que tiene un año.
3. Creamos el objeto literal orbitalPeriods que nos permitirá mapear los nombres de los planetas con sus órbitas relativas a la tierra.
4. con un "if" definimos si el nombre del planeta ingresado es válido.
5. Luego tomamos el argumento seconds y lo dividimos para earthYearSec y así obtenemos los años terrestres, tomamos ese resultado y lo dividimos para las órbitas relativas.
6. El resultado es una cadena que convertimos a decimal con "parseFloat"