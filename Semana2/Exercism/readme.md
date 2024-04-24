https://youtu.be/TGlCmXTkOuA

Explicación resistorColor:

1. Se crea la función colorCode con un parametro color al que se le asigna un tipo string, luego se estipula que la funcion dará como resultado un tipo number.
2. Dentro de la función se crea un objeto con claves de tipo string que tendran datos de tipo number, se asin¿gna los datos a cada llave basados en la tabla de colores de las resistencias.
3. Se usa un método para convertir a minusculas y se accede al resultado y se mapeo con su similar de la lista de colores tomando en el numero asociado a ese color.
4. Si el color no existe se muestra un mensaje de error.
5. Se retorna al color value que es el numero asociado con el color.
6. Exportamos la constante colores que contiene un array con los colores que se van a utilizar.

Explicación resistorColorDuo:

1. Se crea un enumeración Color que asigna valores a los colores
2. se crea la función getColorFromString que toma el nombre del color como argumento y devuelve el numero asociado usando switch
3. Se crea la función decodedValue que mapeará la enumeracion de colores y devolverá sus numeros asociados, con un slice tomamos los dos primeros valores.
4. El método map sobre la matriz colors. El método map recorre cada elemento de la matriz y devuelve una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento.
5. Luego de asignar los colores se usa un slice para crear una lista que contenga esos numeros asignados a cada color.
6. Se multiplica el primer numero por 10 para conformar las decenas y se le suma el segundo para obtener el resultado de las dos primeras franjas de la resistencia.
