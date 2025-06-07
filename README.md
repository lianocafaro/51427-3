# 51427
ANALIZADOR DE EXPRESIONES LOGICAS CON ANTLR Y JAVASCRIPT:

- Este proyecto permite analizar, interpretar y traducir expresiones lógicas escritas en notación proposicional a código JavaScript. Utiliza ANTLR4 para el análisis léxico y sintáctico, y     cuenta con funcionalidades como:

   1.DETECTAR ERRORES LEXICOS Y SINTACTICOS. 

   2.GENERAR EL ARBOL DE DERIVACION DE ESA EXPRESION.

   3.GENERA TABLA DONDE SE IDENTIFICA LOS LEXEMAS Y LOS TOKENS. 

   4.TRADUCE LA EXPRESION A SU EQUIVALENCIA EN JAVASCRIPT. 


FUNCIONAMIENTO DEL ANALIZADOR: 
1. Al presionar sobre el archivo SubC.g4 se podra observar la gramatica propuesta para el caso que estudia el analizador
2. Para probar una entrada se necesita editar el archivo input.txt e ingresar una cadena o entrada y guardar los cambios (CTRL+S) 
3. Para ver el analizador funcionar concretamente nos vamos al directorio raiz del proyecto y abrimos el terminal
4. Una vez abierto el terminal debemos ejecutar el siguiente comando: node main.js

   (Esto dara la instruccion de arranque al programa)

7. Una vez ejecutado el comando mostrara lo siguiente si entrada asignada en el input.txt es valida

   a. Tabla de Tokens donde identificara cual es el Lexema y cual es el toquen asociado:

   b. Arbol de analisis sintactico:

   c . La traduccion de la entrada al Lenguaje de Programacion JAVASCRPT:

   d. El analisis respecto a la entrada, es decir determina si la entrada es valida o no.

8. En caso de ser una entrada invalida(Lexica o sintacticamente) puesta previamente en el acrhivo input.txt.

    a. Tipo de Error Detectado (LEXICO O SINTACTICO) 

    b. Linea donde se produce el error

    c. El motivo del Error


 



    
     
