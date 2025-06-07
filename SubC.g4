grammar SubC;

// Parser rules
programa: instrucciones;

instrucciones
  : instruccion
  | instrucciones instruccion
  ;

instruccion: seleccion;

seleccion
  : 'switch' '(' IDENTIFICADOR ')' '{' casos '}'
  ;

casos
  : caso
  | casos caso
  ;

caso
  : 'case' NUMERO ':' sentencia
  | 'default' ':' sentencia
  ;

sentencia
  : salida
  | salida sentencia
  | terminar
  ;

salida
  : 'printf' '(' CADENA ')' ';'
  ;

terminar
  : 'break' ';'
  ;

// Lexer rules
IDENTIFICADOR: LETRA (LETRA | DIGITO)*;

NUMERO: DIGITO+;

CADENA: '"' (LETRA | DIGITO | SIMBOLO)+ '"'; 

fragment LETRA: [a-zA-Z];

fragment DIGITO: [0-9];

fragment SIMBOLO: ',' | '.' | ';' | '!' | '?' | '"' ;

// Ignorar espacios en blanco
WS: [ \t\r\n]+ -> skip; 