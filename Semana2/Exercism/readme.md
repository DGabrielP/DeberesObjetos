Video Resistor Color DUo: https://youtu.be/TGlCmXTkOuA
Viedo Resistor Color Trio https://youtu.be/LF3lBAFuTOk

# Explicación resistorColorDuo:

1. Se crea un enumeración Color que asigna valores a los colores
2. se crea la función getColorFromString que toma el nombre del color como argumento y devuelve el numero asociado usando switch
3. Se crea la función decodedValue que mapeará la enumeracion de colores y devolverá sus numeros asociados, con un slice tomamos los dos primeros valores.
4. El método map sobre la matriz colors. El método map recorre cada elemento de la matriz y devuelve una nueva matriz con los resultados de llamar a una función proporcionada en cada elemento.
5. Luego de asignar los colores se usa un slice para crear una lista que contenga esos numeros asignados a cada color.
6. Se multiplica el primer numero por 10 para conformar las decenas y se le suma el segundo para obtener el resultado de las dos primeras franjas de la resistencia.

# RESISTOR COLOR TRIO

1. Se copia el codigo de resistor color duo ya que ahora solo se necesita agregar el numero de ceros dependiendo cual sea el tercer valor y expresar en unidades mas grandes si es que es necesario(kiloahms, megaohms, gigaohms). 
2. Con el codigo anterior de implementa una variable ceros en donde se va a almacenar el resultado de varios metodos. .slice accede al valor asociado al terccer color mientras que Math.pow elevara el indice 10 a ese valor asociado aumentando los ceros en el proporcion al numero.
3. Se crea una variable valorFinal en donde se almacenará el resultado del numero obtenido de las dos primeras franjas con el numero obtenido en la variable ceros y ese sera el resultado.
4. Se crean condicionales if para que si el valor final es mayor a 1000 se divida para un millón y se concatene en una variable unidad la plabara gigaohms y el resultado se divida para un millón.
Se repite el proceso con cien mil, mil y si no cumple ninguna condicion no se realiza ninguna operacion y la variable concatenada será ohms.