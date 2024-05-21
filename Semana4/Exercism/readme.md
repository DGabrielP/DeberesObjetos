https://youtu.be/p5affvqx9po

## SPACE AGE

1. Creamos una función “age” y definimos los parámetros y tipos.
2. Declaramos earthYearSec que será el número de segundos que tiene un año.
3. Creamos el objeto literal orbitalPeriods que nos permitirá mapear los nombres de los planetas con sus órbitas relativas a la tierra.
4. con un "if" definimos si el nombre del planeta ingresado es válido.
5. Luego tomamos el argumento seconds y lo dividimos para earthYearSec y así obtenemos los años terrestres, tomamos ese resultado y lo dividimos para las órbitas relativas.
6. El resultado es una cadena que convertimos a decimal con "parseFloat"

## D&D

1. Se completa la clase que nos dan por defecto añadiendo las propiedades que se va a usar y asignándoles tipos de datos.
2. Se crea un constructor para asignar valores a las propiedades, se usa la variable const para llamar a un método que se desarrolló previamente aunque está más abajo.
3. Si notamos que los valores usan [num] es porque se usa un array base para la lógica de nuestro código.
4. Declaramos la función generateAbilityScores y esperamos que nos devuelva un array de números. para no confundirnos se declara otro array.
5. Usamos un for para definir el criterio de nuestro bucle y sólo permitir 4 lanzamientos. Cada uno de esos lanzamientos se simula con un método MAth.random que devuelve un decimal aleatorio entre 0 y 1, por eso el resultado se multiplica por 6 que es el rango de un dado. Se usa Math.ceil para redondear al entero inferior.
6. Se usa un .push para incluir ese resultado ordenadamente dentro de un array, Ordenamos ese array con .sort y eliminamos el primer valor que ahora será el menor con .splite. finalmente usamos .reduce para sumar los valores que nos quedan en el array.
7. declaramos el último método que usaremos, getModifierFor que tomará un valor de score y lo dividirá para 10.
8. Como ya tenemos asignadas las partes del array que tomará cada valor no necesitamos hacer nada más